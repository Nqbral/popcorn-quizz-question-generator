import { useState } from 'react';

import Card from '../components/Card';
import LinkButton from '../components/LinkButton';
import NavBar from '../components/NavBar';
import PrimaryButton from '../components/PrimaryButton';

export default function ChooseTypeThemeQuestion() {
    const [questionForm, setQuestionForm] = useState({
        theme: 'anime',
        type: 'emoji',
    });

    const handleChangeForm = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        setQuestionForm({ ...questionForm, [key]: value });
    };

    return (
        <>
            <NavBar />
            <section
                id="create-question"
                className="flex h-screen flex-col items-center justify-center"
            >
                <Card>
                    <h2 className="text-yellow-500">
                        Choisissez le thème et le type de question
                    </h2>
                    <form className="flex flex-col items-center">
                        <h3 className="py-3">Thème</h3>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="anime"
                                    onChange={handleChangeForm}
                                    name="theme"
                                    checked={questionForm.theme === 'anime'}
                                />
                                Anime
                            </label>
                            <label className="px-3">
                                <input
                                    type="radio"
                                    value="movie"
                                    onChange={handleChangeForm}
                                    name="theme"
                                    checked={questionForm.theme === 'movie'}
                                />
                                Film
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="serie"
                                    onChange={handleChangeForm}
                                    name="theme"
                                    checked={questionForm.theme === 'serie'}
                                />
                                Séries
                            </label>
                        </div>
                        <h3 className="py-3">Type</h3>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="emoji"
                                    onChange={handleChangeForm}
                                    name="type"
                                    checked={questionForm.type === 'emoji'}
                                />
                                Emojis
                            </label>
                            <label className="px-3">
                                <input
                                    type="radio"
                                    value="image"
                                    onChange={handleChangeForm}
                                    name="type"
                                    checked={questionForm.type === 'image'}
                                    disabled
                                />
                                Image
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="music"
                                    onChange={handleChangeForm}
                                    name="type"
                                    checked={questionForm.type === 'music'}
                                    disabled
                                />
                                Musique
                            </label>
                        </div>
                    </form>
                    <div className="mt-8 flex flex-row gap-2">
                        <LinkButton
                            linkTo={'/'}
                            buttonText={'Retour vers le menu'}
                            primary={false}
                        />
                        <PrimaryButton buttonText={'Créer la question'} />
                    </div>
                </Card>
            </section>
        </>
    );
}
