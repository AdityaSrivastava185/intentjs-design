import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-black border-2 border-dotted border-t-zinc-900 mt-3">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 items-center md:grid-cols-4">
            {/* Company Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-green-400 uppercase">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                {["About", "Careers", "Brand Center", "Blog"].map((item, index) => (
                  <li key={index} className="mb-4">
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Center Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-green-400 uppercase">
                Help center
              </h2>
              <ul className="text-gray-500 font-medium">
                {["Discord Server", "Twitter", "Facebook", "Contact Us"].map((item, index) => (
                  <li key={index} className="mb-4">
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-green-400 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                {["Privacy Policy", "Licensing", "Terms & Conditions"].map(
                  (item, index) => (
                    <li key={index} className="mb-4">
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Download Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-green-400 uppercase">
                Download
              </h2>
              <ul className="text-gray-500 font-medium">
                {["iOS", "Android", "Windows", "MacOS"].map((item, index) => (
                  <li key={index} className="mb-4">
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="px-4 py-6 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024 <a href="#">Intentjs™</a>. All Rights Reserved.
            </span>

            {/* Social Media Icons */}
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              {[
                { name: "Facebook", svgPath: "M6.135 3H8V0H6.135..." },
                { name: "Discord", svgPath: "M16.942 1.556a16.3..." },
                { name: "Twitter", svgPath: "M20 1.892a8.178 8..." },
                { name: "GitHub", svgPath: "M10 .333A9.911 9.911..." },
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d={icon.svgPath} />
                  </svg>
                  <span className="sr-only">{icon.name} page</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
