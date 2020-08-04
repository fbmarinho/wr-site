import React from "react";
import Link from "next/link";
export default ({ className, to, children }) => {
  return (
    <Link href={"." + to} passHref>
      <a className={className}>
        <span className="text-yellow mr-1">+</span>{" "}
        <span className="text-white">{children}</span>
      </a>
    </Link>
  );
};
