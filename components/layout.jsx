import Globalnav from "Components/globalnav"
import GlobalStyles from "Components/globalstyles"
import Globalfooter from "Components/globalfooter"
import { NextSeo } from "next-seo"

const Layout = ({children, data}) => {
  return (
    <>
      <NextSeo
        title="Beranda"
        titleTemplate='%s - Kab. Muna'
        description="Web Portal Kab. muna"
        openGraph={{
          type: 'website',
          url: 'https://www.example.com',
          title: 'Kab. Muna',
          description: 'Web Portal Kab. Muna',
          images: [
            {
              url: '/static/muna.png',
              alt: 'Kab. Muna',
            },
          ],
        }}
      />
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

Layout.defaultProps = {
  data: []
}