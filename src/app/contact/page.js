import React from "react";
import { BiLocationPlus } from "react-icons/bi";

const ContactUsPage = () => {
  return (
    <div>
      <div className="bg h-72 flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">Contact us</h1>
        <p className=" mt-3 text-center mx-5">
          Choose the course of your choice and become self-reliant by acquiring
          skills.
        </p>
      </div>

      <div className="grid mx-5 grid-cols-1 my-10 gap-5 md:grid-cols-2">
        <div className="border p-8 border-[#0000004D] rounded-lg">
          <h3 className="text-2xl font-semibold  text-primary mb-3">Contact</h3>
          <p className="text-primary">
            Collaborating for a better drive learning.
          </p>

          <div className="mt-5 flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <BiLocationPlus className="w-9 h-9 text-white p-1 rounded-md bg-loginButton" />
              <div>
                <p className="text-secondary font-semibold text-lg">Location</p>
                <p className="text-sm">
                  1234-Jobeda Mansion 5th floor, Parla, Netrokona Sadar,
                  Netrokona
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <BiLocationPlus className="w-9 h-9 text-white p-1 rounded-md bg-loginButton" />
              <div>
                <p className="text-secondary font-semibold text-lg">Phone</p>
                <p className="text-sm">
                +441886747843
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <BiLocationPlus className="w-9 h-9 text-white p-1 rounded-md bg-loginButton" />
              <div>
                <p className="text-secondary font-semibold text-lg">Email</p>
                <p className="text-sm">
                support@master.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="border border-[#0000004D] rounded-lg p-8 w-full">
            <h2 className="text-2xl font-semibold  text-primary mb-6">
              Send us a message
            </h2>
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-primary ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-primary ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-semibold text-primary ">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-secondary duration-300 text-white py-2 px-4 rounded-md hover:bg-[#9a236c] "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
