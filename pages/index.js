
import Cta from "@/components/Home/Cta"
import Feature from "@/components/Home/Feature"
import Product from "@/components/Home/Product"
import Testimonial from "@/components/Home/Testimonial"
import Head from "next/head"

export default function Home() {
  return (
  <>
  <Head>
<title>Mechgrow India - ESD Solutions Provider</title>
        <meta name="description" content="We are the driving force behind innovation, dedicated to shaping a brighter future through cutting-edge solutions, including ESD solutions for a static-free world." />
        <link rel="icon" href="/favicon.ico" />

   </Head>

<Cta />
<Product />

<Testimonial />
<Feature />
</>


  )
}
