import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { GlobalBanner, GlobalContent, Flex, GBHeader } from "Components/components"
import Container from "Components/container"
import { Row, Col, Pagination } from "antd"
import { globalFetch } from "Config/api"
import Link from "next/link"
import dayjs from "dayjs"
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import Dotdotdot from 'react-dotdotdot'

dayjs.extend(LocalizedFormat)
dayjs.extend(AdvancedFormat)

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
const ListItem = ({item}) => (
  <ListItemWrap>
    <Flex justifyContent="initial">
      <Date>
        <DateDay>
          {dayjs(item.created_at).date()}
        </DateDay>
        <DateMonth>
          {dayjs(item.created_at).format('MMMM').split("").filter((item, i) => {
            return i < 3 ? item : null
          }).join("")}
        </DateMonth>
      </Date>
      <TextWrap>
        <Link href="pengumuman/[id]" as={`pengumuman/${item.slug}`}>
          <a>
            <Dotdotdot clamp={3}>
              <h4>{item.title}</h4>
            </Dotdotdot>
          </a>
        </Link>
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

const TodayWrap = styled.div`
  margin-top: 20px;
`

const Pengumuman = () => {
  const [data, setData] = useState(null)
  const [today, setToday] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    globalFetch(`/api/pengumuman?limit=6&page=${page}`)
      .then(data => {
        setData(data)
      })
  }, [page])

  const handleChangePage = value => {
    setPage(value)
  }
  
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
            {
              data ? data.data.map(item => {
                return dayjs(item.created_at).date() === dayjs(dayjs()).date() ? <ListItem item={item}/> : null
              }): (
                <TodayWrap>
                  <div>Tidak ada pengumuman hari ini.</div>
                </TodayWrap>
              )
            }
          </List>
        </CointentWrap>
      </GlobalContent>
      <GlobalContent marginTop={60}>
        <CointentWrap>
          <Title>History</Title>
          <List>
            {
              data && data.data.map(item => {
                return dayjs(item.created_at).date() !== dayjs(dayjs()).date() ? <ListItem item={item}/> : null
              })
            }
          </List>
          <PaginationWrap>
            {/* <Pagination defaultCurrent={1} onChange={handleChangePage} total={data && data.pagination.total} pageSize={6} /> */}
          </PaginationWrap>
        </CointentWrap>
      </GlobalContent>
    </PengumumanWrap>
  )
}

export default Pengumuman