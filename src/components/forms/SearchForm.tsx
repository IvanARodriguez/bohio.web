"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { SearchIcon } from "lucide-react";

const SearchForm: React.FC = () => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  return (
    <form
      onMouseOver={() => setIsMouseOver(!isMouseOver)}
      autoComplete="off"
      className="w-full p-2 mt-6 rounded-full  bg-gray-200 flex gap-4 max-w-3xl"
    >
      <input
        type="text"
        className="h-10 px-6 flex-1 focus:outline-none placeholder:text-gray-700"
        placeholder="what would you love to find?"
      />
      <Button fullWith={false} variant="circle">
        <SearchIcon size={30} strokeWidth={4} />
      </Button>
    </form>
  );
};

export default SearchForm;
