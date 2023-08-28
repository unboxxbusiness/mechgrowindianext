import Header from './Header'
import Footer from './Footer'
import Ann from './About/Ann'
 
export default function Layout({ children }) {
  return (
    <>
    <Ann />
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}