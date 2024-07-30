import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <>
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

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3">Join Waiting List</Button>
          </div>
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </>
  );
}
