import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import DemoRequest from "./DemoRequest";

const Modal = forwardRef(function Modal({ actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      id="modal"
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      <div method="dialog" id="modal-actions">
        <DemoRequest />
        <form className="justify-end space-x-2 md:space-x-0 md:space-y-2">
          {actions}
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
