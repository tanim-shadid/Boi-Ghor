import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
          <div className="mt-16 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl font-bold">
              About <span className="text-green-500">Us</span>
            </h1>
            <p className="text-sm md:text-xl">
              Welcome to Boi Ghor, where passion for reading meets
              convenience. We're dedicated to bringing you the best selection of
              books across all genres.
            </p>
          </div>

          {/* Our Story */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-sm-700 dark:text-sm-300">
                <p>
                  We are a students of Ahsanullah University of Science and Technology, 
                  Department of Computer Science and Engineering. We started this project
                   as a part of our curriculum to learn and implement the MERN stack.
                    Our goal is to create a user-friendly online bookstore that offers a
                     wide range of books to readers of all ages and interests.
                </p>
                  
              </div>
            </div>
            <div className="bg-green-100 dark:bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Extensive collection of books across all genres</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Competitive pricing and regular discounts</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Fast and reliable shipping</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Expert recommendations and reviews</span>
                </li>
                
              </ul>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
