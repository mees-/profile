import { Rubik } from "next/font/google"
import "./globals.css"
import { PropsWithChildren } from "react"

const font = Rubik({ subsets: ["latin"] })
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="flex min-h-screen w-screen flex-col items-center">{children}</div>
      </body>
    </html>
  )
}
