'use server'
import { prisma } from '@/lib/db'
import { FormState, SigninFormSchema } from '@/lib/zod'
import { compare } from 'bcrypt'

export async function signin(state: FormState | null, formData: FormData) {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If form validation fails, return early with errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Find user in database
    const user = await prisma.user.findUnique({
      where: {
        email: validatedFields.data.email,
      },
    })

    // If user doesn't exist, return error
    if (!user) {
      return {
        errors: { form: 'Credenciais inválidas' },
      }
    }

    // Compare passwords
    const passwordMatch = await compare(
      validatedFields.data.password,
      user.password,
    )

    // If passwords don't match, return error
    if (!passwordMatch) {
      return {
        errors: { form: 'Credenciais inválidas' },
      }
    }

    return { success: true }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      errors: { form: 'Erro ao fazer login' },
    }
  }
}
