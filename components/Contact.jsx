import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_PUBLIC_KEY,
} from "../constants";
import Footer from "./Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (!username || !user_email || !user_message) {
      setLoading(false);
      toast.error("Please fill all the fields.", {
        position: "bottom-right",
      });
      return;
    }

    emailjs
      .send(
        "service_6lvkt87",
        "template_h6eueet",
        {
          from_name: username,
          to_name: "Vaibhav Chavan",
          reply_to: user_email,
          to_email: "vaibhavchavan1425@example.com", // Replace with your actual email
          message: user_message,
        },
         "12gHkIDsLDbKl3c8Q"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", {
            position: "bottom-right",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS error:", error);
          toast.error("Uh, oh! Something went wrong. Please try again later.", {
            position: "bottom-right",
          });
        }
      );
  };

  return (
    <div className="relative z-0 bg-black min-h-screen w-full">
      <div
        id="contact"
        className="text-white contact overflow-x-hidden pt-6 flex justify-center"
      >
        <div className="z-10 w-full sm:w-[650px] p-8 rounded-2xl">
          <p className="font-light mb-1">REACH OUT TO ME</p>
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
            Contact Vaibhav
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-8"
            noValidate
          >
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 text-white"
                required
                aria-label="Your name"
              />
            </label>

            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex: abc@gmail.com"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 text-white"
                required
                aria-label="Your email"
              />
            </label>

            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Do you have anything to say?"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 text-white resize-none"
                required
                aria-label="Your message"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-busy={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
