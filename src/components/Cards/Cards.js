import Modal from '../Modal/Modal';
import * as S from './cards.styles';
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from '../Spinner/Spinner';

const Cards = ({ photos }) => {
    const [modalState, setModalState] = useState(false);
    const [cardObj, setCardObj] = useState(null);

    const closeModal = () => {
        setModalState(false);
    };

    const openModal = (cardObj) => {
        setModalState(true);
        setCardObj(cardObj); //pass card object to modal - for sowing te data
    };

    return (
        <S.Cards>
            {modalState && <Modal closeModal={closeModal} cardObj={cardObj} />}
            {photos.map((p) => (
                <S.Card key={p.id} onClick={() => openModal(p)}>
                    <LazyLoad
                        key={p.id}
                        height={100}
                        offset={[-100, 100]}
                        placeholder={<Spinner />} //showing spinner for every img that still not rendered
                    >
                        <S.ImageContainer>
                            <S.Image
                                alt={p.thumbnailUrl}
                                src={p.thumbnailUrl}
                            />
                        </S.ImageContainer>
                    </LazyLoad>

                    <S.DescriptionContainer>
                        <S.Title>{p.title}</S.Title>
                        <S.Id>Id: {p.id}</S.Id>
                    </S.DescriptionContainer>

                    <S.LinkContainer>{p.url}</S.LinkContainer>
                </S.Card>
            ))}
        </S.Cards>
    );
};
export default Cards;
