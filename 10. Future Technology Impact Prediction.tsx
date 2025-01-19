import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const TechnologyImpactPrediction = () => {
  const data = [
    {
      subject: 'Measurement Accuracy',
      current: 94,
      projected2025: 97,
      projected2030: 99,
      fullmark: 100
    },
    {
      subject: 'Cost Efficiency',
      current: 80,
      projected2025: 88,
      projected2030: 95,
      fullmark: 100
    },
    {
      subject: 'Coverage Area',
      current: 85,
      projected2025: 92,
      projected2030: 98,
      fullmark: 100
    },
    {
      subject: 'Processing Speed',
      current: 75,
      projected2025: 90,
      projected2030: 96,
      fullmark: 100
    },
    {
      subject: 'Battery Life',
      current: 70,
      projected2025: 85,
      projected2030: 93,
      fullmark: 100
    }
  ];

  return (
    <div className="w-full max-w-4xl p-4">
      <RadarChart width={600} height={400} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Current" dataKey="current" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="2025 Projection" dataKey="projected2025" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="2030 Projection" dataKey="projected2030" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default TechnologyImpactPrediction;
