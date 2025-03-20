"use client";

import Link from "@/components/Link";
import { useDictionary } from "@/context/globalContext";
import React from "react";

function DontHaveAccount() {
  const dict = useDictionary();

  return (
    <div className="text-right mb-16">
      <span className="text-gray-500 text-sm">Don't have an account?</span>{" "}
      <Link href="/register" variant="blue" underline>
        {dict.register}
      </Link>
    </div>
  );
}

export default DontHaveAccount;
