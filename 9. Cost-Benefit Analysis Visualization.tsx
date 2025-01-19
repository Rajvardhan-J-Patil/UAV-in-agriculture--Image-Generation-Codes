import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CostBenefitAnalysisFinal = () => {
  const data = [
    { year: 1, traditional_cost: 100000, uav_cost: 150000, traditional_benefit: 120000, uav_benefit: 180000 },
    { year: 2, traditional_cost: 205000, uav_cost: 200000, traditional_benefit: 240000, uav_benefit: 400000 },
    { year: 3, traditional_cost: 315000, uav_cost: 250000, traditional_benefit: 360000, uav_benefit: 650000 },
    { year: 4, traditional_cost: 430000, uav_cost: 300000, traditional_benefit: 480000, uav_benefit: 920000 },
    { year: 5, traditional_cost: 550000, uav_cost: 350000, traditional_benefit: 600000, uav_benefit: 1200000 }
  ];

  return (
    <div className="w-full max-w-6xl p-8 bg-white">
      <div className="text-center mb-4 text-xl font-bold">Cost-Benefit Analysis (2024-2028)</div>
      <LineChart 
        width={800} 
        height={500} 
        data={data} 
        margin={{ top: 30, right: 100, left: 80, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
        <XAxis 
          dataKey="year" 
          label={{ value: 'Year of Operation', position: 'bottom', offset: 30 }}
          tick={{ fill: '#495057', fontSize: 12 }}
        />
        <YAxis 
          label={{ 
            value: 'Amount (USD)', 
            angle: -90, 
            position: 'insideLeft', 
            offset: -60,
            fontSize: 14
          }}
          tick={{ fill: '#495057', fontSize: 12 }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#ffffff', 
            borderColor: '#dee2e6',
            padding: '10px'
          }}
        />
        <Legend 
          verticalAlign="top" 
          height={50}
          wrapperStyle={{
            paddingTop: '20px',
            fontSize: '12px'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="traditional_cost" 
          name="Traditional Method Cost" 
          stroke="#fa5252" 
          strokeWidth={2}
          dot={{ fill: '#fa5252', r: 4 }}
        />
        <Line 
          type="monotone" 
          dataKey="uav_cost" 
          name="UAV System Cost" 
          stroke="#228be6" 
          strokeWidth={2}
          dot={{ fill: '#228be6', r: 4 }}
        />
        <Line 
          type="monotone" 
          dataKey="traditional_benefit" 
          name="Traditional Method Revenue" 
          stroke="#40c057" 
          strokeWidth={2}
          dot={{ fill: '#40c057', r: 4 }}
        />
        <Line 
          type="monotone" 
          dataKey="uav_benefit" 
          name="UAV System Revenue" 
          stroke="#be4bdb" 
          strokeWidth={2}
          dot={{ fill: '#be4bdb', r: 4 }}
        />
      </LineChart>
    </div>
  );
};

export default CostBenefitAnalysisFinal;
