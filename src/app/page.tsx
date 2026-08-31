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
}

export default function Index() {
  const linkClassName = "underline underline-offset-[0.125em] hover:bg-[#ffff00] hover:no-underline"

  return (
    <>
      <StructuredData />
      <main className="w-full max-w-lg">
        <header className="mb-8 leading-5 uppercase" aria-label="Site letterhead">
          <p>Mees van Dijk</p>
          <p>mees@mees.io</p>
        </header>

        <section aria-labelledby="about">
          <Header id="about" level={1}>
            About
          </Header>
          <p>
            I create digital products and experiences that turn ideas into useful, high-quality
            outcomes. I bring together product thinking, technology, and a practical understanding
            of business goals.
          </p>
          <p className="mt-6">
            With over 10 years of experience building for the web, I work across product strategy,
            design, and technology. I care about crafting clear, thoughtful products that feel great
            to use and make people happy.
          </p>
        </section>

        <section className="mt-6" aria-labelledby="now">
          <Header id="now" level={2}>
            Now
          </Header>
          <p>
            Product Engineer at{" "}
            <Link className={linkClassName} href="https://spheer.ai/en">
              Spheer
            </Link>
            , helping craft accessible user experiences for satellite-powered monitoring.
          </p>
        </section>

        <section className="mt-6" aria-labelledby="projects">
          <Header id="projects" level={2}>
            Projects
          </Header>
          <ul className="list-none p-0">
            <li>
              <span aria-hidden="true">- </span>
              <Link className={linkClassName} href="https://tock.run">
                [Tock]
              </Link>{" "}
              is an HTTP-native cron scheduler for observable jobs.
            </li>
            <li>
              <span aria-hidden="true">- </span>
              <Link className={linkClassName} href="https://changelog.work">
                [changelog]
              </Link>{" "}
              turns activity across your team into a newsfeed.
            </li>
          </ul>
        </section>

        <section className="mt-6" aria-labelledby="elsewhere">
          <Header id="elsewhere" level={2}>
            Elsewhere
          </Header>
          <ul className="list-none p-0">
            <li>
              <span aria-hidden="true">- </span>
              <Link className={linkClassName} href="https://github.com/mees-">
                [GitHub]
              </Link>
            </li>
            <li>
              <span aria-hidden="true">- </span>
              <Link
                className={linkClassName}
                href="https://www.linkedin.com/in/mees-van-dijk-789a50179/"
              >
                [LinkedIn]
              </Link>
            </li>
            <li>
              <span aria-hidden="true">- </span>
              <Link className={linkClassName} href="mailto:mees@mees.io">
                [Email]
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
