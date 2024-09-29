"use client";
import { allHomes, menuItems } from "@/data/menu";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
export default function HeaderPreview() {
  const [menuOpen, setMenuOpen] = useState([-1, -1]);

  const toggleParent1 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[0] == i) {
      tempMenuOpen[0] = -1;
    } else {
      tempMenuOpen[0] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const toggleParent2 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[1] == i) {
      tempMenuOpen[1] = -1;
    } else {
      tempMenuOpen[1] = i;
    }
    setMenuOpen(tempMenuOpen);
  };
  const toggleParent3 = (i) => {
    const tempMenuOpen = [...menuOpen];
    if (menuOpen[2] == i) {
      tempMenuOpen[2] = -1;
    } else {
      tempMenuOpen[2] = i;
    }
    setMenuOpen(tempMenuOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToElement();
    }, 1000);
    init_classic_menu_resize();
    // window.addEventListener("scroll", addScrollspy);

    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      // window.removeEventListener("scroll", addScrollspy);
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <Link href={`/`} className="logo">
          <Image
            src="/assets/images/logo/header-logo.svg"
            alt="Yaseer"
            width={105}
            height={34}
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      {/* old */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist local-scroll">
          {/* Item  */}
          <li>
            <Link href="/">
              <span className="mn-has-sub active">الصفحة الرئيسية</span>
            </Link>
          </li>
          {/* End Item */}

          {/* Item */}
          <li>
            <a className="mn-has-sub">المنتجات</a>
          </li>
          {/* End Item */}

          {/* Item */}
          <li>
            <a className="mn-has-sub">الأسعار</a>
          </li>
          {/* End Item */}
          {/* Item */}
          <li>
            <Link href="/about">
              <span className="mn-has-sub">عن الشركة</span>
            </Link>
          </li>
          {/* End Item */}
          {/* Item */}
          <li>
            <a className="mn-has-sub">اتصل بنا</a>
          </li>
          {/* End Item */}
        </ul>
        <ul className="items-end clearlist">
          {/* Languages */}
          <LanguageSelect />
          {/* End Languages */}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
