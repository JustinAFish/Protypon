import React from 'react';

export const Statistics = () => {
  const stats = [
    {
      quantity: "10",
      description: "Universities",
    },
    {
      quantity: "20+",
      description: "Lecturers",
    },
    {
      quantity: "15",
      description: "Years AI Experience",
    },
    {
      quantity: "3",
      description: "Products",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};