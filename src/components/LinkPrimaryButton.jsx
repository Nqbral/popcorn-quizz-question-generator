import { Link } from 'react-router-dom';

export default function LinkPrimaryButton({ linkTo, buttonText }) {
    return (
        <Link to={linkTo}>
            <button className="button my-1 rounded-md bg-red-700 px-5 py-2 text-white transition-colors hover:bg-red-600">
                {buttonText}
            </button>
        </Link>
    );
}
