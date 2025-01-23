'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Seg',
    total: 45,
  },
  {
    name: 'Ter',
    total: 60,
  },
  {
    name: 'Qua',
    total: 30,
  },
  {
    name: 'Qui',
    total: 50,
  },
  {
    name: 'Sex',
    total: 40,
  },
  {
    name: 'Sáb',
    total: 75,
  },
  {
    name: 'Dom',
    total: 0,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}min`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
