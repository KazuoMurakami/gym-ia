'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons'
import { signin } from '@/app/_actions/signin'
import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AlertCircle } from 'lucide-react'

export default function UserAuthForm() {
  const router = useRouter()
  const [state, action, pending] = useActionState(signin, null)

  useEffect(() => {
    if (state?.success) {
      router.push('/dashboard')
    }
  }, [state?.success, router])

  return (
    <div className={cn('grid gap-6')}>
      <form action={action}>
        <div className="grid gap-2">
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
              <div>
                <div className="flex items-center space-x-2 text-red-500 py-2">
                  <AlertCircle className="h-5 w-5" />
                  <p>{state.errors.email}</p>
                </div>
              </div>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Senha
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Senha"
              type="password"
              autoCapitalize="none"
              autoComplete={'current-password'}
              disabled={pending}
            />
            {state?.errors && 'password' in state.errors && (
              <div className="flex items-center space-x-2 text-red-500 py-2">
                <AlertCircle className="h-5 w-5" />
                <p className="font-medium">{state.errors.password}</p>
              </div>
            )}
          </div>
          <Button type="submit" disabled={pending}>
            {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            entrar
          </Button>
          {state?.errors && 'form' in state.errors && (
            <div className="flex items-center space-x-2 text-red-500 py-2">
              <AlertCircle className="h-5 w-5" />
              <p className="font-medium">{state.errors.form}</p>
            </div>
          )}
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
