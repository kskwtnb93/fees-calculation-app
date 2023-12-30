import FeesCalculation from '@/app/_features/FeeCalculation'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pb-48 max-sm:p-4 max-sm:pb-32">
      <div className="mb-8 mt-0 max-sm:mb-6 max-sm:mt-6">
        <h1 className="text-center text-4xl font-bold leading-normal max-sm:text-2xl">
          料金計算
        </h1>
      </div>

      <FeesCalculation />
    </main>
  )
}
