import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactApp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-3xl mx-auto text-gray-900">
  
      {/* HEADER CARD */}
      <div className="bg-gradient-to-r from-blue-50 to-white border border-gray-200 rounded-2xl p-6 mb-6">
  
        <h2 className="text-3xl font-bold">
          Let's Connect
        </h2>
  
        <p className="text-gray-600 mt-2">
          Have feedback, an opportunity, or just want to say hello?
          Send me a message and I'll get back to you.
        </p>
  
      </div>
  
      {/* FORM CARD */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
  
        <form
          onSubmit={sendEmail}
          className="space-y-4"
        >
  
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
  
            <input
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="
                w-full
                p-3
                border
                border-gray-300
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
  
            <input
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="
                w-full
                p-3
                border
                border-gray-300
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
  
            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              className="
                w-full
                p-3
                border
                border-gray-300
                rounded-xl
                h-36
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              required
            />
          </div>
  
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-xl
              font-medium
              hover:bg-blue-700
              transition
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
  
        </form>
  
      </div>
    </div>
  );
};

export default ContactApp;