import dynamic from 'next/dynamic'
import Head from 'next/head'

const ChessBoard = dynamic(() => import('../components/ChessBoard'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-yellow-200 to-cyan-200">
      <Head>
        <title>Chess-Degens</title>
      </Head>
      <main className="container mx-auto py-12 px-6">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold">Chess-Degens</h1>
          <p className="mt-2 text-xl">Play 1v1 or join tournaments — free and token-gated modes</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-6 bg-white/60 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Play Now</h2>
            <ChessBoard />
          </div>

          <div className="p-6 bg-white/60 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Landing / Lobby</h2>
            <p className="mb-4">This is a scaffolded landing and demo board. Next steps: matchmaking lobby, wallet connect, token gating, and escrow contracts.</p>
            <ul className="list-disc pl-5">
              <li>Quick play 1v1 (Socket.io)</li>
              <li>Token-gated wagers & tournaments (ethers + contracts)</li>
              <li>Polish visuals and animations (Framer Motion)</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
