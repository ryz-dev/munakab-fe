import Globalnav from "Components/globalnav"
import GlobalStyles from "Components/globalstyles"
import Globalfooter from "Components/globalfooter"
import Head from "next/head"

const Layout = ({children, data}) => {
  return (
    <>
      <Head>
        <title>Beranda - Kab. Muna</title>
      </Head>
      <Globalnav data={data[0]} />
      <GlobalStyles/>
      <div>
        {children}
      </div>
      <Globalfooter data={data[1]} />
    </>
  )
}

export default Layout