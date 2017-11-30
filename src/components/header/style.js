import styled from 'styled-components';


export const HeaderElement = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 7px -3px black;
	z-index: 1;
	background-color: #ffffff;
	margin: 0 auto;
	height: 46px;
	.logo {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
		span {
			font-family: Roboto,sans-serif;
			display: inline-block;
			font-size: 14px;
			font-weight: 700;
			color: #00b5f2;
			text-transform: uppercase;
		}
		img {
			height:100%;
			padding-top: 5px;
		}
	}
`;