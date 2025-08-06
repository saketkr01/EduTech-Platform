import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="sm:mx-auto">
      <h1 className="text-center text-4xl font-semibold text-[#236FB1]">Get in Touch</h1>
      <p className="text-center text-richblue-800 mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
