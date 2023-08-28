import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu instantly when a link is clicked
  const closeMenuOnClick = () => {
    setIsOpen(false);
  };

  // Close the mobile menu when the window is resized
  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    className="h-13 w-13"
                    src="/logo1.png"
                    alt="Workflow"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-12 flex items-baseline space-x-6">
                  <Link href="/" onClick={closeMenuOnClick} className="text-gray-900 hover:bg-amber-400 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>

                  <Link href="/product" onClick={closeMenuOnClick} className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Products
                  </Link>

                  <Link href="/about" onClick={closeMenuOnClick} className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    About Us
                  </Link>

                  <Link href="/contact" onClick={closeMenuOnClick} className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/" onClick={closeMenuOnClick} className="text-gray-900 hover:bg-amber-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>

                <Link href="/product" onClick={closeMenuOnClick} className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Products
                </Link>

                <Link href="/about" onClick={closeMenuOnClick} className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  About Us
                </Link>

                <Link href="/contact" onClick={closeMenuOnClick} className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
