import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-4">
      <p className="text-[#6366F1] text-sm font-medium tracking-widest uppercase mb-4">Coach IA de négociation</p>
      <h1 className="text-4xl font-bold text-white text-center mb-4">NegocIA — Deviens un<br/>expert en négociation</h1>
      <p className="text-[#94A3B8] text-lg text-center max-w-xl mb-8">Entraîne-toi à négocier ton salaire, ton loyer, ta voiture — avec une IA qui résiste vraiment.</p>
      <div className="flex gap-4 mb-16">
        <Link href="/login" className="bg-[#6366F1] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#4F46E5]">Commencer gratuitement</Link>
        <button className="border border-white/20 text-[#94A3B8] px-8 py-3 rounded-lg font-medium">Voir une démo</button>
      </div>
      <div className="w-full max-w-xl border-t border-white/10 pt-8">
        <p className="text-[#475569] text-xs text-center uppercase tracking-widest mb-6">Ils ont amélioré leurs négociations</p>
        <div className="flex flex-col gap-4">
          <div className="bg-[#1E293B] rounded-xl p-5 flex gap-4">
            <div className="w-9 h-9 rounded-full bg-[#312E81] flex items-center justify-center text-[#A5B4FC] text-sm font-medium shrink-0">TM</div>
            <div>
              <p className="text-white text-sm">J'ai négocié 200€ de moins sur mon loyer dès le premier essai.</p>
              <p className="text-[#64748B] text-xs mt-1">Thomas M. — Paris</p>
            </div>
          </div>
          <div className="bg-[#1E293B] rounded-xl p-5 flex gap-4">
            <div className="w-9 h-9 rounded-full bg-[#134E4A] flex items-center justify-center text-[#5EEAD4] text-sm font-medium shrink-0">SL</div>
            <div>
              <p className="text-white text-sm">J'ai obtenu une augmentation de 15% grâce aux simulations.</p>
              <p className="text-[#64748B] text-xs mt-1">Sarah L. — Lyon</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}