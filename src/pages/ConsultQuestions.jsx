import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import Card from '../components/Card';
import EmojiQuestionTile from '../components/EmojiQuestionTile';
import LinkButton from '../components/LinkButton';
import NavBar from '../components/NavBar';
import { URL_JSON_SERVER } from '../constants';

export default function ConsultQuestions() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [dataDownloaded, setDataDownloaded] = useState(false);
    const [filters, setFilters] = useState({
        type: ['emoji'],
        theme: ['anime'],
    });

    const fetchData = async () => {
        if (!dataDownloaded) {
            try {
                const response = await axios.get(URL_JSON_SERVER + 'questions');
                setData(response.data);
                setDataDownloaded(true);
                filterData(response.data);
                return;
            } catch (error) {
                console.error('Error fetch data', error);
            }
        }

        filterData(data);
    };

    function filterData(dataToFilter) {
        let dataFiltered = dataToFilter.filter(
            (question) =>
                filters.theme.includes(question.theme) &&
                filters.type.includes(question.type) &&
                question.validated,
        );

        setFilteredData(dataFiltered);
    }

    useEffect(() => {
        fetchData();
    }, [filters]);

    const handleChangeForm = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        let newFilters = filters;

        if (newFilters[key].includes(value)) {
            newFilters[key] = newFilters[key].filter(
                (valueDeleted) => valueDeleted !== value,
            );
        } else {
            newFilters[key].push(value);
        }

        setFilters({
            type: newFilters.type,
            theme: newFilters.theme,
        });
    };

    return (
        <>
            <NavBar />
            <section
                id="consult-questions"
                className="flex flex-col items-center justify-center"
            >
                <Card>
                    <h2 className="text-yellow-500">Les questions validées</h2>
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
                        <div className="flex flex-col items-center py-2">
                            <h3 className="font-bold">Thème</h3>
                            <div className="flex flex-row gap-1">
                                <input
                                    type="checkbox"
                                    name="theme"
                                    value="anime"
                                    id="anime-selection"
                                    className="accent-yellow-500"
                                    checked={filters.theme.includes('anime')}
                                    onChange={handleChangeForm}
                                />
                                <label htmlFor="anime-selection">Anime</label>
                                <input
                                    type="checkbox"
                                    name="theme"
                                    value="movie"
                                    id="movie-selection"
                                    className="accent-yellow-500"
                                    checked={filters.theme.includes('movie')}
                                    onChange={handleChangeForm}
                                />
                                <label htmlFor="anime-selection">Film</label>
                                <input
                                    type="checkbox"
                                    name="theme"
                                    value="serie"
                                    id="serie-selection"
                                    className="accent-yellow-500"
                                    checked={filters.theme.includes('serie')}
                                    onChange={handleChangeForm}
                                />
                                <label htmlFor="anime-selection">Série</label>
                            </div>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <h3 className="font-bold">Type</h3>
                            <div className="flex flex-row gap-1">
                                <input
                                    type="checkbox"
                                    name="type"
                                    value="emoji"
                                    id="emoji-selection"
                                    className="accent-yellow-500"
                                    checked={filters.type.includes('emoji')}
                                    onChange={handleChangeForm}
                                />
                                <label htmlFor="emoji-selection">Émojis</label>
                                <input
                                    type="checkbox"
                                    name="type"
                                    value="image"
                                    id="image-selection"
                                    className="accent-yellow-500"
                                    checked={filters.type.includes('image')}
                                    onChange={handleChangeForm}
                                    disabled
                                />
                                <label htmlFor="movie-selection">Image</label>
                                <input
                                    type="checkbox"
                                    name="type"
                                    value="music"
                                    id="music-selection"
                                    className="accent-yellow-500"
                                    checked={filters.type.includes('music')}
                                    onChange={handleChangeForm}
                                    disabled
                                />
                                <label htmlFor="anime-selection">Musique</label>
                            </div>
                        </div>
                    </div>
                    {dataDownloaded ? (
                        <div className="my-5 flex flex-row flex-wrap justify-evenly gap-10">
                            {filteredData.length > 0 ? (
                                filteredData.map((question) => {
                                    return (
                                        <EmojiQuestionTile
                                            key={question.id}
                                            question={question}
                                        />
                                    );
                                })
                            ) : (
                                <div className="italic">Pas de résultat</div>
                            )}
                        </div>
                    ) : (
                        <ReactLoading type="spin" color="#eab308" />
                    )}

                    <LinkButton
                        linkTo={'/'}
                        buttonText={'Retour'}
                        primary={false}
                    />
                </Card>
            </section>
        </>
    );
}
