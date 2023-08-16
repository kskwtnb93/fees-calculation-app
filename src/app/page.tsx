import FeesCalculation from '@/components/fees-calculation'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-sm:px-4 max-sm:py-16">
      <h1 className="mb-8 text-center text-5xl font-bold leading-normal max-sm:mb-4 max-sm:text-2xl">
        料金計算アプリ
      </h1>
      <p className="mb-16 text-center text-base font-thin max-sm:text-xs">
        以下の項目に金額と数量を入れてください。
        <br />
        項目名は未入力でも問題ありません。メモとしてお使いください。
      </p>

      <FeesCalculation />
    </main>
  )
}
