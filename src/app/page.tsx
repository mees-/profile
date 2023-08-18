import Link from "next/link"

import TransitionTitle from "./TransitionTitle"
import { AiOutlineDown, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"
import { DiNpm } from "react-icons/di"
import { BsBookHalf } from "react-icons/bs"
import AgeText from "./Age"

export default function Index() {
  return (
    <>
      <div className="h-[93vh] flex flex-col justify-center">
        <TransitionTitle />
      </div>
      <AiOutlineDown className="text-3xl font-bold mb-8" />
      <main className="p-12 mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 space-y-8">
        <p className="font-semibold">
          Hi, I&apos;m Mees. I&apos;m <AgeText /> years old and I&apos;m a software engineer from the Netherlands.
          I&apos;m currently working at{" "}
          <Link href="https://pyntersite.nl" className="underline">
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
          <ul className="mt-3 flex flex-wrap gap-6 text-3xl">
            <li>
              <Link href="https://github.com/mees-">
                <AiOutlineGithub />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/mees-van-dijk-789a50179/">
                <AiOutlineLinkedin />
              </Link>
            </li>
            <li>
              <Link href="https://www.npmjs.com/~mees-">
                <DiNpm />
              </Link>
            </li>
            <li>
              <Link href="https://journal.mees.io">
                <BsBookHalf />
              </Link>
            </li>
            <li>
              <Link href="mailto:mees@mees.io">
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
            <li>Microservices</li>
            <li>Serverless</li>
            <li>Continuous Integration</li>
            <li>Continuous Deployment</li>
          </ul>
        </div>
      </main>
    </>
  )
}
