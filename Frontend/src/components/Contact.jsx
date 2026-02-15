import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
          <div className="mt-16 items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">
              Contact <span className="text-green-500">Us!</span>
            </h1>
            <p className="mt-6 text-lg">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Ahsanullah University of Science and Technology
                        <br />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        tanim.cse.20210204055@aust.edu
                        <br />
                        tanim.shadid07@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +8801871489707
                        <br />
                        +8801515675625
                      </p>
                    </div>
                  </div>

                
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border rounded-md outline-none bg-white dark:bg-slate-900 dark:border-slate-700"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border rounded-md outline-none bg-white dark:bg-slate-900 dark:border-slate-700"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      placeholder="Enter subject"
                      className="w-full px-4 py-3 border rounded-md outline-none bg-white dark:bg-slate-900 dark:border-slate-700"
                      {...register("subject", { required: true })}
                    />
                    {errors.subject && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 font-medium">Message</label>
                    <textarea
                      rows="5"
                      placeholder="Enter your message"
                      className="w-full px-4 py-3 border rounded-md outline-none bg-white dark:bg-slate-900 dark:border-slate-700"
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white px-4 py-3 rounded-md hover:bg-pink-700 duration-300 cursor-pointer"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
