import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";

export default function FooterSocials() {
  return (
    <>
      <li>
        <a href="#" rel="noopener nofollow" target="_blank">
          <FaInstagram className="ms-1" /> انستجرام
        </a>
      </li>
      <li>
        <a href="#" rel="noopener nofollow" target="_blank">
        <FaXTwitter className="ms-1" /> تويتر
        </a>
      </li>
      <li>
        <a href="#" rel="noopener nofollow" target="_blank">
        <RiWhatsappLine className="ms-1" /> واتس اب
        </a>
      </li>
    </>
  );
}
