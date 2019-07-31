import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import { Row, Col } from "antd"
import Container from "Components/container"
import { globalFetch } from "Config/api"

const GlobalfooterWrap = styled.footer`
	padding: 40px 0; 
	background: #fff;
	color: #727272;
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
const GNFooter = styled.div`
	padding: 30px 0;
	text-align: center;
`

const Globalfooter = ({data}) => {
  return (
		<GlobalfooterWrap>
			<Container>
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
					{/* <Col sm={6} xs={24}>
						<div>
							<List>
								<li>
									<h4>Profil</h4>
								</li>
								<li>
									<a href="#">Tentang</a>
								</li>
								<li>
									<a href="#">Sejarah</a>
								</li>
								<li>
									<a href="#">Visi dan Misi</a>
								</li>
								<li>
									<a href="#">Aset Desa</a>
								</li>
							</List>
						</div>
					</Col>
					<Col sm={6} xs={24}>
						<div>
							<List>
								<li>
									<h4>Lemabaga</h4>
								</li>
								<li>
									<a href="#">Beranda</a>
								</li>
								<li>
									<a href="#">Profil</a>
								</li>
								<li>
									<a href="#">OPD</a>
								</li>
								<li>
									<a href="#">Berita</a>
								</li>
							</List>
						</div>
					</Col>
					<Col sm={6} xs={24}>
						<div>
							<List>
								<li>
									<h4>Kontak</h4>
								</li>
								<li>
									<a href="#">Beranda</a>
								</li>
								<li>
									<a href="#">Profil</a>
								</li>
								<li>
									<a href="#">OPD</a>
								</li>
								<li>
									<a href="#">Berita</a>
								</li>
							</List>
						</div>
					</Col> */}
				</Row>
				<GNFooter>
					<div>
						<span>Copyright 2019. All rights reserved. Kabupaten Muna</span>
					</div>
				</GNFooter>
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