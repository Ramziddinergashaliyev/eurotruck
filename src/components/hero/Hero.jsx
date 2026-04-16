import React, { useState, useEffect, useRef, useCallback } from 'react'
import img1 from "../../assets/herobg/img1.webp"
import img2 from "../../assets/herobg/img2.webp"
import img3 from "../../assets/herobg/img3.webp"
import "./hero.scss"

const images = [img1]

const Hero = () => {
  const [slideStates, setSlideStates] = useState(() =>
    images.map((_, i) => (i === 0 ? 'active' : 'idle'))
  )

  const [dirMap, setDirMap] = useState(() => images.map(() => 1))

  const currentRef = useRef(0)
  const animating = useRef(false)

  const slide = useCallback((nextIndex, dir) => {
    if (animating.current) return
    const prevIndex = currentRef.current
    if (nextIndex === prevIndex) return

    animating.current = true
    currentRef.current = nextIndex

    setDirMap(prev => {
      const d = [...prev]
      d[nextIndex] = dir
      d[prevIndex] = dir
      return d
    })

    setSlideStates(prev => {
      const s = [...prev]
      s[prevIndex] = 'leave'
      s[nextIndex] = 'enter'
      return s
    })

    setTimeout(() => {
      setSlideStates(prev => {
        const s = [...prev]
        s[nextIndex] = 'active'
        s[prevIndex] = 'idle'
        return s
      })
      animating.current = false
    }, 1700)

  }, [])

  const next = useCallback(() => {
    const n = (currentRef.current + 1) % images.length
    slide(n, 1)
  }, [slide])

  const prev = useCallback(() => {
    const n = (currentRef.current - 1 + images.length) % images.length
    slide(n, -1)
  }, [slide])

  const goTo = useCallback((index) => {
    if (index === currentRef.current) return
    const dir = index > currentRef.current ? 1 : -1
    slide(index, dir)
  }, [slide])

  useEffect(() => {
    const timer = setTimeout(next, 5000)
    return () => clearTimeout(timer)
  }, [slideStates, next])

  return (
    <section className="hero">

      <div className="hero__track">
        {images.map((img, i) => {
          const state = slideStates[i]
          const dir = dirMap[i]
          return (
            <div
              key={i}
              className={`hero__slide is-${state}`}
              style={{
                backgroundImage: `url(${img})`,
                '--dir': dir,
              }}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Hero