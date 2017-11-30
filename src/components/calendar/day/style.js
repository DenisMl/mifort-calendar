import styled from 'styled-components';

export const Day = styled.div`
	background-color: #00f1ff;
    opacity: 0.7;
    color: #d0d7e2;
    font-size: 70px;
    text-align: left;
    vertical-align: bottom;
    display: inline-block;
    height: 100%;
    width: 14.2%;
    border: 1px solid;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.1s linear;
    &:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        opacity: 1;
    }
`;

export const DayWrap  = styled.div`
	height: inherit;
    display: inline;
`;