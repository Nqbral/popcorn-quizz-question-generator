import { TOKEN_API_TMDB } from '../constants';

export default function SearchArtwork({ theme }) {
    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                name="search-artwork"
                className="rounded-lg px-1 text-black transition-all focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
        </div>
    );
}
