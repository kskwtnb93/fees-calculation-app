import FeesCalculation from '@/app/_features/FeeCalculation'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-sm:px-4 max-sm:py-16">
      <h1 className="mb-8 text-center text-4xl font-bold leading-normal max-sm:mb-4 max-sm:text-2xl">
        料金計算アプリ
      </h1>

      <FeesCalculation />
    </main>
  )
}
