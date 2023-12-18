export default function Artwork({ artwork, handleSelectArtwork }) {
    let name = Object.hasOwn(artwork, 'name') ? artwork.name : artwork.title;

    return (
        <div
            className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-110"
            onClick={() => {
                handleSelectArtwork(artwork);
            }}
        >
            <img
                src={`https://image.tmdb.org/t/p/original/${artwork.poster_path}`}
                className="h-52"
                alt={`poster-${name}`}
            />
            <div className="font-bold" style={{ maxWidth: 150 }}>
                {name}
            </div>
        </div>
    );
}
