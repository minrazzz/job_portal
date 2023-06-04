import React from "react";

export const Footer = () => {
  return (
    <>
      <footer class=" mt-40 Footer bg-[#057E01]  shadow dark:bg-[#1E2936] bg-[#047E01] h-[50%]">
        <div class="w-full maxw-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/home" class="flex items-center mb-4 sm:mb-0">
              <img src="/logo.png" className="h-[80px] mr-3" alt="Job-Seeker" />
              <span class="self-center text-2xl font-semibold font-fair whitespace-nowrap text-white">
                JOB-SEEKER
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 text-white">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-white">
            © 2023{" "}
            <a href="/" class="hover:underline text-white">
              Job-Seeker™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
