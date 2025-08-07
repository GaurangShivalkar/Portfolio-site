import { useEffect } from 'react'

export default function ParticlesContainer() {
  useEffect(() => {
    window.particlesJS.load('particles-js', '/particles.json', () => {
      console.log('particles.js config loaded')
    })
  }, [])

  return <div id="particles-js" className="absolute inset-0 -z-10 bg-black" />
}
