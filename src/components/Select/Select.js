import * as S from './select.styles';

const Select = ({ val, handleChosenOpt, generateOptions }) => {
    return (
        <S.Select
            onChange={(e) => handleChosenOpt(e)}
            value={val ? val : 'DEFAULT'}
        >
            <option value='DEFAULT' disabled>
                Select Album
            </option>
            {generateOptions()}
        </S.Select>
    );
};

export default Select;
