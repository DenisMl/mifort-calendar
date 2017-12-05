import styled from 'styled-components';

export let Day = styled.div`
	display: inline-block;
	height: 100%;
	width: 14.2%;
	border: 1px solid;
	border-color: #e0e0e0;
	box-sizing: border-box;
	vertical-align: top;
	text-align: left;
	position: relative;
	font-size: 1.6vmin;
`;

export const DayWeekend = Day.extend`
	background-color: #f8f8f8;
`;