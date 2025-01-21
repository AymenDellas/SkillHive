import React from "react";
import Form from "../UI-Comps/Form";

const Contact = () => {
  return (
    <>
      <div className="pt-32">
        <div className="flex flex-col items-center my-12 space-y-4">
          <h1 className="text-5xl text-text font-bold">
            Get in <span className="text-text/70">Touch</span>
          </h1>
          <p className="text-text text-lg">
            Have questions or need assistance? Fill out the form below, and
            we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="pb-36">
          <div className="mx-80  max-xl:mx-8 bg-primary/50 p-8 rounded-lg shadow-2xl">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
