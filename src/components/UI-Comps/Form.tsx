import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PuffLoader } from "react-spinners";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    fnErr: "",
    lnErr: "",
    emailErr: "",
    messageErr: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [status, setStatus] = useState("");

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  };

  const onChange = (value: string | null) => {
    if (value !== null) {
      setRecaptchaValue(value);
    } else {
      setRecaptchaValue("");
    }
  };

  // Validation functions now return error messages instead of directly updating the state
  const validateFirstName = () => {
    if (!firstName) return "First name is required";
    return "";
  };

  const validateLastName = () => {
    if (!lastName) return "Last name is required";
    return "";
  };

  const validateEmail = () => {
    if (!email) return "Email is required";
    return "";
  };

  const validateMessage = () => {
    if (!message) return "Message is required";
    return "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Collect validation errors
    const fnErr = validateFirstName();
    const lnErr = validateLastName();
    const emailErr = validateEmail();
    const messageErr = validateMessage();

    // Update formErrors state once after all validations
    setFormErrors({
      fnErr,
      lnErr,
      emailErr,
      messageErr,
    });

    // Check if any validation failed
    if (fnErr || lnErr || emailErr || messageErr) {
      alert("Error validating the form!");
      return; // Stop form submission
    }

    if (!recaptchaValue) {
      alert("Enter the capatcha");
      return;
    }

    try {
      setIsSubmiting(true);

      const response = await fetch(
        "https://send.pageclip.co/xpM6WMoHlMAaSQJqE7zhctRKt6YnyZPt/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        setStatus("error sending the data");
      }

      setIsSubmiting(false);
      setShowMessage(true);

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      // Reset the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error); // Log the error
      setIsSubmiting(false); // Reset the submission state
    }
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      action="https://send.pageclip.co/xpM6WMoHlMAaSQJqE7zhctRKt6YnyZPt"
      className="pageclip-form flex flex-col  my-8 relative"
    >
      {isSubmiting ? (
        <div className="flex justify-center items-center my-8">
          <PuffLoader size={200} color="white" />
        </div>
      ) : (
        <>
          <div className="flex justify-between space-x-8 mb-6">
            <input
              onBlur={() =>
                setFormErrors((prev) => ({
                  ...prev,
                  fnErr: validateFirstName(),
                }))
              }
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              name="firstName"
              className={`input rounded-lg bg-secondary w-1/2 text-highlight px-4 py-2 placeholder:text-brighterHighlight/50 outline-none transition-all ${
                formErrors.fnErr
                  ? "ring-2 ring-red-500"
                  : "focus:ring-1 ring-amber-800"
              }`}
              placeholder="Your first name"
            />
            <input
              onBlur={() =>
                setFormErrors((prev) => ({
                  ...prev,
                  lnErr: validateLastName(),
                }))
              }
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              name="lastName"
              className={`input rounded-lg bg-secondary w-1/2 text-highlight px-4 py-2 placeholder:text-brighterHighlight/50 outline-none transition-all ${
                formErrors.lnErr
                  ? "ring-2 ring-red-500"
                  : "focus:ring-1 ring-amber-800"
              }`}
              placeholder="Your last name"
            />
          </div>

          <input
            onBlur={() =>
              setFormErrors((prev) => ({ ...prev, emailErr: validateEmail() }))
            }
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            className={`input rounded-lg bg-secondary flex-1 text-highlight px-4 py-2 placeholder:text-brighterHighlight/50 outline-none mt-2 mb-6 transition-all ${
              formErrors.emailErr
                ? "ring-2 ring-red-500"
                : "focus:ring-1 ring-amber-800"
            }`}
            placeholder="Your email address"
          />

          <textarea
            onBlur={() =>
              setFormErrors((prev) => ({
                ...prev,
                messageErr: validateMessage(),
              }))
            }
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            rows={5}
            className={`input rounded-lg bg-secondary flex-1 text-highlight px-4 py-2 placeholder:text-brighterHighlight/50 outline-none mt-4 transition-all ${
              formErrors.messageErr
                ? "ring-2 ring-red-500"
                : "focus:ring-1 ring-amber-800"
            }`}
            placeholder="Message..."
          />

          <ReCAPTCHA
            onChange={onChange}
            sitekey="6LcNwakqAAAAANH0VTsNizawGLOCjBGkUIjgKiRZ"
            className="my-8"
          />

          <button
            type="submit"
            className="pageclip-form__submit w-fit  duration-200 space-x-2 ease-out cursor-pointer bg-right hover:bg-left z-50 bg-text text-primary hover:bg-text/80 rounded-lg text-brighterHighlight px-8 transition-all py-2"
          >
            <p>Send!</p>
          </button>
        </>
      )}
      {status && (
        <p className="text-brighterHighlight text-xl text-center">{status}</p>
      )}

      {showMessage && (
        <p className="text-brighterHighlight text-xl text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default Form;
