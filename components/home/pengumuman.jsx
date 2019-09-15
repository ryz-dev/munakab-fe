import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Container from "Components/container"
import Link from "next/link"
import { Row, Col } from "antd"
import { GlobalTitle, maxSM } from "Components/components"
import { globalFetch } from "Config/api"
import Dotdotdot from 'react-dotdotdot'
import dayjs from "dayjs"
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

const AnnauncementWrap = styled.div`
  padding: 60px 0 150px 0;
  background: #fff;
`
const Title = styled.p`
  color: #727272;
  font-size: 18px;
  font-weight: 500;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  ${maxSM} {
    display: block;
  }
`
const ImgItem = styled.div`
  width: 88px;
  height: 88px;
  flex: none;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all .3s ease;
  box-sizing: border-box;
  border: 1px solid #f5b723;
  h5 {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.2;
  }
  span {
    color: #727272;
    text-transform: uppercase;
  }

`
const TitleWrap = styled.div`
  border-bottom: 1px solid #d5d5d5;
  padding: 40px 0;
  ${maxSM} {
    padding: 20px 0;
  }
`
const List = styled.ul`
  list-style: none;
  padding: 20px 40px;
  background: #f8f8f8;
  li {
    height: 133px;
    a {
      &:hover {
        ${ImgItem} {
          border: 4px solid #f5b723;
        }
      }
    }
    &:last-of-type {
      ${TitleWrap} {
        border: none;
      }
    }
  }
  ${maxSM} {
    margin-top: 40px;
    li {
      height: initial;
      margin-bottom: 30px;
    }
  }
`

const ListItem = ({item}) => (
  <li>
   <Link href="pengumuman/[id]" as={`pengumuman/${item.slug}`}>
      <a>
        <Flex>
          <ImgItem>
            <div>
              <h5>
                {dayjs(item.created_at).date()}
              </h5>
              <span>
                {dayjs(item.created_at).format('MMMM').split("").filter((item, i) => {
                  return i < 3 ? item : null
                }).join("")}
              </span>
            </div>
          </ImgItem>
          <TitleWrap>
            <Title>
              <Dotdotdot clamp={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </Dotdotdot>
            </Title>
          </TitleWrap>
        </Flex>
      </a>
    </Link>
  </li>
)

const StyledCol = styled(Col)`
  ${maxSM} {
    max-width: 100%;
  }
`

const Annauncement = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    globalFetch(`/api/pengumuman?limit=3&page=1`)
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <AnnauncementWrap>
      <Container xl>
        <Row type="flex" align="middle" gutter={20}>
          <Col sm={24} md={8}>
            <div>
              <GlobalTitle
                title="Pengumuman"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
                link="/pengumuman"
                button={{
                  border: `1px solid #f5b723`,
                  color: `#f5b723`
                }}
              />
            </div>
          </Col>
          <StyledCol sm={24} md={16}>
            <div>
              <List>
                {data && data.data.map(item => (
                  <ListItem item={item}/>
                ))}
              </List>
            </div>
          </StyledCol>
        </Row>
      </Container>
    </AnnauncementWrap>
  )
}

export default Annauncement