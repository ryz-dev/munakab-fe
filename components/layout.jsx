import Globalnav from "Components/globalnav"
import GlobalStyles from "Components/globalstyles"
import Globalfooter from "Components/globalfooter"
import Head from "next/head"

const Layout = ({children, dataFooter}) => {
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
      <Globalfooter data={dataFooter}/>
    </>
  )
}

export default Layout