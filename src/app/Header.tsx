import { ReactNode } from "react"

type HeaderProps = {
  children: ReactNode
  id: string
  level: 1 | 2
}

export default function Header({ children, id, level }: HeaderProps) {
  const Heading = level === 1 ? "h1" : "h2"

  return (
    <Heading id={id} className="mb-6 font-bold">
      <span className="font-extralight text-xs">{"#".repeat(level)}</span> {children}
    </Heading>
  )
}
