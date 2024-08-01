import { useState, useRef } from "react";

import { Button } from "./ui/Button";
import Modal from "./Modal";
import DemoRequest from "./DemoRequest";

export default function Hero() {
  //const modal = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenDataInput() {
    setModalIsOpen(true);
  }

  function handleCloseDataInput() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleCloseDataInput}>
        <DemoRequest onCancel={handleCloseDataInput}
          onConfirm={handleCloseDataInput} />
      </Modal>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold  max-w-1">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Automated Assessment Assistant
              </span>
            </h1>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            A tool which supports academics by increasing quality and reducing
            overhead for creating assessments.
          </p>
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button
                onClick={handleOpenDataInput}
                variant="outline"
                className="w-full"
              >
                Request a Demo
              </Button>
            </div>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button onClick={handleOpenDataInput} className="w-full">
                Join Waiting List
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
