import { Metadata, Viewport } from "next"
import Link from "next/link"
import { AiOutlineDown } from "react-icons/ai"
import StructuredData from "./structuredData"
import TransitionTitle from "./TransitionTitle"

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
  return (
    <>
      <StructuredData />
      <div className="relative flex h-screen flex-col justify-center">
        <TransitionTitle />
        <AiOutlineDown className="absolute right-0 bottom-2 left-0 mx-auto mb-8 text-3xl font-bold" />
      </div>
      <main className="mx-auto space-y-8 p-12 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <p>
          Mees van Dijk is a software engineer with an entrepreneurial mindset, specializing in
          translating ideas into scalable, high-quality products. Combining technical expertise with
          product vision, bridging business goals and engineering execution to deliver software that
          is both user-friendly and maintainable.
        </p>
        <p>
          With over 10 years of experience in web application development, Mees is highly skilled in
          full-stack development, shaping technical strategy, guiding product decisions, and turning
          complex requirements into actionable solutions. Thrives in environments where ownership,
          quality, and long-term impact are valued, continuously exploring new technologies and
          approaches to improve products and teams.
        </p>
        <p>
          Currently working as a Product Engineer at{" "}
          <Link
            href="https://spheer.ai/en"
            className="text-blue-500 hover:text-blue-400 dark:text-gray-500 dark:hover:text-gray-300"
            aria-label="Go to Spheer website"
          >
            Spheer
          </Link>{" "}
          where I help craft accessible user experiences for satellite-powered monitoring.
        </p>
        <p>
          Take a look at my projects on{" "}
          <Link
            href="https://github.com/mees-"
            className="text-blue-500 hover:text-blue-400 dark:text-gray-500 dark:hover:text-gray-300"
            aria-label="Go to Mees' github profile"
          >
            GitHub
          </Link>
          , Connect with me on{" "}
          <Link
            href="https://www.linkedin.com/in/mees-van-dijk-789a50179/"
            className="text-blue-500 hover:text-blue-400 dark:text-gray-500 dark:hover:text-gray-300"
            aria-label="Go to Mees' linkedin profile"
          >
            LinkedIn
          </Link>
          , or send me an{" "}
          <Link
            href="mailto:mees@mees.io"
            className="text-blue-500 hover:text-blue-400 dark:text-gray-500 dark:hover:text-gray-300"
            aria-label="Send Mees an email"
          >
            email
          </Link>
          .
        </p>
      </main>
    </>
  )
}
