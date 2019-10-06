import styled from "@emotion/styled"

export const PGOrgChart = styled.div`
  display:flex;
	justify-content:center;
	ul {
		padding-top: 20px;
		position: relative;
		transition: all 0.5s;
		ul::before {
			content: '';
			position: absolute;
			top: 0;
			left: 50%;
			border-left: 1px solid #ccc;
			width: 0;
		}
	}
	li {
		float: left;
		text-align: center;
		list-style-type: none;
		position: relative;
		padding: 20px 10px;
		transition: all 0.5s;
		&::before,&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 50%;
			border-top: 1px solid #ccc;
			width: 50%;
			height: 20px;
		}
		&::after {
			right: auto;
			left: 50%;
			border-left: 1px solid #ccc;
		}
		&:only-child::after, &:only-child::before {
			display:none;
		}
		&:only-child {
			padding-top:0;
		}
		&:first-of-type::before, &:last-of-type::after {
			border: 0 none;
		}
		&:last-of-type::before {
			border-right: 1px solid #ccc;
			border-radius: 0 5px 0 0;
		}
		&:first-of-type::after {
			border-radius: 5px 0 0 0;
		}
		.user {
			text-decoration: none;
			color: #666;
			display: inline-block;
      border: 1px solid #dcdcdc;
			padding:20px 10px;
			transition: all 0.5s;
			background:#fff;
			min-width:180px;
			border-radius:6px;
			&:hover,&:hover + ul li .user {
				background:lighten($blue,45%);
				transition:all 0.15s;
				transform:translateY(-5px);
			}
			&:hover {
				+ ul li::after,
				+ ul li::before,
				+ ul::before,
				+ ul ul::before {
					border-color:  #94a0b4;
				}
			}
			> div, > a {
				font-size:12px;
			}
			img {
				width: 140px;
			}
			.name {
				font-size:16px;
				margin:15px 0 0;
				font-weight:300;
			}
			.role {
				font-weight:600;
				margin-bottom:10px;
				margin-top:5px;
			}
			.manager {
				font-size:12px;
			  color:#b21e04;
			}
		}
	}
`