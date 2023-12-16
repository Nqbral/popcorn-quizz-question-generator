import { Link } from 'react-router-dom';

import AccentButton from './AccentButton';
import PrimaryButton from './PrimaryButton';

export default function LinkButton({ linkTo, buttonText, primary = true }) {
    return (
        <Link to={linkTo}>
            {primary ? (
                <PrimaryButton buttonText={buttonText}></PrimaryButton>
            ) : (
                <AccentButton buttonText={buttonText}></AccentButton>
            )}
        </Link>
    );
}
