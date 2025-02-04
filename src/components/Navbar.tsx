"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="text-white font-serif">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">Allison</div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ">
          <Link href="#" className="text-sm font-semibold leading-6 ">
            About
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 ">
            Software Projects
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 ">
            Design
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 0">
            Contact Me
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 ">
            Blog
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-backgroundColor px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Software Projects
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Design
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
