'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'login' | 'signup'
  className?: string
}

export function UserAuthForm({
  className,
  mode = 'login',
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const searchParams = useSearchParams()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const form = event.target as HTMLFormElement
    const email = form.email.value
    const password = form.password.value

    if (mode === 'signup') {
      const name = form.name
      // Aqui você deve implementar a lógica de cadastro
      // Por exemplo, fazer uma chamada para sua API para criar um novo usuário
      console.log('Cadastro', { name, email, password })
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // After successful signup, you might want to automatically sign in the user
      // or redirect them to the login page
      window.location.href = '/login'
    } else {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        setError('Credenciais inválidas. Por favor, tente novamente.')
      } else {
        // Redirecionar para a página principal ou dashboard
        window.location.href = searchParams?.get('callbackUrl') || '/'
      }
    }

    setIsLoading(false)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          {mode === 'signup' && (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="name">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Seu nome"
                type="text"
                autoCapitalize="words"
                autoComplete="name"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
            </div>
          )}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="nome@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>
            <Input
              id="password"
              placeholder="Senha"
              type="password"
              autoCapitalize="none"
              autoComplete={
                mode === 'signup' ? 'new-password' : 'current-password'
              }
              disabled={isLoading}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {mode === 'login' ? 'Entrar' : 'Cadastrar'}
          </Button>
        </div>
      </form>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{' '}
        Github
      </Button>
    </div>
  )
}
