"use client"

import clsx from "clsx"
import { useState, useEffect } from "react"

export default function TransitionTitle() {
  const [isShown, setIsShown] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsShown(true)
    }, 100)
  }, [])
  return (
    <h1
      className={clsx(
        "my-auto",
        "text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold",
        "transition duration-700",
        !isShown && "opacity-0 scale-0",
        isShown && "opacity-100 scale-100",
      )}
    >
      Mees van Dijk
    </h1>
  )
}
