import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import DemoRequest from './DemoRequest'

const Modal = forwardRef(function Modal({ actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <form method="dialog" id="modal-actions">
        <DemoRequest />
        <div>{actions}</div> 
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
