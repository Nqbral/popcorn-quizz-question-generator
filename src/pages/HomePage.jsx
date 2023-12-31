import logo from '../assets/images/logo.png';
import Card from '../components/Card';
import LinkButton from '../components/LinkButton';
import NavBar from '../components/NavBar';

export default function HomePage() {
    return (
        <>
            <NavBar />
            <section
                id="homepage"
                className="flex flex-col items-center justify-center"
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
                    <LinkButton
                        linkTo={'/choose-type-theme-question'}
                        buttonText={'Créer une question'}
                    />
                    <LinkButton
                        linkTo={'/consult-questions'}
                        buttonText={'Consulter les questions'}
                    />
                    <LinkButton
                        linkTo={'/moderate-question'}
                        buttonText={'Modérer les questions'}
                    />
                </Card>
            </section>
        </>
    );
}
