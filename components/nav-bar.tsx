"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Logo } from "./logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Col, Row } from "./blocks";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const pages = [
  { name: "Writing", href: "writing" },
  { name: "Events", href: "events" },
  { name: "About", href: "about" },
];

export function NavBar() {
  const pathname = usePathname();
  const isHome = pathname == "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Disclosure as="nav" className="fixed w-full z-100">
      {({ open }) => (
        <>
          <div
            className={clsx(
              "border-b z-10 group",
              scrolled || open
                ? "border-black theme-classic"
                : clsx(
                    "border-white text-white hover:border-black hover:bg-white hover:text-black",
                    isHome ? "bg-transparent backdrop-blur-sm" : "theme-teal",
                  ),
            )}
            id="navbar"
          >
            <div className="narrow-section-padding">
              <Row className="h-16 justify-between items-center">
                <Row className="flex shrink-0 items-center relative group">
                  <Logo
                    dark={scrolled || open || !isHome}
                    className="transition-opacity group-hover:opacity-0"
                  />
                  <Logo
                    dark
                    className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100"
                  />
                </Row>
                <Row className="hidden sm:flex space-x-12 justify-end">
                  {pages.map((page) => (
                    <a
                      className="text-base font-medium hover:underline"
                      key={page.name}
                      href={page.href}
                    >
                      {page.name}
                    </a>
                  ))}
                </Row>
                <Row className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center hover:cursor-pointer">
                    <span className="absolute -inset-0.5" />
                    <Bars3Icon className="block size-6 group-data-[open]:hidden stroke-[1px]" />
                    <XMarkIcon className="size-6 hidden group-data-[open]:block stroke-[1px]" />
                  </DisclosureButton>
                </Row>
              </Row>
            </div>
          </div>

          <DisclosurePanel
            transition
            className="origin-left transition duration-500 ease-out data-closed:translate-x-full -z-10 theme-sand outline outline-black"
          >
            <Col className="items-center justify-center space-y-12 h-dvh overflow-hidden">
              {pages.map((page) => (
                <DisclosureButton as="a" href={page.href} key={page.name}>
                  <p className="text-2xl hover:underline relative bottom-20">
                    {page.name}
                  </p>
                </DisclosureButton>
              ))}
            </Col>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
