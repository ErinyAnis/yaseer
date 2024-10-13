"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the validation schema using Yup
const schema = yup.object().shape({
  user_name: yup.string().required("ادخل الأسم"),
  user_email: yup
    .string()
    .email("البريد الإلكتروني غير صالح")
    .required("ادخل لبريد الإلكتروني"),
  phone: yup.string().required("ادخل رقم الهاتف"),
  qualification: yup.string().required("ادخل المؤهل"),
  score: yup.string().required("ادخل المعدل"),
  requestType: yup.string().required("اختر نوع الطلب"),
  cv: yup
    .string()
    .url("رابط السيرة الذاتية غير صالح")
    .required("ادخل رابط السيرة الذاتية"),
});

export default function JobsForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      user_name: "",
      user_email: "",
      phone: "",
      qualification: "",
      score: "",
      requestType: "",
      cv: "",
    },
  });

  const [isFetching, setIsFetching] = useState(false);

  const onSubmit = async (data) => {
    setIsFetching(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data: responseData } = await response.json();
      console.log(responseData); // Log response data for debugging

      if (response.ok) {
        toast.success(`Email was successfully sent!`);
        // Reset the form fields
        reset();
      } else {
        toast.error(`Error: ${responseData.message || "Something went wrong"}`);
      }
    } catch (error) {
      toast.error(`Something went wrong: ${error.message}`);
    }
    setIsFetching(false);
  };

  return (
    <div className="container position-relative main-sec-padding contact-sec pt-0 jobs-form">
      <div className="align-items-center">
        <div className="mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">الوظائف</h2>
          <h3 className="section-title mb-50 mb-sm-40">قدم طلبك الآن.</h3>
        </div>

        <div className="position-relative">
          <div className="box-shadow round p-4 p-sm-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form contact-form"
              id="jobs_form"
            >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="user_name">الأسم *</label>
                    <Controller
                      name="user_name"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          id="user_name"
                          className={`input-lg round form-control ${
                            errors.user_name ? "is-invalid" : ""
                          }`}
                          placeholder="أدخل اسمك"
                          aria-required="true"
                        />
                      )}
                    />
                    {errors.user_name && (
                      <div className="invalid-feedback">
                        {errors.user_name.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-6 ">
                  <div className="form-group">
                    <label htmlFor="user_email">البريد الإلكتروني *</label>
                    <Controller
                      name="user_email"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="email"
                          id="user_email"
                          className={`input-lg round form-control ${
                            errors.user_email ? "is-invalid" : ""
                          }`}
                          placeholder="أدخل بريدك الإلكتروني"
                          aria-required="true"
                        />
                      )}
                    />
                    {errors.user_email && (
                      <div className="invalid-feedback">
                        {errors.user_email.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">رقم الجوال *</label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="tel"
                          id="phone"
                          placeholder={"أدخل رقم الجوال"}
                          className={`input-lg round form-control text-end ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                        />
                      )}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="qualification">المؤهل *</label>
                    <Controller
                      name="qualification"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          id="qualification"
                          className={`input-lg round form-control ${
                            errors.qualification ? "is-invalid" : ""
                          }`}
                          placeholder="أدخل المؤهل"
                        />
                      )}
                    />
                    {errors.qualification && (
                      <div className="invalid-feedback">
                        {errors.qualification.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="score">المعدل *</label>
                    <Controller
                      name="score"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="number"
                          id="score"
                          className={`input-lg round form-control ${
                            errors.score ? "is-invalid" : ""
                          }`}
                          placeholder={"أدخل معدلك"}
                        />
                      )}
                    />
                    {errors.score && (
                      <div className="invalid-feedback">
                        {errors.score.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="requestType">نوع الطلب *</label>
                    <Controller
                      name="requestType"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          id="requestType"
                          className={`input-lg round form-control ${
                            errors.requestType ? "is-invalid" : ""
                          }`}
                        >
                          <option value="">اختر نوع الطلب</option>
                          <option value="توظيف">توظيف</option>
                          <option value="تدريب">تدريب</option>
                        </select>
                      )}
                    />
                    {errors.requestType && (
                      <div className="invalid-feedback">
                        {errors.requestType.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="cv" className="d-block">
                      <h4 className="mb-2">السيرة الذاتية *</h4>
                      <p className="mb-2">
                        قم برفع السيرة الذاتية على ملف google drive
                        وانسخ الرابط هنا
                      </p>
                    </label>
                    <Controller
                      name="cv"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          id="cv"
                          className={`input-lg round form-control ${
                            errors.requestType ? "is-invalid" : ""
                          }`}
                          placeholder="أدخل رابط السيرة الذاتية"
                        />
                      )}
                    />
                    {errors.cv && (
                      <div className="invalid-feedback">
                        {errors.cv.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row flex-row-reverse">
                <div className="col-md-6 col-xl-5">
                  <div className="pt-3 text-start">
                    <button
                      className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                      id="submit_btn"
                      aria-controls="result"
                      disabled={isFetching}
                    >
                      <span>ارسال</span>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  <div className="form-tip w-100 pt-3 mt-sm-20">
                    <i className="icon-info size-16 ms-1" />
                    جميع الحقول إلزامية. بإرسال النموذج، أنت توافق على{" "}
                    <a href="#">الشروط &amp; والأحكام</a> و{" "}
                    <a href="#">سياسة الخصوصية</a>.
                  </div>
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
                {/* You can implement any success/error message logic here */}
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>
      <div className="container position-relative main-sec-padding contact-sec pt-0">
        <ToastContainer />
      </div>
    </div>
  );
}
