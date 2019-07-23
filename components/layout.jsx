import Globalnav from "Components/globalnav"
import GlobalStyles from "Components/globalstyles"

const Layout = ({children}) => {
  return (
    <>
      <Globalnav />
      <GlobalStyles/>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout