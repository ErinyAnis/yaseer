import { socialLinks } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer3() {
  return (
    <div className="container">
      <div className="row flex-row-reverse">
        {/* Copyright */}
        <div className="col-lg-3 text-center text-lg-start mb-md-50">
          <div> جميع الحقوق محفوظة. يسير © 2024</div>
          <div className="small">
            يــســــير, مـــــــــاليتــــك معـــنـا تســـــيــر
          </div>
        </div>
        {/* End Copyright */}
        {/* Social Links */}
        <div className="col-lg-6 fw-social-inline text-center mb-md-40">
          {socialLinks.map((elm, i) => (
            <div key={i} className="fw-social-inline-item">
              <a
                href={elm.href}
                target="_blank"
                rel="nofollow noopener"
                className="link-hover-anim align-middle"
                data-link-animate="y"
              >
                <span className="link-strong link-strong-unhovered">
                  {elm.text}
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  {elm.text}
                </span>
              </a>
            </div>
          ))}
        </div>
        <div className="col-lg-3">
          <Link href={`/`}>
            <Image src="/assets/images/logo/logo.png" width={200} height={200} alt="Yaseer" />
          </Link>
        </div>
        {/* End Social Links */}
        {/* Back to Top Link */}
        <div className="local-scroll float-end mt-n20 mt-sm-10">
          <a href="#top" className="link-to-top">
            <i className="mi-arrow-up size-24" />
            <span className="visually-hidden">Scroll to top</span>
          </a>
        </div>
        {/* End Back to Top Link */}
      </div>
    </div>
  );
}
