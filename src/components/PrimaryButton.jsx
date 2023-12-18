export default function PrimaryButton({ buttonText, onClick = null }) {
    return (
        <button
            className="button my-1 rounded-md  bg-red-700 px-5 py-2 text-white transition-colors hover:bg-red-600"
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}
