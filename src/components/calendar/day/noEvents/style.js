import styled from 'styled-components';
import {Day} from "../style";

export const NoEvents = styled.div`
	box-sizing: border-box;
	display: none;
	font-size: 0.9em;
	color: #9f9f9f;
	width: 70%;
	padding: 5Vmin 0 0 0.5vmin;
    
	${Day}:hover & {
		display: inline-block;

	}
`;