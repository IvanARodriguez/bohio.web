"use client";

import { useDictionary, useGlobalContext } from "@/context/globalContext";
import { motion } from "framer-motion";
import { Menu as MenuIcon, ArrowRight } from "lucide-react";
import React from "react";
import Logo from "@/components/Logo";
import Link from "@/components/Link";
import Text from "../Text";
import { useAuth } from "@/context/authProvider";
import Button from "../Button";

export default function Menu() {
  const { app } = useGlobalContext();
  const { isOpen, setNavOpen } = app.header.nav;

  return (
    <div>
      <nav className="flex items-center justify-between py-2">
        <Link href="/">
          <div className="text-red-900 flex gap-1 items-center justify-center">
            <div className="h-12 w-12">
              <Logo type="svg" />
            </div>
            <Text size="lg">Bohío</Text>
          </div>
        </Link>
        <button
          className="block sm:hidden"
          aria-label="Toggle menu"
          onClick={() => setNavOpen(!isOpen)}
        >
          {!isOpen && <MenuIcon color="black" size={24} />}
        </button>
        <div className="hidden sm:block">
          <NavItems />
        </div>
      </nav>
      <motion.menu
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: isOpen ? 0 : "100%", opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className={`fixed  right-0 top-0 h-full w-3/4 max-w-sm  bg-opacity-80 backdrop-blur-md shadow-lg lg:relative lg:top-auto lg:flex lg:w-auto lg:shadow-none lg:bg-transparent  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          aria-label="Toggle menu"
          onClick={() => setNavOpen(!isOpen)}
          className="p-2 right-0 me-4 absolute z-10 cursor-pointer"
        >
          {isOpen && (
            <div className="flex items-center justify-center gap-1">
              <ArrowRight id="close" color="black" size={24} />
              close
            </div>
          )}
        </button>
        <NavItems />
      </motion.menu>
    </div>
  );
}

const NavItems = () => {
  const { user, logout, isLoading } = useAuth();
  const dictionary = useDictionary();
  const items: { href: string; text: string; linkStyle: "button" | "plain" }[] = [
    {
      href: "/login",
      text: "login",
      linkStyle: "plain",
    },
    {
      href: "/register",
      text: "register",
      linkStyle: "button",
    },
  ];

  if (isLoading) {
    return (
      <div role="status" className="max-w-sm flex gap-4 animate-pulse">
        <div className="h-11 bg-gray-200 rounded dark:bg-gray-300 w-22"></div>
        <div className="h-11 bg-gray-200 rounded dark:bg-gray-300 w-22"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <ul className="flex gap-2 sm:items-center flex-col sm:flex-row lg:p-0 lg:gap-4">
      {user?.isAuthenticated ? (
        <>
          <li>
            {user.username ? `Welcome ${user.username.split("@")[0] || user.username}` : "Hi There"}
          </li>
          <li>
            <Button color="secondary" onClick={logout}>
              logout
            </Button>
          </li>
        </>
      ) : (
        <>
          {items.map((item, i) => (
            <li key={item.text + i}>
              <Link href={item.href} variant={item.linkStyle}>
                {dictionary[item.text]}
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};
