import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Container from "Components/container"
import { Tabs } from 'antd'
import { GlobalContent, GlobalBanner, GBHeader, Flex } from "Components/components"
import { globalFetch } from "Config/api"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const DownloadWrap = styled.div`
  padding-bottom: 100px;
`
const Sidebar = styled.div`
  width: 240px;
  padding: 40px;
  border-right: 1px solid #eaeaea;
  ul {
    list-style: none;
    li {
      padding: 10px 0;
      a {
        color: #333;
      }
    }
  }
`
const Content = styled.div`
  .ant-tabs-tab {
    text-align: left !important;
  }
  .ant-tabs-left-content {
    padding-right: 24px;
  }
`
const ContentTableWrap = styled.div`
  padding: 40px 0;
  table {
    width: 100%;
    tr {
      border-bottom: 1px solid #eaeaea;
      &:first-child {
        border-top: 1px solid #eaeaea;
      }
      td {
        padding: 14px 0;
        &:first-child {
          width: 100%;
        }
      }
    }
  }
`
const ContentTable = ({item}) => (
  <ContentTableWrap>
    <table>
      {
        item && item.map(item => (
          <tr>
            <td>{item.filename}</td>
            <td style={{paddingRight: 30}}>{item.size}</td>
            <td><a href={item.path} target="_blank">Download</a></td>
          </tr>
        ))
      }
    </table>
  </ContentTableWrap>
)

const Download = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    globalFetch(`/api/download`)
      .then(data => {
        setData(data)
      })
  }, [])

  console.log(data)
  return (
    <DownloadWrap>
      <GlobalBanner bg="/static/mekanisme-sop.jpg">
        <GBHeader title="Download" desc="Kab. Muna"/>
      </GlobalBanner>
      <GlobalContent padding={0}>
        {/* <Flex alignItems="flex-start">
          <Sidebar>
            <ul>
              <li>
                <a href="#">SKPD</a>
              </li>
              <li>
                <a href="#">SKPD</a>
              </li>
              <li>
                <a href="#">SKPD</a>
              </li>
              <li>
                <a href="#">SKPD</a>
              </li>
              <li>
                <a href="#">SKPD</a>
              </li>
            </ul>
          </Sidebar>
        </Flex> */}
        <Content>
          {
            data && (
              <Tabs defaultActiveKey="1" onChange={callback} tabPosition="left"
                tabBarGutter={8}
                tabBarStyle={{
                  width: 240,
                  textAlign: "left",
                  padding: "40px 0"
                }}
              >
                {
                  data && data.data.map((item, i) => (
                    <TabPane tab={item.name} key={i + 1}>
                      <ContentTable item={item.items}/>
                    </TabPane>
                  ))
                }
              </Tabs>
            )
          }
        </Content>
      </GlobalContent>
    </DownloadWrap>
  )
}

export default Download