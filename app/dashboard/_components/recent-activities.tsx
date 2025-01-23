import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const activities = [
  {
    date: '22/05/2023',
    activity: 'Treino de Pernas',
    duration: '45 minutos',
    calories: '320 kcal',
  },
  {
    date: '21/05/2023',
    activity: 'Treino de Peito e Tríceps',
    duration: '60 minutos',
    calories: '450 kcal',
  },
  {
    date: '19/05/2023',
    activity: 'Treino de Costas e Bíceps',
    duration: '55 minutos',
    calories: '400 kcal',
  },
  {
    date: '18/05/2023',
    activity: 'Treino de Ombros',
    duration: '40 minutos',
    calories: '280 kcal',
  },
]

export function RecentActivities() {
  return (
    <Table>
      <TableCaption>Suas atividades recentes na academia</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Atividade</TableHead>
          <TableHead>Duração</TableHead>
          <TableHead className="text-right">Calorias Queimadas</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.date}>
            <TableCell className="font-medium">{activity.date}</TableCell>
            <TableCell>{activity.activity}</TableCell>
            <TableCell>{activity.duration}</TableCell>
            <TableCell className="text-right">{activity.calories}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
