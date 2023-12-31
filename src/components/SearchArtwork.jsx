import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { TOKEN_API_TMDB } from '../constants';
import Artwork from './Artwork';

export default function SearchArtwork({ theme, handleSelectArtwork }) {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [dataDownloaded, setDataDownloaded] = useState(false);

    let apiUrl = '';

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchData();
        }, 1000);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, page]);

    const handleChangeSearch = (event) => {
        setPage(1);
        setSearchTerm(event.target.value);
    };

    const previousPageChange = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
    };

    const nextPageChange = () => {
        if (page === totalPages) {
            return;
        }
        setPage(page + 1);
    };

    const fetchData = async () => {
        setDataDownloaded(false);
        try {
            switch (theme) {
                case 'anime':
                    apiUrl = `https://api.themoviedb.org/3/discover/tv?with_genres=16&with_keywords=210024|287501&with_text_query=${searchTerm}&language=fr-FR&page=${page}`;
                    break;
                case 'movie':
                    apiUrl = `https://api.themoviedb.org/3/discover/movie?with_text_query=${searchTerm}&language=fr-FR&page=${page}`;
                    break;
                case 'serie':
                    apiUrl = `https://api.themoviedb.org/3/discover/tv?without_genres=16&without_keywords=210024|287501&with_text_query=${searchTerm}&language=fr-FR&page=${page}`;
                    break;
                default:
                    break;
            }

            const response = await axios.get(apiUrl, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + TOKEN_API_TMDB,
                },
            });
            setData(response.data.results);
            setTotalPages(response.data.total_pages);
            setDataDownloaded(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                name="search-artwork"
                className="border-b-2 bg-transparent px-1 text-center outline-none transition-colors duration-300 focus:border-yellow-500"
                value={searchTerm}
                onChange={handleChangeSearch}
            />

            {dataDownloaded ? (
                <>
                    <div className="mt-5 flex flex-row flex-wrap justify-evenly gap-10">
                        {data.length > 0 ? (
                            data.map((artwork) => {
                                return (
                                    <Artwork
                                        key={artwork.id}
                                        artwork={artwork}
                                        handleSelectArtwork={
                                            handleSelectArtwork
                                        }
                                    />
                                );
                            })
                        ) : (
                            <div className="italic">Pas de résultat</div>
                        )}
                    </div>
                    {totalPages > 1 ? (
                        <>
                            <div className="mt-6">
                                Page {page}/{totalPages}
                            </div>
                            <div className="mt-2 flex flex-row items-center justify-center gap-4">
                                <button
                                    className="font-bold text-yellow-500"
                                    onClick={previousPageChange}
                                >
                                    Précédent
                                </button>
                                <button
                                    className="font-bold text-red-600"
                                    onClick={nextPageChange}
                                >
                                    Suivant
                                </button>
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                </>
            ) : (
                <ReactLoading type="spin" color="#eab308" className="py-5" />
            )}
        </div>
    );
}
