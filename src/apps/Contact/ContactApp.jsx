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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed to send message");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-3xl mx-auto text-gray-900 px-1">

      {/* HEADER */}
      <section
        className="
          rounded-2xl
          border border-gray-200
          bg-gradient-to-br from-blue-50 via-white to-white
          p-5 sm:p-6
        "
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
          Get In Touch
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
          Let's Connect
        </h2>

        <p className="mt-2 text-sm sm:text-[15px] leading-6 text-gray-600 max-w-2xl">
          Have an opportunity, feedback, or just want to say hello?
          Send me a message and I'll get back to you.
        </p>
      </section>

      {/* FORM */}
      <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">

        <form
          onSubmit={sendEmail}
          className="space-y-5"
        >

          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800 mb-1.5"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border border-gray-200
                bg-gray-50
                px-4 py-3
                text-sm
                text-gray-900
                placeholder:text-gray-400
                outline-none
                transition
                focus:border-blue-500
                focus:bg-white
                focus:ring-2
                focus:ring-blue-100
              "
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-1.5"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border border-gray-200
                bg-gray-50
                px-4 py-3
                text-sm
                text-gray-900
                placeholder:text-gray-400
                outline-none
                transition
                focus:border-blue-500
                focus:bg-white
                focus:ring-2
                focus:ring-blue-100
              "
              required
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 mb-1.5"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your opportunity or message..."
              value={form.message}
              onChange={handleChange}
              className="
                w-full
                min-h-36
                rounded-xl
                border border-gray-200
                bg-gray-50
                px-4 py-3
                text-sm
                leading-6
                text-gray-900
                placeholder:text-gray-400
                outline-none
                resize-y
                transition
                focus:border-blue-500
                focus:bg-white
                focus:ring-2
                focus:ring-blue-100
              "
              required
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-xl
              bg-blue-600
              px-4 py-3
              text-sm
              font-semibold
              text-white
              hover:bg-blue-700
              disabled:cursor-not-allowed
              disabled:opacity-60
              active:scale-[0.99]
              transition
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          <p className="text-center text-[11px] text-gray-400">
            Your message will be sent directly through the contact form.
          </p>

        </form>
      </section>

    </div>
  );
};

export default ContactApp;