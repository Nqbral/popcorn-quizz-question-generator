export default function EmojiQuestionTile({ question }) {
    return (
        <div className="flex flex-col items-center gap-2 p-2">
            <img
                src={`https://image.tmdb.org/t/p/original${question.poster_path}`}
                className="h-52"
                alt={`poster-${question.name}`}
            />
            <div>Nom : {question.name}</div>
            <div>Énoncé : {question.statement}</div>
        </div>
    );
}
