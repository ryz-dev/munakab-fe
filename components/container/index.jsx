import styled from '@emotion/styled'

const Container = styled.div(
  {
    margin: '0 auto'
  },
  ({gutter, children, ...props}) => {
    return {
      paddingLeft: gutter,
      paddingRight: gutter,
      ...props
    }
  },
  ({type}) => {
    switch (type) {
      case "xxl":
        return {maxWidth: 1366}
      case "xl":
        return {maxWidth: 1200}
      case "lg":
        return {maxWidth: 992}
      case "md":
        return {maxWidth: 768}
      case "sm":
        return {maxWidth: 576}
      default:
        return {maxWidth: 1200}
    }
  }
)

Container.defaultProps = {
  gutter: 16
}

export default Container