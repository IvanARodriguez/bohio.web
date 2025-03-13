"use client";

import { useDictionary, useGlobalContext } from "@/context/GlobalContext";
import { motion } from "framer-motion";
import { X, Menu as MenuIcon, PanelRightClose, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import Container from "../common/Container";
import Link from "@/components/Link";
import Text from "../Text";

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

  return (
    <ul className="flex mt-2 sm:items-center  flex-col sm:flex-row p-6  lg:p-0 lg:gap-4">
      {items.map((item, i) => (
        <li key={item.text + i}>
          <Link href={item.href} variant={item.linkStyle}>
            {dictionary[item.text]}
          </Link>
        </li>
      ))}
    </ul>
  );
};
