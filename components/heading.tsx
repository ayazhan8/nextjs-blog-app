import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
}
