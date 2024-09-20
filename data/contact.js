import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";

export const contactItems = [
  {
    iconClass: <GrLocation />,
    title: "Address",
    main_text: "حى النهضة",
    text: "طريق عثمان بن عفان",
    link: {
      url: "https://goo.gl/maps/LGWWx3A212Hv3v997",
      text: "عرض الخريطة",
      rel: "nofollow noopener",
      target: "_blank",
    },
  },
  {
    iconClass: <MdOutlineEmail />,
    title: "Email",
    text: "info@yseer.sa",
    link: {
      url: "mailto:info@yseer.sa@gmail.com",
      text: "مرحبا",
    },
  },
  {
    iconClass: <MdOutlinePhoneAndroid />,
    title: "Phone",
    text: "٠٥٣٧١٧٧٧٠٦",
    link: {
      url: "tel:+61383767284",
      text: "اتصل الأن",
    },
  },
  {
    iconClass: <MdOutlineWorkOutline />,
    title: "Phone",
    text: "٠٥٣٧١٧٧٧٠٦",
    link: {
      url: "tel:+61383767284",
      text: "اتصل الأن",
    },
  },
];
