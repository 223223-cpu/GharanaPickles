"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  size: number
  left: number
  top: number
  duration: number
  delay: number
}

export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated: Particle[] = []
    for (let i = 0; i < 15; i++) {
      generated.push({
        id: i,
        size: Math.random() * 6 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
      })
    }
    setParticles(generated)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: "rgba(234, 179, 8, 0.4)",
            filter: "blur(1px)",
            animation: `floatParticle ${p.duration}s infinite linear`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
