import Link from "next/link"

import TransitionTitle from "./TransitionTitle"
import { AiOutlineDown, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"
import { DiNpm } from "react-icons/di"
import { BsBookHalf } from "react-icons/bs"
import AgeText from "./Age"
import { Metadata } from "next"
import StructuredData from "./structuredData"

export const metadata: Metadata = {
  title: "Mees van Dijk",
  description: "Mees van Dijk's personal website",
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  },
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

export default function Index() {
  return (
    <>
      <StructuredData />
      <div className="h-screen flex flex-col justify-center relative">
        <TransitionTitle />
        <AiOutlineDown className="text-3xl font-bold mb-8 absolute bottom-2 left-0 right-0 mx-auto" />
      </div>
      <main className="p-12 mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 space-y-8">
        <p className="font-semibold">
          Hi, I&apos;m Mees. I&apos;m <AgeText /> years old and I&apos;m a software engineer from the Netherlands.
          I&apos;m currently working at{" "}
          <Link href="https://pyntersite.nl" className="underline" aria-label="Go to Pynter website">
            Pynter
          </Link>{" "}
          as a full-stack developer. I&apos;m in my last year of my bachelor&apos;s degree in computer science at the
          Hanze Universty of Applied Sciences and I&apos;m planning to finish my degree in october 2023.
        </p>
        <p className="font-semibold">
          I have a lot of experience building web applications and have been doing it for 10 years. I&apos;m passionate
          about building software that is easy to use and maintain. I love keeping up with new technology and I&apos;m
          always learning new things.
        </p>
        <div>
          <h2 className="text-2xl font-semibold">Links</h2>
          <ul className="mt-3 flex flex-wrap gap-12 text-3xl justify-between md:justify-start">
            <li>
              <Link href="https://github.com/mees-" aria-label="Go to Mees' github profile">
                <AiOutlineGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/mees-van-dijk-789a50179/"
                aria-label="Go to Mees' linkedin profile"
              >
                <AiOutlineLinkedin />
              </Link>
            </li>
            <li>
              <Link href="https://www.npmjs.com/~mees-" aria-label="View Mees' NPM packages">
                <DiNpm />
              </Link>
            </li>
            <li>
              <Link href="https://journal.mees.io" aria-label="Go to Mees' journal">
                <BsBookHalf />
              </Link>
            </li>
            <li>
              <Link href="mailto:mees@mees.io" aria-label="Send Mees an email">
                <AiOutlineMail />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="mt-3 flex flex-wrap gap-4">
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
            <li>Rust</li>
            <li>Java</li>
            <li>C#</li>
            <li>.Net</li>
            <li>Git</li>
            <li>Linux</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwindcss</li>
            <li>Unit testing</li>
            <li>Webpack</li>
            <li>Microservices</li>
            <li>Docker</li>
            <li>Redis</li>
            <li>Serverless</li>
            <li>Continuous Integration</li>
            <li>Continuous Deployment</li>
          </ul>
        </div>
      </main>
    </>
  )
}
