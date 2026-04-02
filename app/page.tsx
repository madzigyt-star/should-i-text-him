'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const responses = [
    { text: "YES TEXT HIM 😈", sound: "/yes.wav" },
    { text: "TEXT HIM BUT BE TOXIC 💅", sound: "/yes.wav" },
    { text: "FUCK IT, WHY NOT?", sound: "/yes.wav" },
    { text: "YOLO, SIS", sound: "/yes.wav" },

    { text: "NO. STAND UP 😤", sound: "/no.wav" },
    { text: "HE DOESN’T DESERVE YOU 🚫", sound: "/no.wav" },
    { text: "BLOCK HIM AND GLOW UP ✨", sound: "/no.wav" },
    { text: "YOU'RE BETTER THAN THIS", sound: "/no.wav" },
  ]

  const [answer, setAnswer] = useState("Should you text him?")

  const handleClick = () => {
    const random = responses[Math.floor(Math.random() * responses.length)]
    setAnswer(random.text)

    const audio = new Audio(random.sound)
    audio.currentTime = 0
    audio.play().catch(() => {
      console.log("Audio failed to play")
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-br from-pink-200 to-pink-400 px-6 text-center">
      
      <motion.h1
        key={answer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold text-pink-900"
      >
        {answer}
      </motion.h1>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="rounded-2xl bg-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg"
      >
        Decide My Fate
      </motion.button>

    </main>
  )
}