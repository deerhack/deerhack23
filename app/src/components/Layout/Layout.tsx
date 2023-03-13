import React, { createRef, useEffect, useRef, useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import clsx from "clsx";

type Props = {
  children: string | JSX.Element;
  pageData: PageData;
};

const Layout = ({ children, pageData }: Props) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    });
  }, []);

  return (
    <>
      <header
        className={clsx(
          isAtTop ? "bg-transparent" : "bg-navbar",
          "text-white fixed w-full transition z-10"
        )}
      >
        <Navbar />
      </header>
      <main>{children}</main>

      <Footer
        socialLinks={pageData.socialLinks}
        contactEmail={pageData.contactEmail}
      />
    </>
  );
};

export default Layout;
