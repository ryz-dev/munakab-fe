import { useState, useEffect } from "react"
import styled from "@emotion/styled"

const _DropdownContent = styled.div`
  display: ${({toggle}) => toggle ? "block" : "none"};
  @media (min-width: 576px) {
    display: none;
  }
`
const Dropdown = ({title, setNode, children, outToggle}) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
    !toggle ? setNode(children) : setNode(null)
  }
  useEffect(() => {
    setToggle(outToggle)
  }, [outToggle])
  return (
    <div>
      <div onClick={handleClick}>
        {title}
      </div>
      <_DropdownContent toggle={toggle}>
        {children}
      </_DropdownContent>
    </div>
  )
}

export default Dropdown