import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { ChartIcon, MagnifierIcon, MedalIcon, GiftIcon,  WalletIcon} from './ui/Icons';

const serviceList = [
  {
    title: "Greater Productivity",
    description:
      "The automated creation of Assessment with rapidly increase the productivity of the lecturer for the University",
    icon: <ChartIcon />,
  },
  {
    title: "Improved Quality",
    description:
      "Quality and error free drafting at pace avioding issues such as incorrect dates, legacy information, summation errors, spelling errors, etc. ",
    icon: <MedalIcon />,
  },
  {
    title: "Better Experience",
    description:
      "With the additional time the lecturer will be able to spend more time with the students improving the overall experience.",
    icon: <GiftIcon />,
  },
  {
    title: "Novel and Standardised",
    description:
      "Protypon produces consistent, novel assessments with a consistent level of Assessments.",
    icon: <MagnifierIcon />,
  }
];

export default function Value(){
  return (
    <section id="value" className="container py-16 sm:py-32">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Academic{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Value
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Rapid creation of bespoke assessments from the module handbook,
            reducing the overhead on the academic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceList.map(({ icon, title, description }) => (
              <Card key={title} className="relative overflow-hidden">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
  
    </section>
  );
};
// bg-primary/20 