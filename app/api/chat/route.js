import { NextResponse } from 'next/server'

const prompts = {
  voiture: "Tu es un vendeur de voiture réaliste et un peu résistant. Tu vends une Peugeot 208 à 14 500€. Négocie fermement mais tu peux céder légèrement si l'utilisateur argumente bien.",
  loyer: "Tu es un propriétaire qui loue un appartement à 900€/mois. Tu es réticent à baisser le prix mais tu peux faire un petit geste si le locataire est convaincant.",
  salaire: "Tu es un DRH qui propose un salaire de 35 000€/an. Tu as un budget limité mais tu peux négocier si le candidat valorise bien son profil.",
  entretien: "Tu es un recruteur exigeant pour un poste de commercial. Tu poses des questions difficiles et tu évalues les réponses du candidat.",
}

export async function POST(req) {
  const { message, scenario } = await req.json()

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: prompts[scenario] || prompts.voiture },
        { role: 'user', content: message },
      ],
    }),
  })

  const data = await res.json()
  const reply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu répondre."
  return NextResponse.json({ reply })
}