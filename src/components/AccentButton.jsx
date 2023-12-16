export default function AccentButton({ buttonText, onClick = null }) {
    return (
        <button
            className="button my-1 rounded-md bg-yellow-600 px-5 py-2 text-white transition-colors hover:bg-yellow-500"
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}
