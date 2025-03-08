import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto xl:px-20">{children}</div>;
}

export default Container;
