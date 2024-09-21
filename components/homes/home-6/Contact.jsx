"use client";
import { contactItems } from "@/data/contact";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(""); // State for success or error message
  const [errors, setErrors] = useState({}); // State for form errors

  // Function to validate a specific field
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "user_name":
        if (!value.trim()) {
          error = "يرجى إدخال اسمك.";
        } else if (value.trim().length < 3) {
          error = "اسم المستخدم يجب أن يتكون من 3 أحرف على الأقل.";
        }
        break;
      case "user_email":
        if (!value.trim() || !/\S+@\S+\.\S+/.test(value.trim())) {
          error = "يرجى إدخال بريد إلكتروني صحيح.";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "يرجى إدخال رسالة.";
        }
        break;
      default:
        break;
    }
    return error;
  };

  // Function to handle input change and validate in real-time
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Function to validate the form
  const validateForm = () => {
    const formData = new FormData(form.current);
    const errors = {};
    let isValid = true;

    // Validate name
    const name = formData.get("user_name");
    const nameError = validateField("user_name", name);
    if (nameError) {
      errors.user_name = nameError;
      isValid = false;
    }

    // Validate email
    const email = formData.get("user_email");
    const emailError = validateField("user_email", email);
    if (emailError) {
      errors.user_email = emailError;
      isValid = false;
    }

    // Validate message
    const message = formData.get("message");
    const messageError = validateField("message", message);
    if (messageError) {
      errors.message = messageError;
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_62ykqh3", "template_ax789fl", form.current, {
        publicKey: "J7WDHcyjYEjmoM_k8",
      })
      .then(
        () => {
          setMessage("رسالتك أُرسِلت بنجاح!"); // Set success message
          form.current.reset(); // Clear form fields
          setErrors({}); // Clear any existing errors
        },
        (error) => {
          setMessage(`فشل في إرسال الرسالة: ${error.text}`); // Set error message
        }
      );
  };

  return (
    <div className="container position-relative main-sec-padding contact-sec">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">تواصل معنا</h2>
          <h3 className="section-title mb-50 mb-sm-40">
            دعنا نعرف كيف نساعدك.
          </h3>
          {/* Contact Information */}
          <div className="row">
            {contactItems.map((item, index) => {
              const isSecondToLast = index === contactItems.length - 2;
              const isLast = index === contactItems.length - 1;

              return (
                <React.Fragment key={index}>
                  <div
                    className={`contact-item col-6 col-lg-12 ${
                      index !== 3 ? "mb-3" : ""
                    } ${isSecondToLast ? "order-2 order-lg-1" : ""} ${isLast ? "order-1 order-lg-2" : ""}`}
                  >
                    <div className="ci-icon">
                      <div>{item.iconClass}</div>
                    </div>
                    <h3 className="main-text fw-bold ci-title">
                      {item.main_text}
                    </h3>
                    <h4 className="ci-title visually-hidden">{item.title}</h4>
                    <div className="ci-text">{item.text}</div>
                    <div>
                      <a
                        href={item.link?.url || "#"} // Fallback to prevent error
                        target={item.link?.target}
                        rel={item.link?.rel}
                        className="link-hover-anim"
                        data-link-animate="y"
                      >
                        {item.link && (
                          <>
                            <span className="link-strong link-strong-unhovered">
                              {item.link.text}{" "}
                              <i className="mi-arrow-left size-18" aria-hidden="true"></i>
                            </span>
                            <span className="link-strong link-strong-hovered" aria-hidden="true">
                              {item.link.text}{" "}
                              <i className="mi-arrow-right size-18" aria-hidden="true"></i>
                            </span>
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        {/* End Left Column */}

        {/* Right Column */}
        <div className="col-lg-8">
          <div className="position-relative">
            {/* Decorative Image */}
            <div className="decoration-11 d-none d-xl-block">
              <div className="wow fadeInUp">
                <Image
                  src="/assets/images/contact/contact-img.png"
                  width={150}
                  height={150}
                  alt="Your Company Logo"
                />
              </div>
            </div>
            {/* End Decorative Image */}
            <div className="box-shadow round p-4 p-sm-5">
              <h4 className="h3 mb-30">تواصل معنا</h4>
              {/* Contact Form */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="form contact-form"
                id="contact_form"
              >
                <div className="row">
                  <div className="col-md-6">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name">الأسم</label>
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        className={`input-lg round form-control ${errors.user_name ? "is-invalid" : ""}`}
                        placeholder="أدخل اسمك"
                        aria-required="true"
                        onChange={handleInputChange}
                      />
                      {errors.user_name && (
                        <div className="invalid-feedback">{errors.user_name}</div>
                      )}
                    </div>
                    {/* End Name */}
                  </div>
                  <div className="col-md-6">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        className={`input-lg round form-control ${errors.user_email ? "is-invalid" : ""}`}
                        placeholder="أدخل بريدك الإلكتروني"
                        aria-required="true"
                        onChange={handleInputChange}
                      />
                      {errors.user_email && (
                        <div className="invalid-feedback">{errors.user_email}</div>
                      )}
                    </div>
                    {/* End Email */}
                  </div>
                </div>
                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">الرسالة</label>
                  <textarea
                    name="message"
                    id="message"
                    className={`input-lg round form-control ${errors.message ? "is-invalid" : ""}`}
                    style={{ height: 130 }}
                    placeholder="أدخل رسالتك"
                    onChange={handleInputChange}
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>
                <div className="row flex-row-reverse">
                  <div className="col-md-6 col-xl-5">
                    {/* Send Button */}
                    <div className="pt-3 text-start">
                      <button
                        className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                        id="submit_btn"
                        aria-controls="result"
                      >
                        <span>أرسل الرسالة</span>
                      </button>
                    </div>
                    {/* End Send Button */}
                  </div>
                  <div className="col-md-6 col-xl-7 d-flex align-items-center">
                    {/* Inform Tip */}
                    <div className="form-message">
                      <p>{message}</p>
                    </div>
                    {/* End Inform Tip */}
                  </div>
                </div>
              </form>
              {/* End Contact Form */}
            </div>
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </div>
  );
}
