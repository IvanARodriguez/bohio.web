"use client";

import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import CreateHomeSpaceForm from "@/components/forms/CreateHomeSpaceForm";
import { useAuth } from "@/context/authProvider";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

function NewHomespacePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  useLayoutEffect(() => {
    if (!isLoading && (!user || !user?.isAuthenticated)) {
      router.push("/login");
    }
  }, [user, isLoading]);

  return (
    <Container>
      <Header />
      {isLoading ? <SkeletonLoader /> : <CreateHomeSpaceForm />}
    </Container>
  );
}

export default NewHomespacePage;

const SkeletonLoader = () => {
  return (
    <div className="my-11 flex max-w-xl mx-auto flex-col w-full gap-4 animate-pulse">
      <div className="mb-8 grid gap-2">
        <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto" />
        <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto" />
      </div>
      <form className="w-full grid gap-4">
        <div className="h-11 bg-gray-300 rounded" />
        <div className="h-24 bg-gray-300 rounded" />
        <div className="h-11 bg-gray-300 rounded" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div className="h-11 bg-gray-300 rounded" />
          <div className="h-11 bg-gray-300 rounded" />
          <div className="h-11 bg-gray-300 rounded col-span-full w-full sm:col-span-1" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-11 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
        <div className="w-24 mt-4 ms-auto h-11 bg-gray-300 rounded" />
      </form>
    </div>
  );
};
