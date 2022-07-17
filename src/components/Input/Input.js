import * as S from './input.styles';

const Input = ({ val, handleChosenOpt }) => {
    return (
        <S.Input
            type='text'
            placeholder='Search Photo'
            value={val}
            onChange={(e) => handleChosenOpt(e)}
        />
    );
};

export default Input;
