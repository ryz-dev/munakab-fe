import React from "react"
import styled from "@emotion/styled"
import { Row, Col } from "antd"
import Container from "Components/container"

const GlobalfooterWrap = styled.footer`
	padding: 40px 0;
	background: #fff;
	color: #727272;
`
const List = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
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

const Globalfooter = () => {
  return (
		<GlobalfooterWrap>
			<Container>
				<Row type="flex">
					<Col md={6}>
						<div>
							<List>
								<li>
									<h4>Muna</h4>
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
					<Col md={6}>
						<div>
							<List>
								<li>
									<h4>Muna</h4>
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
					<Col md={6}>
						<div>
							<List>
								<li>
									<h4>Muna</h4>
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
					<Col md={6}>
						<div>
							<List>
								<li>
									<h4>Muna</h4>
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