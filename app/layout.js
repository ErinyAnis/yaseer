"use client";
import { useEffect } from "react";
import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
// import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import HeaderPreview from "@/components/headers/HeaderPreview";
import FooterPreview from "../components/footers/FooterPreview";

// import "tippy.js/dist/tippy.css";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";

export default function RootLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [path]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if needed
      });
    }
  }, []);

  return (
    <html lang="en" className="no-mobile no-touch">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap"
        />
      </head>
      <body className="appear-animate body">
        <main id="main">
          <div className="theme-main" id="top">
            <div className="page">
              {/* Navigation Panel */}
              <header>
                <nav className="main-nav transparent stick-fixed wow-menubar">
                  <HeaderPreview />
                </nav>
              </header>
              {/* End Navigation Panel */}

              {/* Render children here */}
              {children}
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="pt-4 pb-4 footer">
          <FooterPreview />
        </footer>
        {/* End Footer */}
      </body>
    </html>
  );
}
