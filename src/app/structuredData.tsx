import Script from "next/script"
import { Person, WithContext } from "schema-dts"

const data: WithContext<Person> = {
  "@context": "https://schema.org",
  "@id": "https://mees.io",
  "@type": "Person",
  name: "Mees van Dijk",
  url: [
    "https://mees.io",
    "https://meesvandijk.com",
    "https://www.meesvandijk.com",
    "https://itisme.es",
    "https://www.itisme.es",
  ],
  image: "https://mees.io/mees.png",
  email: "mees@mees.io",
  givenName: "Mees",
  familyName: "van Dijk",
  birthDate: "1998-10-24",
  gender: "https://schema.org/Male",
  homeLocation: {
    "@id": "https://en.wikipedia.org/wiki/Groningen",
    "@type": "City",
    name: "Groningen",
  },
  sameAs: [
    "https://mees.io",
    "https://meesvandijk.com",
    "https://www.linkedin.com/in/mees-van-dijk-789a50179/",
    "https://github.com/mees-",
  ],
  jobTitle: "Software Engineer",
  workLocation: "Groningen, The Netherlands",
  alumniOf: {
    "@id": "https://www.hanze.nl",
    "@type": "CollegeOrUniversity",
    name: "Hanze University of Applied Sciences",
    sameAs: "https://www.hanze.nl",
  },
  nationality: {
    "@id": "https://en.wikipedia.org/wiki/Netherlands",
    "@type": "Country",
    name: "The Netherlands",
  },
}

export default function StructuredData() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
