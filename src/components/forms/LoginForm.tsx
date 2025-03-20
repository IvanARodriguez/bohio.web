"use client";

import React, { FormEvent, useState } from "react";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { useDictionary } from "@/context/globalContext";
import GoogleLogo from "../Logo/GoogleLogo";
import { useAuth } from "@/context/authProvider";

function LoginForm() {
  const t = useDictionary();

  const [creds, setCreds] = useState<{
    email: string;
    password: string;
    errors: Record<string, string>;
  }>({
    email: "",
    password: "",
    errors: {},
  });

  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login({ email: creds.email, password: creds.password });
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <Text size="xl">{t.login}</Text>

      <p className="text-gray-700 mb-6">{t.signInWithOpenAccount}</p>

      <Button color="outline" className="h-11">
        <GoogleLogo />
        <span className="text-sm font-medium">{t.signInWithGoogle}</span>
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">{t.continueWithEmail}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <input
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
            type="email"
            placeholder={t.email}
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:primary focus:primary"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <input
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            type="password"
            autoComplete="current-password"
            placeholder={t.password}
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <Button type="submit">{t.login}</Button>
      </form>
    </div>
  );
}

export default LoginForm;
