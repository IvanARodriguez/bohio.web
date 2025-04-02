import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="container px-4 mx-auto xl:px-20">{children}</div>;
}

export default Container;
