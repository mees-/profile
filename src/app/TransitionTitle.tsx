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
        "text-4xl font-extrabold sm:text-6xl md:text-7xl lg:text-9xl",
        "transition duration-700",
        !isShown && "scale-0 opacity-0",
        isShown && "scale-100 opacity-100",
      )}
    >
      Mees van Dijk
    </h1>
  )
}
