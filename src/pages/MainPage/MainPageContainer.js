import React, { useState, useEffect } from 'react';
import MainPageView from './MainPageView';

const MainPageContainer = () => {
    const FIRST_ALBUM = 1; // By default, The main screen show the first album
    const [photos, setPhotos] = useState(null);
    const [chosenAlbum, setChosenAlbum] = useState(null);
    const [chosenPhotos, setChosenPhotos] = useState(null);
    // const [chosenInputPhotos, setChosenInputPhotos] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let response = await (
            await fetch('https://jsonplaceholder.typicode.com/photos')
        ).json();
        setPhotos(response);

        const filtered = response.filter((p) => {
            return p.albumId === FIRST_ALBUM;
        });
        setChosenPhotos(filtered);
    };

    // Chosen option of dropdown
    const handleChosenOpt = (e) => {
        setChosenAlbum(e.target.value);

        const filtered = photos?.filter((p) => {
            return p.albumId == e.target.value;
        });
        setChosenPhotos(filtered);
    };

    // Start work on input
    // const handleChosenPhotos = (e) => {
    //     setChosenInputPhotos(e.target.value);

    //     const filtered = photos?.filter((p) => {
    //         return p.title.search(e.target.value) != -1;
    //     });
    //     setChosenPhotos(filtered);
    // };

    return (
        chosenPhotos && (
            <MainPageView
                photos={chosenPhotos}
                chosenAlbum={chosenAlbum}
                handleChosenOpt={handleChosenOpt}
                // chosenInputPhotos={chosenInputPhotos}
                // handleChosenPhotos={handleChosenPhotos}
            />
        )
    );
};

export default MainPageContainer;
