'use client'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  const scenarios = [
    { emoji: '🚗', titre: 'Acheter une voiture', id: 'voiture' },
    { emoji: '🏠', titre: 'Négocier un loyer', id: 'loyer' },
    { emoji: '💼', titre: 'Négocier son salaire', id: 'salaire' },
    { emoji: '🎯', titre: 'Convaincre en entretien', id: 'entretien' },
  ]

  return (
    <main className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-white text-center mb-2">Choisis ton scénario</h1>
      <p className="text-[#94A3B8] text-center mb-10">Entraîne-toi avec une IA qui résiste vraiment</p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
        {scenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => router.push(`/simulation?scenario=${s.id}`)}
            className="bg-[#1E293B] border border-[#6366F1] rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-[#2D3F55] transition"
          >
            <span className="text-3xl">{s.emoji}</span>
            <span className="text-white font-medium text-center">{s.titre}</span>
          </button>
        ))}
      </div>
    </main>
  )
}