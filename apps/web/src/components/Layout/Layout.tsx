import React, { createRef, useEffect, useRef, useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import clsx from "clsx";

type Props = {
  children: string | JSX.Element;
  pageData: PageData;
  transparentNav?: boolean; // for other pages
};

const Layout = ({ children, pageData, transparentNav = true }: Props) => {
  const [isAtTop, setIsAtTop] = useState(transparentNav);

  useEffect(() => {
    // do not add scroll event if transparent nav is false
    if (!transparentNav) return;

    document.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    });
  }, [transparentNav]);

  return (
    <>
      <header
        className={clsx(
          isAtTop ? "bg-transparent" : "bg-navbar",
          "text-white w-full transition z-10",
          transparentNav ? "fixed" : "relative"
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
