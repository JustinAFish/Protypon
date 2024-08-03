import { useRef, useState } from "react";
import axios from "axios";

import { Button } from "./ui/Button";

export default function InfoRequest({
  onConfirm,
  onCancel,
  customerRequestType,
}) {
  const firstname = useRef();
  const surname = useRef();
  const email = useRef();
  const aware = useRef();

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const enteredFirstName = firstname.current.value.trim();
    const enteredSurname = surname.current.value.trim();
    const enteredEmail = email.current.value.trim();
    const enteredAware = aware.current.value.trim();

    const newErrors = {};

    if (!enteredFirstName) {
      newErrors.firstname = "Please enter your first name.";
    }
    if (!enteredSurname) {
      newErrors.surname = "Please enter your surname.";
    }
    if (!enteredEmail) {
      newErrors.email = "Please enter your email.";
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(enteredEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }
    if (!enteredAware) {
      newErrors.aware = "Please let us know how you heard about us.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const requestData = {
      customerRequestType,
      enteredFirstName,
      enteredSurname,
      enteredEmail,
      enteredAware,
    };

    axios
      .post("http://localhost:5050/customers", requestData)
      .then((response) => {
        console.log("Success:", response.data);
        onConfirm(); // Call onConfirm after successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form className="mx-36" onSubmit={handleSubmit}>
      <main className="text-5xl md:text-6xl font-bold  max-w-1 mb-6 mt-6">
        <h1 className="inline">
          <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Demo Request
          </span>
        </h1>
      </main>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstname"
        >
          Name
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.firstname ? "border-red-500" : ""
          }`}
          id="firstname"
          type="text"
          name="firstname"
          ref={firstname}
          required
        />
        {errors.firstname && (
          <p className="text-red-500 text-xs italic">{errors.firstname}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="surname"
        >
          Surname
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.surname ? "border-red-500" : ""
          }`}
          id="surname"
          type="text"
          name="surname"
          ref={surname}
          required
        />
        {errors.surname && (
          <p className="text-red-500 text-xs italic">{errors.surname}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : ""
          }`}
          id="email"
          type="email"
          name="email"
          ref={email}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="aware"
        >
          How did you hear about us?
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.aware ? "border-red-500" : ""
          }`}
          id="aware"
          type="text"
          name="aware"
          ref={aware}
          required
        />
        {errors.aware && (
          <p className="text-red-500 text-xs italic">{errors.aware}</p>
        )}
      </div>
      <div className="flex justify-end space-x-4 mb-6">
        <Button variant="outline" onClick={onCancel}>
          Close
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}