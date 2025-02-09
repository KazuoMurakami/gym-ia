'use server'
import { createUser } from '@/lib/authentication'
import { FormState, SignupFormSchema } from '@/lib/zod'

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Call the provider or db to create a user
  try {
    const user = await createUser({
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    })

    return {
      user,
    }
  } catch {
    return {
      errors: { form: 'Failed to create user' },
    }
  }
}
