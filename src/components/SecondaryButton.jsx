export default function SecondaryButton({ buttonText, onClick = null }) {
    return (
        <button
            className="button my-1 rounded-md border-2 border-red-700 bg-transparent px-5 py-2 text-red-700 transition-colors hover:border-red-600 hover:text-red-600"
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}
