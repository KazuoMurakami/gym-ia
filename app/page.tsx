export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Welcome to NextAuth.js</h1>
      <p className="text-center">
        This is a Next.js starter with authentication using NextAuth.js
      </p>
      <p className="text-center">
        Get started by editing <code>pages/index.tsx</code>
      </p>
      <p className="text-center">
        or <a href="https://next-auth.js.org">view the documentation</a>
      </p>
    </div>
  )
}
