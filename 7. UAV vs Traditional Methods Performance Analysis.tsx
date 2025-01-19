import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PerformanceMetrics = () => {
  const data = [
    { fieldSize: "5ha", traditional: 95, uav: 92, time_traditional: 180, time_uav: 45 },
    { fieldSize: "10ha", traditional: 94, uav: 93, time_traditional: 360, time_uav: 60 },
    { fieldSize: "20ha", traditional: 93, uav: 94, time_traditional: 720, time_uav: 90 },
    { fieldSize: "50ha", traditional: 91, uav: 94, time_traditional: 1800, time_uav: 150 },
    { fieldSize: "100ha", traditional: 88, uav: 93, time_traditional: 3600, time_uav: 240 }
  ];

  return (
    <div className="w-full max-w-4xl p-4">
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fieldSize" label={{ value: 'Field Size', position: 'bottom' }} />
        <YAxis yAxisId="left" label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Time (minutes)', angle: 90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="traditional" stroke="#8884d8" name="Traditional Accuracy" />
        <Line yAxisId="left" type="monotone" dataKey="uav" stroke="#82ca9d" name="UAV Accuracy" />
        <Line yAxisId="right" type="monotone" dataKey="time_traditional" stroke="#ff7300" name="Traditional Time" />
        <Line yAxisId="right" type="monotone" dataKey="time_uav" stroke="#0088fe" name="UAV Time" />
      </LineChart>
    </div>
  );
};

export default PerformanceMetrics;
