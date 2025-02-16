'use client'
import { Button } from '@/components/ui/button'
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { PlusCircle, Trash2 } from 'lucide-react'
import { useState } from 'react'

interface exerciseProps {
  name: string
  series: string
}

export default function NewTreino() {
  const { toast } = useToast()
  const [exercises, setExercises] = useState<exerciseProps[]>([
    { name: '', series: '' },
  ])
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Treino
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crie seu treino personalizado!</DialogTitle>
          <DialogDescription>
            Crie seu treino personalizado com exercícios, séries e cargas.
            Mantenha um registro completo do seu progresso na academia.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="workout-name" className="text-right">
              Nome do Treino:
            </Label>
            <Input
              id="workout-name"
              className="col-span-3"
              placeholder="ex: Treino A - Costas"
            />
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{exercises.length}/8 exercícios</span>
          </div>
          {/* Exercise fields container */}
          <ScrollArea className="h-72 p-4 rounded-md ">
            {exercises.map((_, index) => (
              <div key={index} className="flex items-center gap-2 py-2">
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (exercises.length > 1) {
                        const newExercises = exercises.filter(
                          (_, i) => i !== index,
                        )
                        setExercises(newExercises)
                      }
                    }}
                    className="h-8 w-8"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Label htmlFor={`exercise-${index}`} className="text-right">
                    Exercício:
                  </Label>
                </div>
                <Input
                  id={`exercise-${index}`}
                  className="col-span-2"
                  placeholder="ex: Supino Reto"
                  value={exercises[index].name}
                  onChange={(e) => {
                    const newExercises = [...exercises]
                    newExercises[index].name = e.target.value
                    setExercises(newExercises)
                  }}
                />
                <Select
                  value={exercises[index].series}
                  onValueChange={(value) => {
                    const newExercises = [...exercises]
                    newExercises[index].series = value
                    setExercises(newExercises)
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu treino" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Selecione seu treino</SelectLabel>
                      <SelectItem value="4x12">4x12</SelectItem>
                      <SelectItem value="3x15">3x15</SelectItem>
                      <SelectItem value="5x10">5x10</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </ScrollArea>

          <Button
            variant="outline"
            className="col-span-4"
            onClick={() => {
              setExercises([...exercises, { name: '', series: '' }])
              console.log(exercises)
            }}
            disabled={exercises.length > 7}
          >
            + Adicionar outro exercício
          </Button>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={() => {
                toast({
                  title: 'Treino salvo!',
                  description: new Date().toLocaleTimeString(),
                })
              }}
            >
              Salvar exercicio
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
