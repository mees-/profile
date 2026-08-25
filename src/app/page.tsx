import { Metadata, Viewport } from "next"
import Link from "next/link"
import Header from "./Header"
import StructuredData from "./structuredData"

export const metadata: Metadata = {
  title: "Mees van Dijk",
  description: "Mees van Dijk's personal website",
  authors: {
    name: "Mees van Dijk",
    url: "https://mees.io",
  },
  keywords: ["Mees", "van", "Dijk", "mees.io", "mees", "dijk", "personal", "website", "portfolio"],
  robots: "index, follow",
  alternates: {
    canonical: "https://mees.io",
    types: {
      "text/html": [
        {
          title: "Mees van Dijk",
          url: "https://meesvandijk.com",
        },
        {
          title: "Mees van Dijk",
          url: "https://itisme.es",
        },
      ],
    },
  },
  openGraph: {
    title: "Mees van Dijk",
    description: "Mees van Dijk's personal website",
    url: "https://mees.io",
    type: "profile",
    images: [
      {
        url: "https://mees.io/mees.png",
        width: 512,
        height: 512,
        alt: "Mees van Dijk",
      },
    ],
    firstName: "Mees",
    lastName: "van Dijk",
    gender: "male",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
}

export default function Index() {
  const linkClassName = "underline underline-offset-[0.125em] hover:bg-[#ffff00] hover:no-underline"

  return (
    <>
      <StructuredData />
      <main className="w-full max-w-2xl">
        <header className="mb-8 leading-5" aria-label="Site letterhead">
          <p>MEES VAN DIJK</p>
          <p>PERSONAL WEBSITE</p>
          <p>GRONINGEN, NL</p>
        </header>

        <section aria-labelledby="about">
          <Header id="about" level={1}>
            ABOUT
          </Header>
          <p>
            Mees van Dijk is a software engineer with an entrepreneurial mindset, specializing in translating ideas into
            scalable, high-quality products. He combines technical expertise with product vision, bridging business
            goals and engineering execution.
          </p>
          <p className="mt-6">
            With over 10 years of experience in web application development, Mees works across full-stack development,
            technical strategy, and product decisions. He enjoys turning complex requirements into maintainable software
            that people like to use.
          </p>
        </section>

        <section className="mt-6" aria-labelledby="now">
          <Header id="now" level={2}>
            NOW
          </Header>
          <p>
            Product Engineer at{" "}
            <Link className={linkClassName} href="https://spheer.ai/en" aria-label="Go to Spheer website">
              Spheer
            </Link>
            , helping craft accessible user experiences for satellite-powered monitoring.
          </p>
        </section>

        <section className="mt-6" aria-labelledby="elsewhere">
          <Header id="elsewhere" level={2}>
            ELSEWHERE
          </Header>
          <ul className="list-none p-0">
            <li>
              -{" "}
              <Link className={linkClassName} href="https://github.com/mees-" aria-label="Go to Mees' GitHub profile">
                [GitHub]
              </Link>
            </li>
            <li>
              -{" "}
              <Link
                className={linkClassName}
                href="https://www.linkedin.com/in/mees-van-dijk-789a50179/"
                aria-label="Go to Mees' LinkedIn profile"
              >
                [LinkedIn]
              </Link>
            </li>
            <li>
              -{" "}
              <Link className={linkClassName} href="mailto:mees@mees.io" aria-label="Send Mees an email">
                [Email]
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
