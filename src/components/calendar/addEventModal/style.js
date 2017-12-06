import styled, {keyframes} from 'styled-components';


//Animation

const animatetop = keyframes`
	from {
	        top:-300px; 
	        opacity:0
	    } 
	to  {
	        top:0;
	        opacity:1
	    }
`;


export const ModalWrap = styled.div`
		display: block;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

export const ModalContent = styled.div`

    position: relative;
    background-color: #fff;
    margin: auto;
    border: 1px solid #888;
    width: 80%;
    max-width: 360px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: ${animatetop};
    animation-duration: 0.4s;
    z-index: 1;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    -webkit-animation-name: ${animatetop};
    -webkit-animation-duration: 0.4s;
`;

export const ModalHeader = styled.div`
    padding: 2px 16px 30px 16px;
    span{
        font-size: 16px;
    }
`;

export const ModalBody = styled.div`
    
`;

//Modal fields & button(s)

export const Time = styled.input.attrs({
	type: 'text',
	placeholder: 'event time',
	autoFocus: 'true'
})`
    width: 70%;
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
`;

export const Type = styled.input.attrs({
	type: 'text',
	placeholder: 'event type'
})`
    width: 70%;
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
`;

export const Narrator = styled.input.attrs({
	type: 'text',
	placeholder: 'event narrator'
})`
    width: 70%;
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
`;

export const Name = styled.input.attrs({
	type: 'text',
	placeholder: 'event name'
})`
    width: 70%;
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
`;

export const CreateEventButton = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #84bfdc;
    border: 0;
    padding: 15px;
    color: #f2f2f2;
    font-size: 14px;
    cursor: pointer;
    width: 70%;
    display: inline-block;
    &:hover {
        background: #659fbc;
        color: #fff;
    }
    &:active {
        background: #659fbc;
        color: #fff;
    }
    &:focus {
        background: #659fbc;
        color: #fff;
    }
`;