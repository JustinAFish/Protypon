import React from "react";
import { Badge } from "./ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";

import Query from "../assets/QueryGraphic.svg";
import Ai from "../assets/AiGraphic.svg";
import Design from "../assets/DesignGraphic.svg";


const features = [
  {
    title: "Active Querying",
    description:
      "Actively query the created assesments and perform edits on the go.",
    image: Query
  },
  {
    title: "Intuitive user interface",
    description:
      "Effortlessly generate assessments, customize questions, and analyze scoring rubrics.",
    image: Design,
  },
  {
    title: "AI-Powered insights",
    description:
      "Generate comprehensive summaries and statistics on the created assesments.",
    image: Ai,
  },
];

const featureList = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export default function Features() {
  return (
    <section id="features" className="container py-16 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        This self-intuitive tool does not require any training.
      </p>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
            <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
