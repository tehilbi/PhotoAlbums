import styled from 'styled-components/macro';

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
`;

export const Card = styled.div`
    padding: 0.2rem;
    background: #254864;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;

    &:hover {
        transform: translate(0%, -1%);
        transition: 0.3s ease-out;
        cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #345979;
`;

export const Image = styled.img`
    height: 3rem;
    width: 3rem;
    margin: 1rem;
    border-radius: 35%;
`;

export const DescriptionContainer = styled.div`
    text-align: center;
    margin: 1rem;
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    overflow: hidden;
    width: 15rem;
    margin: auto;
    color: #ffffff;
`;

export const Id = styled.div`
    font-size: 13px;
    color: #4c6f90;
`;

export const LinkContainer = styled.div`
    padding: 0.2rem;
    font-size: 13px;
    color: #4c6f90;
    background: #183246;
`;
