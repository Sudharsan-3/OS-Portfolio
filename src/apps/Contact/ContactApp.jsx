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
    <div className="text-gray-900 space-y-4">

      <h2 className="text-2xl font-bold">
        Feedback / Contact
      </h2>

      <p className="text-sm text-gray-600">
        Send me a message — I’ll reply via email.
      </p>

      <form onSubmit={sendEmail} className="space-y-3">

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg h-28"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
};

export default ContactApp;