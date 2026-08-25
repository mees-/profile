import "./globals.css"
import { PropsWithChildren } from "react"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen min-w-80 bg-[#f7f7f8] p-6 font-sf-mono text-[0.8125rem] leading-[1.55] text-[#070707] selection:bg-[#ffff00] selection:text-black sm:p-10">
        {children}
      </body>
    </html>
  )
}
