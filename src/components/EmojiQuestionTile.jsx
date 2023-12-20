export default function EmojiQuestionTile({ question }) {
    let classNames = 'flex flex-col border-2 p-2';
    return (
        <div className={classNames}>
            <div>Nom : {question.name}</div>
            <div>Énoncé : {question.statement}</div>
        </div>
    );
}
