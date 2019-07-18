import Globalnav from "Components/globalnav"
import GlobalStyles from "Components/globalstyles"
import Globalfooter from "Components/globalfooter"
import Head from "next/head"

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Beranda - Kab. Muna</title>
      </Head>
      <Globalnav />
      <GlobalStyles/>
      <div>
        {children}
      </div>
      <Globalfooter/>
    </>
  )
}

export default Layout