import styled, { keyframes } from 'styled-components/macro';

export const Modal = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

/* Add Animation */
const AnimateTop = keyframes`
  0% {
    opacity:0;
    transform : translateY(-6rem);
  
  100%{
    transform : translateY(-8rem);
  }
`;

export const ModalContent = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation: ${AnimateTop} 0.5s linear normal;
`;

export const ModalHeader = styled.div`
    padding: 2px 16px;
    background-color: #183346;
    color: white;
`;

export const ModalBody = styled.div`
    padding: 2px 16px;
    text-align: center;
`;

export const ModalFooter = styled.div`
    padding: 2px 16px;
    background-color: #183346;
    color: white;
`;

export const Close = styled.span`
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover,
    focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const Image = styled.img`
    height: 10rem;
    width: 10rem;
    margin: 1rem;
    border-radius: 35%;
`;
