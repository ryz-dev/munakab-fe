import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, Flex, GBHeader } from "Components/components"
import Container from "Components/container"
import { Row, Col, Pagination } from "antd"

const PengumumanWrap = styled.div`
  padding-bottom: 100px;
`
const CointentWrap = styled.div`
  max-width: 576px;
  margin: 0 auto;
`
const Title = styled.h3`
  font-size: 34px;
  font-weight: bold;
`
const List = styled.ul`
  list-style: none;
  margin-top: 24px;
`
const ListItemWrap = styled.li`
  padding: 10px 0;
`
const Date = styled.div`
  height: 85px;
  width: 85px;
  margin-right: 20px;
  border: 1px solid #e8c23b;
  flex: none;
  text-align: center;
`
const DateDay = styled.span`
  font-size: 34px;
  font-weight: bold;
  display: block;
`
const DateMonth = styled.span`
  text-transform: uppercase;
  font-size: 18px;
  display: block;
  color: #797979;
`
const TextWrap = styled.div`

`
const ListItem = () => (
  <ListItemWrap>
    <Flex justifyContent="initial">
      <Date>
        <DateDay>
          19
        </DateDay>
        <DateMonth>
          Sep
        </DateMonth>
      </Date>
      <TextWrap>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h4>
      </TextWrap>
    </Flex>
  </ListItemWrap>
)
const HistoryWrap = styled.div`
  margin-top: 20px;
`
const PaginationWrap = styled.div`
  padding: 60px 0;
  text-align: center;
`

const Pengumuman = () => {
  return (
    <PengumumanWrap>
      <GlobalBanner bg="/static/mekanisme-sop.jpg">
        <GBHeader
          title="Pengumuman"
          desc="Kab. Muna"
        />
      </GlobalBanner>
      <GlobalContent>
        <CointentWrap>
          <Title>Hari ini</Title>
          <List>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </List>
        </CointentWrap>
      </GlobalContent>
      <GlobalContent marginTop={60}>
        <CointentWrap>
          <Title>History</Title>
          <List>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </List>
          <PaginationWrap>
            <Pagination defaultCurrent={1} total={50} />
          </PaginationWrap>
        </CointentWrap>
      </GlobalContent>
    </PengumumanWrap>
  )
}

export default Pengumuman