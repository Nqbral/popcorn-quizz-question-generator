import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from '../components/Card';
import EmojiStatements from '../components/EmojiStatements';
import LinkButton from '../components/LinkButton';
import NavBar from '../components/NavBar';
import SearchArtwork from '../components/SearchArtwork';
import SelectedArtwork from '../components/SelectedArtwork';

export default function CreateQuestion() {
    const params = useParams();
    const theme = params.theme;
    const type = params.type;
    const [artwork, setArtwork] = useState(null);

    const handleSelectArtwork = (artwork) => {
        setArtwork(artwork);
        let messageToast = '';

        switch (theme) {
            case 'anime':
                messageToast = `L'anime ${artwork.name} a été sélectionné.`;
                break;
            case 'movie':
                messageToast = `Le film ${artwork.title} a été sélectionné.`;
                break;
            case 'serie':
                messageToast = `La série ${artwork.name} a été sélectionnée.`;
                break;
            default:
                console.log(
                    'handleSelectArtwork : case not handled -> ' + theme,
                );
                break;
        }
        toast(messageToast);
    };

    return (
        <>
            <NavBar />
            <section
                id="choose-type-theme-question"
                className="flex flex-col items-center justify-center"
            >
                <Card>
                    <h2 className="text-yellow-500">Créer la question</h2>
                    <h3 className="py-3">Chercher l&apos;oeuvre</h3>
                    <SearchArtwork
                        theme={theme}
                        handleSelectArtwork={handleSelectArtwork}
                    />

                    {artwork !== null ? (
                        <>
                            <hr className="my-10 w-64" />
                            <h3 className="py-3 text-yellow-500">
                                Oeuvre sélectionnée
                            </h3>
                            <div className="rounded-lgs border-2 border-solid border-yellow-600 p-2">
                                <SelectedArtwork
                                    artwork={artwork}
                                ></SelectedArtwork>
                            </div>
                        </>
                    ) : (
                        ''
                    )}

                    <EmojiStatements />

                    <div className="mt-8 flex flex-row gap-2">
                        <LinkButton
                            linkTo={'/choose-type-theme-question'}
                            buttonText={'Retour'}
                            primary={false}
                        />
                        <LinkButton
                            linkTo={`/`}
                            buttonText={'Créer la question'}
                        />
                    </div>

                    <ToastContainer
                        position="bottom-center"
                        autoClose={2000}
                        theme="dark"
                        hideProgressBar={true}
                        className="text-center"
                    />
                </Card>
            </section>
        </>
    );
}
