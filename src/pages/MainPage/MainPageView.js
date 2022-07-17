import Title from '../../components/Title/Title';
import Select from '../../components/Select/Select';
// import Input from '../../components/Input/Input';
import Cards from '../../components/Cards/Cards';
import * as S from './mainPage.styles';

const MainPageView = ({
    photos,
    chosenAlbum,
    handleChosenOpt,
    // chosenInputPhotos,
    // handleChosenPhotos,
}) => {
    let albumIds = Array.from({ length: 100 }, (_, i) => i + 1); //Insert options to array from 0 to 100 - for dropdown(Album Ids)

    const generateOptions = () =>
        albumIds.map((opt) => (
            <option key={opt} value={opt}>
                {opt}
            </option>
        ));

    //     <Input
    //     val={chosenInputPhotos}
    //     handleChosenOpt={handleChosenPhotos}
    // />
    return (
        <S.Container>
            <Title>Photo Albums Page</Title>
            <Select
                val={chosenAlbum}
                handleChosenOpt={handleChosenOpt}
                generateOptions={generateOptions}
            />
            <Cards photos={photos} />
        </S.Container>
    );
};

export default MainPageView;
