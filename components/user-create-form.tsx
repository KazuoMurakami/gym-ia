'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from './icons'
import { signup } from '@/app/_actions/signup'
import { useActionState } from 'react'

import { FormState } from '@/lib/zod'

export default function UserCreateForm() {
  const [state, actionForm, pending] = useActionState<FormState, FormData>(
    signup,
    { errors: {} },
  )
  return (
    <div className={cn('grid gap-6')}>
      <form action={actionForm}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Nome
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Seu nome"
              type="text"
              autoCapitalize="words"
              autoComplete="name"
              autoCorrect="off"
              disabled={pending}
            />
            {state?.errors && 'name' in state.errors && (
              <p className="font-medium text-red-500">{state.errors.name}</p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="nome@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={pending}
            />
            {state?.errors && 'email' in state.errors && (
              <p className="font-medium text-red-500">{state.errors.email}</p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>
            <Input
              id="password"
              placeholder="Senha"
              name="password"
              type="password"
              autoCapitalize="none"
              autoComplete={'new-password'}
              disabled={pending}
            />
            {state?.errors &&
              'password' in state.errors &&
              Array.isArray(state.errors.password) && (
                <div>
                  <p>Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error} className="font-medium text-red-500">
                        - {error}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
          <Button disabled={false} type="submit">
            {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Cadastrar
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      </div>
    </div>
  )
}
