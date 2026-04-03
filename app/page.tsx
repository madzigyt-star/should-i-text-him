'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const responses = [
    { text: "YES. TEXT HIM 😈", sound: "/yes.wav", type: "yes" },
    { text: "Yes, but keep it cute and under 10 words 💅", sound: "/yes.wav", type: "yes" },
    { text: "Fine. One text. Do NOT start performing 😌", sound: "/yes.wav", type: "yes" },
    { text: "Yes, but act like you have hobbies 📚", sound: "/yes.wav", type: "yes" },
    { text: "Do it. Stir the pot a little 🍿", sound: "/yes.wav", type: "yes" },
    { text: "Text him, but don't send a paragraph dissertation 🎓", sound: "/yes.wav", type: "yes" },
    { text: "YES. Cause chaos, but like... elegantly ✨", sound: "/yes.wav", type: "yes" },
    { text: "He might be stupid, but sure, text him 🤍", sound: "/yes.wav", type: "yes" },
    { text: "Yes. Give him one chance and one chance only ⏳", sound: "/yes.wav", type: "yes" },
    { text: "Text him back, but match his energy. Not your delusions 🪞", sound: "/yes.wav", type: "yes" },
    { text: "Yes, but if he replies dry, we're shutting this down immediately 🚨", sound: "/yes.wav", type: "yes" },
    { text: "DAM says yes. Unfortunately 🙄", sound: "/yes.wav", type: "yes" },

    { text: "Absolutely not. Respect yourself 💋", sound: "/no.wav", type: "no" },
    { text: "NO. STAND UP 😤", sound: "/no.wav", type: "no" },
    { text: "Girl, stand up 👜", sound: "/no.wav", type: "no" },
    { text: "He knows you exist. Let him act like it 📵", sound: "/no.wav", type: "no" },
    { text: "No ❤️", sound: "/no.wav", type: "no" },
    { text: "Texting him would be an act of self-sabotage 🫶", sound: "/no.wav", type: "no" },
    { text: "Put the phone down, diva 🎤", sound: "/no.wav", type: "no" },
    { text: "No. Go moisturize and move on 🧴", sound: "/no.wav", type: "no" },
    { text: "DAM said no. And DAM is never wrong 😌", sound: "/no.wav", type: "no" },
    { text: "Be so serious right now 🫠", sound: "/no.wav", type: "no" },
    { text: "You're not in love. You're bored 📱", sound: "/no.wav", type: "no" },
    { text: "No. He lost texting privileges ❌", sound: "/no.wav", type: "no" },
    { text: "No, unless your goal is humiliation 🎪", sound: "/no.wav", type: "no" },
    { text: "Respectfully? Have some shame 😭", sound: "/no.wav", type: "no" },
    { text: "No. Let him wonder why you're glowing ✨", sound: "/no.wav", type: "no" },
    { text: "Babes... this is a relapse 🫣", sound: "/no.wav", type: "no" },
    { text: "The ancestors are begging you to stop 🕯️", sound: "/no.wav", type: "no" },
    { text: "No. Go fold laundry and heal 🧺", sound: "/no.wav", type: "no" },
    { text: "You do not miss him. You miss attention 📡", sound: "/no.wav", type: "no" },
    { text: "DAM looked at the evidence. It's a no 📂", sound: "/no.wav", type: "no" },

    { text: "Maybe... but only if Mercury isn't in the group chat 🪐", sound: "/yes.wav", type: "yes" },
    { text: "The answer is yes. The follow-up paragraphs are no 📏", sound: "/yes.wav", type: "yes" },
    { text: "Text him if you must, but keep your dignity in the room 🪞", sound: "/yes.wav", type: "yes" },
    { text: "Ask DAM? DAM said proceed with caution ⚠️", sound: "/yes.wav", type: "yes" },
    { text: "This is a soft yes, not a wedding proposal 💍", sound: "/yes.wav", type: "yes" },
    { text: "Yes, but if you start double texting, that's between you and God ⛪", sound: "/yes.wav", type: "yes" },
  ]

  const [answer, setAnswer] = useState("Should I Text Him?")
  const [resultType, setResultType] = useState("default")

  const handleClick = () => {
    const random = responses[Math.floor(Math.random() * responses.length)]
    setAnswer(random.text)
    setResultType(random.type)

    const audio = new Audio(random.sound)
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  const bgStyles =
    resultType === 'yes'
      ? 'bg-green-300'
      : resultType === 'no'
      ? 'bg-red-300'
      : 'bg-pink-200'

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center transition-colors duration-500 ${bgStyles}`}
    >
      <div className="mb-2 max-w-xl">
        <h1 className="text-5xl font-black tracking-tight text-black sm:text-6xl">
          Should I Text Him?
        </h1>
        <p className="mt-3 text-lg font-medium text-black/80 sm:text-xl">
          Ask DAM before you embarrass yourself 💋
        </p>
      </div>

      <motion.div
        key={answer}
        initial={{ opacity: 0, scale: 0.85, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-xl rounded-3xl bg-white/70 px-6 py-8 shadow-xl backdrop-blur"
      >
        <p className="text-3xl font-bold text-black sm:text-4xl">
          {answer}
        </p>
      </motion.div>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-white shadow-lg"
      >
        Ask DAM
      </motion.button>
    </main>
  )
}