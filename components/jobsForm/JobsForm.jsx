"use client";
import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

export default function JobsForm() {
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
      case "phone":
        if (!value.trim()) {
          error = "يرجى إدخال رقم الجوال.";
        } else if (!/^\d{10}$/.test(value.trim())) {
          error = "رقم الجوال يجب أن يكون 10 أرقام.";
        }
        break;
      case "qualification":
        if (!value.trim()) {
          error = "يرجى إدخال مؤهلك.";
        } else if (value.trim().length < 2) {
          error = "المؤهل يجب أن يحتوي على حرفين على الأقل.";
        }
        break;
      case "score":
        if (!value.trim()) {
          error = "يرجى إدخال معدلك.";
        } else if (isNaN(value) || value < 0 || value > 100) {
          error = "المعدل يجب أن يكون بين 0 و 100.";
        }
        break;
      case "requestType":
        if (!value || value === "default") {
          error = "يرجى اختيار نوع الطلب.";
        }
        break;
      case "cv":
        if (!value) {
          error = "يرجى تحميل السيرة الذاتية.";
        }
        break;
    }
    return error;
  };

  // Function to handle input change and validate in real-time
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const fieldValue = files ? files[0] : value; // Handle file input
    const error = validateField(name, fieldValue); // Pass file or value to validation
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

    // Validate phone
    const phone = formData.get("phone");
    const phoneError = validateField("phone", phone);
    if (phoneError) {
      errors.phone = phoneError;
      isValid = false;
    }

    // Validate Qualification
    const qualification = formData.get("qualification");
    const qualificationError = validateField("qualification", qualification);
    if (qualificationError) {
      errors.qualification = qualificationError;
      isValid = false;
    }

    // Validate Request Type
    const requestType = formData.get("requestType");
    const requestTypeError = validateField("requestType", requestType);
    if (requestTypeError) {
      errors.requestType = requestTypeError;
      isValid = false;
    }

    // Validate Score
    const score = formData.get("score");
    const scoreError = validateField("score", score);
    if (scoreError) {
      errors.score = scoreError;
      isValid = false;
    }

    const cv = formData.get("cv");
    const cvError = validateField("cv", cv);
    if (cvError) {
      errors.cv = cvError;
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
      .sendForm("service_2pdkxdy", "template_3gckmcr", form.current, {
        publicKey: "YC97DvqlHHu8EoXst",
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
    <div className="container position-relative main-sec-padding contact-sec pt-0">
      <div className=" align-items-center">
        {/* Left Column */}
        <div className="mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">الوظائف</h2>
          <h3 className="section-title mb-50 mb-sm-40">
            دعنا نعرف كيف نساعدك.
          </h3>
        </div>
        {/* End Left Column */}

        {/* Right Column */}

        <div className="position-relative">
          <div className="box-shadow round p-4 p-sm-5">
            {/* Contact Form */}
            <form
              encType="multipart/form-data"
              ref={form}
              onSubmit={sendEmail}
              className="form contact-form"
              id="jobs_form"
            >
              <div className="row align-items-center">
                <div className="col-md-6 offset-md-6">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="user_name">الأسم</label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      className={`input-lg round form-control ${
                        errors.user_name ? "is-invalid" : ""
                      }`}
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
                <div className="col-md-6 ">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="user_email">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      className={`input-lg round form-control ${
                        errors.user_email ? "is-invalid" : ""
                      }`}
                      placeholder="أدخل بريدك الإلكتروني"
                      aria-required="true"
                      onChange={handleInputChange} // Add this line
                    />
                    {errors.user_email && (
                      <div className="invalid-feedback">
                        {errors.user_email}
                      </div>
                    )}
                  </div>
                  {/* End Email */}
                </div>
                {/* phone */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">رقم الجوال</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder={0}
                      className={`input-lg round form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      aria-required="true"
                      onChange={handleInputChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                </div>
                {/* end phone */}
                <div className="col-md-6">
                  {/* qualification */}
                  <div className="form-group">
                    <label htmlFor="qualification">المؤهل</label>
                    <input
                      type="text"
                      name="qualification"
                      id="qualification"
                      className={`input-lg round form-control ${
                        errors.qualification ? "is-invalid" : ""
                      }`}
                      placeholder="أدخل المؤهل"
                      aria-required="true"
                      onChange={handleInputChange}
                    />
                    {errors.qualification && (
                      <div className="invalid-feedback">
                        {errors.qualification}
                      </div>
                    )}
                  </div>
                  {/* End qualification */}
                </div>
                {/* score */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="score">المعدل</label>
                    <input
                      type="number"
                      name="score"
                      id="score"
                      className={`input-lg round form-control ${
                        errors.score ? "is-invalid" : ""
                      }`}
                      placeholder={"أدخل معدلك"}
                    />
                    {errors.score && (
                      <div className="invalid-feedback">{errors.score}</div>
                    )}
                  </div>
                </div>
                {/* end score */}

                {/* Request Type */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="requestType">نوع الطلب</label>
                    <select
                      name="requestType"
                      id="requestType"
                      className={`input-lg round form-control ${
                        errors.requestType ? "is-invalid" : ""
                      }`}
                      onChange={handleInputChange}
                    >
                      <option value="">اختر نوع الطلب</option>
                      <option value="employment">توظيف</option>
                      <option value="other">تدريب</option>
                    </select>
                    {errors.requestType && (
                      <div className="invalid-feedback">
                        {errors.requestType}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group mt-lg-3">
                    <label htmlFor="cv" className="d-block">
                      السيرة الذاتية
                    </label>
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      className={` ${errors.cv ? "is-invalid" : ""}`}
                      onChange={handleInputChange}
                    />
                    {errors.cv && (
                      <div className="invalid-feedback">{errors.cv}</div>
                    )}
                  </div>
                </div>
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
                      <span>ارسال</span>
                    </button>
                  </div>
                  {/* End Send Button */}
                </div>
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  {/* Inform Tip */}
                  <div className="form-tip w-100 pt-3 mt-sm-20">
                    <i className="icon-info size-16 ms-1" />
                    جميع الحقول إلزامية. بإرسال النموذج، أنت توافق على{" "}
                    <a href="#">الشروط &amp; والأحكام</a> و{" "}
                    <a href="#">سياسة الخصوصية</a>.
                  </div>
                  {/* End Inform Tip */}
                </div>
              </div>
              {/* Display Success/Error Message */}
              <div
                id="result"
                role="region"
                aria-live="polite"
                aria-atomic="true"
                className="mt-3"
              >
                {message && (
                  <div
                    className={`alert ${
                      message.includes("فشل") ? "alert-danger" : "alert-success"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </div>
            </form>
            {/* End Contact Form */}
          </div>
        </div>

        {/* End Right Column */}
      </div>
    </div>
  );
}
