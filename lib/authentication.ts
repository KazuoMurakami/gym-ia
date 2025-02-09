import bcrypt from 'bcrypt'
import { prisma } from './db'
import { z } from 'zod'

interface User {
  email: string
  password: string
  name: string
}

async function createUser(user: User) {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10)

    const userSchema = z.object({
      email: z
        .string()
        .email('Invalid email format')
        .refine(
          async (email) => {
            const existingUser = await prisma.user.findUnique({
              where: { email },
            })
            return !existingUser
          },
          { message: 'Email already exists' },
        ),
    })

    try {
      await userSchema.parseAsync(user)
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(error.errors.map((err) => err.message).join(', '))
      }
    }

    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        name: user.name,
      },
    })
    return newUser
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}

export { createUser }
