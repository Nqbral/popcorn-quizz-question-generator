import logo from '../assets/images/logo.png';
import Card from '../components/Card';
import LinkPrimaryButton from '../components/LinkPrimaryButton';
import NavBar from '../components/NavBar';

export default function HomePage() {
    return (
        <>
            <NavBar />
            <section
                id="homepage"
                className="flex h-screen flex-col items-center justify-center"
            >
                <div className="mb-3 flex flex-col items-center">
                    <img
                        id="logo-menu"
                        src={logo}
                        alt="logo-menu"
                        className="h-20"
                    />
                    <h1 className="py-2">
                        <span className="text-yellow-500">Popcorn</span> quizz
                    </h1>
                    <h2 className="pb-1">
                        Questions{' '}
                        <span className="text-red-600">generator</span>
                    </h2>
                </div>
                <Card>
                    <LinkPrimaryButton
                        linkTo={'/as'}
                        buttonText={'Créer une question'}
                    ></LinkPrimaryButton>
                    <LinkPrimaryButton
                        linkTo={'/as'}
                        buttonText={'Consulter les questions'}
                    ></LinkPrimaryButton>
                    <LinkPrimaryButton
                        linkTo={'/as'}
                        buttonText={'Modérer les questions'}
                    ></LinkPrimaryButton>
                </Card>
            </section>
        </>
    );
}
