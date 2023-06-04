import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/logo3.png"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_u96ktuk",
        "template_3dsy6sq",
        {
          from_name: form.name,
          to_name: "Cloudcore",
          from_email: form.email,
          to_email: "carnageitself@gmail.com",
          message: form.message,
        },
        "oiyK82ekyOKggogpg"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I will get back to you ASAP !");
        setForm({
          name: "",
          email: "",
          message: "",
        }),
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong !");
          };
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="mt-12 h-full mx-10">
      <div className="contactContainer">
        <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center`}
        >
          <div className="flex-1 bg-transparent p-8 rounded-2xl">
            <h3 className="">Contact</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-black font-medium mb-4">Your Name</span>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 to-gray-300 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full border border-gray-800"></div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your Good Name?"
                    className="bg-white py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none font-medium border-none relative w-full"
                  />
                </div>
              </label>
              <label className="flex flex-col">
                <span className="text-black font-medium mb-4">Your email</span>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 to-gray-300 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full border border-gray-800"></div>
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your Web Address?"
                    className="bg-white py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none font-medium border-none relative w-full"
                  />
                </div>
              </label>
              <label className="flex flex-col">
                <span className="text-black font-medium mb-4">
                  Your Message
                </span>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 to-gray-300 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full border border-gray-800"></div>
                  <textarea
                    rows={3}
                    type="text"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello there, how can I help you?"
                    className="bg-white py-4 px-6 placeholder:text-gray-500 text-black rounded-lg outline-none  font-medium border-none relative w-full resize-none"
                  />
                </div>
              </label>

              <div className="relative group mt-3">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 to-gray-300 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-28 border border-gray-800"></div>
                <button
                  type="submit"
                  className="bg-black py-3 px-8 rounded-xl outline-none w-fit  text-gray-300 group-hover:text-white transition duration-200 font-light relative"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>

          <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] mt-5">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
