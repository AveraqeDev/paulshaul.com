import React from "react";
import {
  HomeIcon,
  InformationCircleIcon,
  MailIcon,
  MenuIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { useRouter } from "next/router";
import { classNames } from "../utils/string";

type NavItem = {
  name: string;
  href: string;
  icon?: any;
};

const Header: React.FC = () => {
  const router = useRouter();

  const currentRoute = router.asPath;

  const navigation: NavItem[] = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Services", href: "/services", icon: ViewGridIcon },
    { name: "About", href: "/about", icon: InformationCircleIcon },
    { name: "Contact", href: "/contact", icon: MailIcon },
  ];

  return (
    <Disclosure as="nav" className="text-white bg-zinc-700">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18">
              <Link href="/">
                <div className="flex gap-2 items-center cursor-pointer hover:opacity-75">
                  <Image src={Logo} alt="" width={80} height={70} />
                  <span className="font-bold text-lg">{"PAUL'S HAULING"}</span>
                </div>
              </Link>
              <div className="hidden md:block">
                <div className="ml-6 flex items-center space-x-4">
                  {navigation.map((item) => {
                    const current = currentRoute === item.href;
                    return (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            current
                              ? "bg-zinc-200 text-zinc-700"
                              : "text-white hover:bg-zinc-200 hover:text-zinc-700",
                            "group px-3 py-2 rounded-md flex gap-1 items-center text-sm font-medium"
                          )}
                          aria-current={current ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              current
                                ? "text-zinc-700"
                                : "text-white group-hover:text-zinc-700",
                              "h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md bg-white text-zinc-700 hover:bg-zinc-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => {
                const current = currentRoute === item.href;
                return (
                  <Disclosure.Button key={item.name} as={Link} href={item.href}>
                    <a
                      className={classNames(
                        current
                          ? "bg-zinc-200 text-zinc-700"
                          : "text-white hover:bg-zinc-200 hover:text-zinc-700",
                        "group px-3 py-2 rounded-md flex gap-1 items-center text-base font-medium"
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          current
                            ? "text-zinc-700"
                            : "text-white group-hover:text-zinc-700",
                          "h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </a>
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
