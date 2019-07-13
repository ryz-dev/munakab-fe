import Globalnav from "Components/globalnav"
import GlobalStyles from "Components/globalstyles"
import Globalfooter from "Components/globalfooter"

const Layout = ({children}) => {
  return (
    <>
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