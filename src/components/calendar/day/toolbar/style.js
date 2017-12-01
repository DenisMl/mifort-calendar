import styled from 'styled-components';
import {Day} from "../style";

export const Toolbar = styled.div`
	display: none;
	box-sizing: border-box;
	font-size: 0.8em;
	color: #d2d2d2;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding-left: 5px;
	&:hover {
		color: #9e9e9e;
	}
	${Day}:hover & {
		display: block;
	}
`;