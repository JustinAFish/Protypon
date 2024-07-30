import React from 'react';
import { Statistics } from './Statistics';
import EducationGraphic from '../assets/EducationGraphic.svg';

export default function About()  {
  return (
    <section id="about" className="container py-16 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={EducationGraphic}
            alt="Pilot"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{' '}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Protypon has extensive experience in Academia, the Public Sector, and Consulting.
                We are dedicated to leveraging our diverse expertise to create innovative solutions for the education sector.
                We have a passion for helping educators focus on the act of educating rather than tedious administrative tasks.
                Our goal is to streamline and automate administrative processes, allowing educators to dedicate more time and energy to what they do best – educating.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};