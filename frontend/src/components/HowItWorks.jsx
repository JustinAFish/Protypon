import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { UploadIcon, AdditionalIcon, DraftIcon, FinishIcon } from "./ui/Icons";

const features = [
  {
    icon: <UploadIcon />,
    title: "Upload Handbook",
    description: "Upload module handbook to the tool",
  },
  {
    icon: <AdditionalIcon />,
    title: "Additional content",
    description: "The tool will extract the number and types of the assesments based on the uploaded module",
  },
  {
    icon: <DraftIcon />,
    title: "Draft",
    description: "Generate assessment draft with the click of a button",
  },
  {
    icon: <FinishIcon />,
    title: "Finalise assessment",
    description: "Edit the drafts as neccessary and finalise the assessment for use in your module",
  },
];

export default function HowItWorks() {
  return (
    <section id="howItWorks" className="container text-center py-16 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        This self-intuitive tool does not require any training.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <div className="mt-1 bg-primary/20 p-1 rounded-2xl">{icon}</div>

                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
