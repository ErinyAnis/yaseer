import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function FooterPreview() {
  return (
    <div className="container">
      <div className="row pb-50 pb-sm-40">
        <div className="col-md-4 mb-sm-50">
          <Link href={"/"} className="mb-30">
            <Image
              src="/assets/images/logo/logo.png"
              width={190}
              height={190}
              alt="Your Company Logo"
            />
          </Link>
          <div className="mt-4">
            <div className="clearlinks">
              <a href="mailto:ibthemes21@gmail.com">info@yseer.sa</a>
            </div>
            <div className="clearlinks">
              <a href="tel:+0537177706">0537177706</a>
            </div>
            <div className="clearlinks">
              <div>
                القصيم – بريدة <br />
                حي النهضة – طريق عثمان بن عفان
              </div>
              <a href="#" className="d-flex align-items-center gap-1 mt-4">
                <MdOutlineWorkOutline />
                <div>الوظــــائــف</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row mt-n30">
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">الصــفحــات</h3>
              <ul className="fw-menu clearlist">
                {navigationLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">مواقــع التــواصل</h3>
              <ul className="fw-menu clearlist">
                <FooterSocials />
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-4 mt-30">
              <h3 className="fw-title">البيانات القــانونية</h3>
              <ul className="fw-menu clearlist">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.path}>{elm.name}</a>
                  </li>
                ))}
                <li>
                  <Image
                    src="/assets/images/barcode.jpg"
                    className="rounded mt-3"
                    alt="barcode"
                    width={150}
                    height={150}
                  />
                </li>
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
        </div>
      </div>
      {/* Footer Text */}

      <div className="hr-footer">
        <hr />
      </div>
      <div>
        <b>
          {" "}
          شركة يسير لخدمات الضريبة والمحاسبة – جميع الحقوق محفوظة{" "}
          {new Date().getFullYear()}م.
        </b>
      </div>
      {/* Back to Top Link */}
      <div className="local-scroll float-end mt-n20 mt-sm-10">
        <a href="#top" className="link-to-top">
          <i className="mi-arrow-up size-24" />
          <span className="visually-hidden">Scroll to top</span>
        </a>
      </div>
      {/* End Back to Top Link */}

      {/* End Footer Text */}
    </div>
  );
}
