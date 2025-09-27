"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Col, Row } from "@/components/blocks";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import clsx from "clsx";
import { TC_APPLICATION } from "@/utils/constants";

const pages = [
  { name: "About", href: "/#about" },
  { name: "Speakers", href: "/#speakers" },
  { name: "FAQ", href: "/#faq" },
  { name: "Sponsorship", href: "/sponsorship" },
];

export function NavBar() {
  const pathname = usePathname();
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
              "z-10 group outline-2 outline-b outline-offset-2",
              scrolled || open
                ? "outline-indigo bg-white text-indigo hover:outline-rose hover:bg-indigo hover:text-white"
                : "outline-rose bg-indigo text-white hover:outline-indigo hover:bg-white hover:text-indigo",
            )}
            id="navbar"
          >
            <div className="nav-section-padding">
              <Row className="h-18 justify-between items-center">
                <Row className="flex shrink-0 items-center relative group">
                  <Logo
                    iconFillClass={clsx(
                      scrolled || open
                        ? "fill-indigo group-hover:fill-white"
                        : "fill-white group-hover:fill-indigo",
                    )}
                    textClass={clsx(
                      scrolled || open
                        ? "text-indigo group-hover:text-white"
                        : "text-white group-hover:text-indigo",
                    )}
                  />
                </Row>
                <Row className="hidden md:flex space-x-4 md:space-x-6 justify-end items-center">
                  {pages.map((page) => (
                    <a
                      className="text-lg font-medium hover:underline"
                      key={page.name}
                      href={page.href}
                    >
                      {page.name}
                    </a>
                  ))}
                  {/* <a
                    href={TC_APPLICATION}
                    target="_blank"
                    className="outline-2 outline-white ring-2 ring-indigo outline-offset-2 bg-white px-6 group-hover:bg-white group-hover:outline-white group-hover:text-indigo py-2 text-indigo hover:bg-rose hover:text-white hover:outline-rose hover:ring-0 flex items-center w-fit font-tc-display rounded font-bold text-sm md:text-base"
                  >
                    Apply
                    <ArrowUpRightIcon className="size-6 stroke-3 relative left-1" />
                  </a> */}
                </Row>
                <Row className="-mr-2 flex items-center md:hidden">
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
            className="origin-left transition duration-500 ease-out data-closed:translate-x-full -z-10 theme-indigo"
          >
            <Col className="items-center justify-center space-y-12 h-dvh overflow-hidden">
              {pages.map((page) => (
                <DisclosureButton as="a" href={page.href} key={page.name}>
                  <p className="text-2xl hover:underline relative bottom-20">
                    {page.name}
                  </p>
                </DisclosureButton>
              ))}
              <div className="flex flex-col items-center gap-4 relative bottom-10">
                <a
                  href={TC_APPLICATION}
                  target="_blank"
                  className="outline-2 outline-white ring-2 ring-indigo outline-offset-2 bg-white px-8 group-hover:bg-white group-hover:outline-white group-hover:text-indigo py-4 text-indigo hover:bg-rose hover:text-white hover:outline-rose hover:ring-0 font-tc-display rounded font-bold text-lg"
                >
                  Apply to join
                </a>
                <div className="px-4 py-0.5 rounded-full bg-rose">
                  <p className="text-white">Deadline September 5th</p>
                </div>
              </div>
            </Col>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
