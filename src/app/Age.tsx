"use client"

import { DateTime } from "luxon"
export default function AgeText() {
  const birthDay = DateTime.fromISO("1998-10-24")
  const diff = birthDay.diffNow("years").negate()
  return <>{Math.floor(diff.years)}</>
}
