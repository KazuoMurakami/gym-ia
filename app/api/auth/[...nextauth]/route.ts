import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        // Aqui você deve implementar a lógica de verificação das credenciais
        // Por exemplo, verificar no banco de dados se o usuário existe
        // e se a senha está correta
        if (
          credentials?.email === 'user@example.com' &&
          credentials?.password === 'password'
        ) {
          return { id: '1', name: 'Usuário Exemplo', email: 'user@example.com' }
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }
