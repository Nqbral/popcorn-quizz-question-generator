import axios from 'axios';
import { useEffect, useState } from 'react';

import { TOKEN_API_TMDB } from '../constants';
import Artwork from './Artwork';

export default function SearchArtwork({ theme, handleSelectArtwork }) {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

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
        setPage(page - 1);
    };

    const nextPageChange = () => {
        setPage(page + 1);
    };

    const fetchData = async () => {
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

            <div className="mt-5 flex flex-row flex-wrap justify-evenly gap-10">
                {data.length > 0 ? (
                    data.map((artwork) => {
                        return (
                            <Artwork
                                key={artwork.id}
                                artwork={artwork}
                                handleSelectArtwork={handleSelectArtwork}
                            />
                        );
                    })
                ) : (
                    <div className="italic">Pas de résultat</div>
                )}
            </div>

            {totalPages > 1 ? (
                <>
                    <div>
                        Page {page}/{totalPages}
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <button
                            className="p-1 font-bold"
                            onClick={previousPageChange}
                        >
                            Précédent
                        </button>
                        <button
                            className="p-1 font-bold"
                            onClick={nextPageChange}
                        >
                            Suivant
                        </button>
                    </div>
                </>
            ) : (
                ''
            )}
        </div>
    );
}
