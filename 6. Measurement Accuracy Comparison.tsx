import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AccuracyComparison = () => {
  const data = [
    {
      name: 'Laboratory Analysis',
      accuracy: 98,
      coverage: 20,
      timeEfficiency: 30,
      costEfficiency: 40
    },
    {
      name: 'Hand-held Devices',
      accuracy: 92,
      coverage: 35,
      timeEfficiency: 45,
      costEfficiency: 60
    },
    {
      name: 'UAV-based System',
      accuracy: 94,
      coverage: 90,
      timeEfficiency: 85,
      costEfficiency: 80
    }
  ];

  return (
    <div className="w-full max-w-4xl p-4">
      <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="accuracy" fill="#8884d8" name="Accuracy %" />
        <Bar dataKey="coverage" fill="#82ca9d" name="Field Coverage %" />
        <Bar dataKey="timeEfficiency" fill="#ffc658" name="Time Efficiency %" />
        <Bar dataKey="costEfficiency" fill="#ff8042" name="Cost Efficiency %" />
      </BarChart>
    </div>
  );
};

export default AccuracyComparison;
