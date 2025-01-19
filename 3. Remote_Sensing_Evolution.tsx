import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RemoteSensingTimeline = () => {
  const data = [
    { year: 2000, satellites: 20, drones: 0, accuracy: 60 },
    { year: 2005, satellites: 35, drones: 5, accuracy: 65 },
    { year: 2010, satellites: 45, drones: 15, accuracy: 75 },
    { year: 2015, satellites: 55, drones: 40, accuracy: 82 },
    { year: 2020, satellites: 65, drones: 80, accuracy: 88 },
    { year: 2023, satellites: 70, drones: 100, accuracy: 92 }
  ];

  return (
    <div className="w-full max-w-4xl p-4">
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="satellites" stroke="#8884d8" name="Satellite Usage Index" />
        <Line type="monotone" dataKey="drones" stroke="#82ca9d" name="Drone Usage Index" />
        <Line type="monotone" dataKey="accuracy" stroke="#ff7300" name="Measurement Accuracy %" />
      </LineChart>
    </div>
  );
};

export default RemoteSensingTimeline;
