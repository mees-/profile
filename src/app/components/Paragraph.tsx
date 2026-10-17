import { clsx } from "clsx"
import { PropsWithChildren } from "react"

export default function Paragraph({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <p className={clsx(className, "font-extralight text-stone-900")}>{children}</p>
}
