import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Logo } from "./logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const pages = [
  { name: "Writing", href: "writing" },
  { name: "Events", href: "events" },
  { name: "About", href: "about" },
];

export function NavBar() {
  return (
    <Disclosure as="nav" className="theme-sand fixed w-full">
      {/* Desktop */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 border-b border-black">
        <div className="flex h-16 justify-between items-center">
          <div className="flex shrink-0 items-center">
            <Logo />
          </div>
          <div className="hidden sm:flex space-x-12 justify-end">
            {pages.map((page) => (
              <h3 className="text-base" key={page.name}>
                <a href={page.href}>{page.name}</a>
              </h3>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center hover:cursor-pointer">
              <span className="absolute -inset-0.5" />
              <Bars3Icon className="block size-6 group-data-[open]:hidden stroke-[1px]" />
              <XMarkIcon className="size-6 hidden group-data-[open]:block stroke-[1px]" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col items-center justify-center space-y-12 px-6 py-6 h-dvh">
          {pages.map((page) => (
            <DisclosureButton as="a" href={page.href} key={page.name}>
              <p className="text-2xl hover:underline relative bottom-20">
                {page.name}
              </p>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
