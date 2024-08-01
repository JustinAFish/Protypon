import { useRef } from "react";

import { Button } from "./ui/Button";

export default function DemoRequest({ onConfirm, onCancel }) {
  const firstname = useRef();
  const surname = useRef();
  const email = useRef();
  const aware = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredFirstName = firstname.current.value;
    const enteredSurname = surname.current.value;
    const enteredEmail = email.current.value;
    const enteredAware = aware.current.value;

    onConfirm();

    console.log(enteredFirstName, enteredSurname, enteredEmail, enteredAware);
  }

  return (
    <form className="mx-36">
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstname"
          type="text"
          name="firstname"
          ref={firstname}
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Surname
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="surname"
          type="surname"
          name="surname"
          ref={surname}
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          ref={email}
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          How did you hear about us?
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="aware"
          type="text"
          name="aware"
          ref={aware}
        />
      </div>
      <div className="flex justify-end space-x-4 mb-6">
      <Button variant="outline" onClick= {onCancel} >Close</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
    </form>
  );
}
