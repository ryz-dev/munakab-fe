import styled from "@emotion/styled"
import Container from "Components/container"
import { Tabs } from 'antd'
import { GlobalContent, GlobalBanner, GBHeader, Flex } from "Components/components"

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
const ContentTable = () => (
  <ContentTableWrap>
    <table>
      <tr>
        <td>File</td>
        <td>Download</td>
      </tr>
      <tr>
        <td>File</td>
        <td>Download</td>
      </tr>
      <tr>
        <td>File</td>
        <td>Download</td>
      </tr>
    </table>
  </ContentTableWrap>
)

const Download = () => {
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
          <Tabs defaultActiveKey="1" onChange={callback} tabPosition="left"
            tabBarGutter={8}
            tabBarStyle={{
              width: 240,
              textAlign: "left",
              padding: "40px 0"
            }}
          >
            <TabPane tab="Regulasi" key="1">
              <ContentTable/>
            </TabPane>
            <TabPane tab="Transparansi Anggaran" key="2">
              <ContentTable/>
            </TabPane>
            <TabPane tab="Formulir Layanan Desa" key="3">
              <ContentTable/>
            </TabPane>
          </Tabs>
        </Content>
      </GlobalContent>
    </DownloadWrap>
  )
}

export default Download