import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import { Row, Col } from "antd"
import Container from "Components/container"
import { Flex, maxSM } from "Components/components"
import { globalFetch } from "Config/api"

const GlobalfooterWrap = styled.footer`
	padding: 40px 0; 
	background: #fff;
	color: #727272;
	margin-top: 60px;
`
const List = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	margin-bottom: 20px;
	h4 {
		font-weight: 800;
	}
	li {
		padding: 8px 0;
		a {
			color: #727272;
		}
	}
`
const FlexStyled = styled(Flex)`

`
const GNFooter = styled.div`
	padding: 30px 0;
`
const GNLeft = styled.div`

`
const GNRight = styled.div`

`
const GNLogo = styled.img`
	height: 130px;
	${maxSM} {
		margin-bottom: 40px;
	}
`

const Networks = styled.div`
	display: flex;
`

const Globalfooter = ({data}) => {
  return (
		<GlobalfooterWrap>
			<Container>
				<Row type="flex" justify="between" gutter={20}>
					<Col sm={8}>
						<div>
							<GNLogo src="/static/muna.png"/>
							{/* <Networks>

							</Networks> */}
						</div>
					</Col>
					<Col sm={16}>
						<Row type="flex">
							{
								data && data.data.map(item => (
									<Col sm={6} xs={24} key={item.id}>
										<div>
											<List>
												<li>
													<h4>{item.title}</h4>
												</li>
												{
													item.children && item.children.map(itemChild => (
														<li key={itemChild.id}>
															<Link href="#">{itemChild.title}</Link>
														</li>
													))
												}
											</List>
										</div>
									</Col>
								))
							}
						</Row>
						<GNFooter>
							<div>
								<span>Copyright 2019. All rights reserved. Kabupaten Muna</span>
							</div>
						</GNFooter>
					</Col>
				</Row>
			</Container>
		</GlobalfooterWrap>  
	)
}

export default Globalfooter

Globalfooter.defaultProps = {
	data: {
		data: []
	}
}