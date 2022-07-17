import * as S from './modal.styles';

const Modal = ({ closeModal, cardObj }) => {
    const { title, url, albumId, id } = cardObj;

    return (
        <S.Modal>
            <S.ModalContent>
                <S.ModalHeader>
                    <S.Close onClick={closeModal}>&times;</S.Close>
                    <h2>{title}</h2>
                </S.ModalHeader>
                <S.ModalBody>
                    <S.Image alt={title} src={url} />
                    <p>ID: {id}</p>
                </S.ModalBody>
                <S.ModalFooter>
                    <h3>Album ID: {albumId}</h3>
                </S.ModalFooter>
            </S.ModalContent>
        </S.Modal>
    );
};
export default Modal;
