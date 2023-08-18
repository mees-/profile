import { PropsWithChildren } from "react"
import "./globals.css"
import { Rubik } from "next/font/google"

const font = Rubik({ subsets: ["latin"] })
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="w-screen min-h-screen flex flex-col items-center">{children}</div>
      </body>
    </html>
  )
}
