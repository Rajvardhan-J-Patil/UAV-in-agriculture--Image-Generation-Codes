import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ImpactAnalysis = () => {
  const data = [
    {
      category: "Efficiency",
      improvement: 85,
      impact: 90,
      adoption: 75,
      trend: 92
    },
    {
      category: "Accuracy",
      improvement: 92,
      impact: 88,
      adoption: 80,
      trend: 95
    },
    {
      category: "Coverage",
      improvement: 95,
      impact: 85,
      adoption: 70,
      trend: 90
    },
    {
      category: "Cost-Effectiveness",
      improvement: 80,
      impact: 92,
      adoption: 85,
      trend: 88
    },
    {
      category: "Sustainability",
      improvement: 88,
      impact: 95,
      adoption: 78,
      trend: 94
    }
  ];

  return (
    <div className="w-full max-w-4xl p-4">
      <ComposedChart width={600} height={400} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="improvement" name="Performance Improvement %" fill="#8884d8" />
        <Bar dataKey="impact" name="Industry Impact %" fill="#82ca9d" />
        <Line type="monotone" dataKey="trend" name="Future Trend" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default ImpactAnalysis;
