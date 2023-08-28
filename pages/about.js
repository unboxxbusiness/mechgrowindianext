
import CtaH from "@/components/About/CtaH"
import Stats from "@/components/About/Stats"
import Team from "@/components/About/Team"

import Head from "next/head"

export default function Home() {
  return (
  <>
  <Head>
<title>About | Mechgrow India</title>
        <meta name="description" content="We are the driving force behind innovation, dedicated to shaping a brighter future through cutting-edge solutions, including ESD solutions for a static-free world." />
        <link rel="icon" href="/favicon.ico" />

   </Head>
<CtaH />
<Stats />
<Team />


</>


  )
}
