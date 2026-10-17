import { clsx } from "clsx"
import { PropsWithChildren } from "react"

export default function Paragraph({
  as: Tag = "p",
  children,
  className,
}: PropsWithChildren<{ as?: "p" | "ul"; className?: string }>) {
  return <Tag className={clsx(className, "font-extralight text-stone-900")}>{children}</Tag>
}
