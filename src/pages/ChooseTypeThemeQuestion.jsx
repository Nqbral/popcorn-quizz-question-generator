import { useState } from 'react';

import Card from '../components/Card';
import LinkButton from '../components/LinkButton';
import NavBar from '../components/NavBar';

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
                id="choose-type-theme-question"
                className="flex flex-col items-center justify-center"
            >
                <Card>
                    <h2 className="text-yellow-500">
                        Choisissez le thème et le type de question
                    </h2>
                    <form className="flex flex-col items-center">
                        <h3 className="py-3">Thème</h3>
                        <div>
                            <input
                                type="radio"
                                value="anime"
                                id="anime-theme"
                                onChange={handleChangeForm}
                                name="theme"
                                checked={questionForm.theme === 'anime'}
                                className="accent-yellow-500"
                            />
                            <label htmlFor="anime-theme" className="mx-1">
                                Anime
                            </label>

                            <input
                                type="radio"
                                value="movie"
                                id="movie-theme"
                                onChange={handleChangeForm}
                                name="theme"
                                checked={questionForm.theme === 'movie'}
                                className="accent-yellow-500"
                            />
                            <label htmlFor="movie-theme" className="mx-1">
                                Film
                            </label>

                            <input
                                type="radio"
                                value="serie"
                                id="serie-theme"
                                onChange={handleChangeForm}
                                name="theme"
                                checked={questionForm.theme === 'serie'}
                                className="accent-yellow-500"
                            />
                            <label htmlFor="serie-theme" className="mx-1">
                                Séries
                            </label>
                        </div>
                        <h3 className="mt-3">Type</h3>
                        <div>
                            <input
                                type="radio"
                                value="emoji"
                                id="emoji-type"
                                onChange={handleChangeForm}
                                name="type"
                                checked={questionForm.type === 'emoji'}
                                className="accent-yellow-500"
                            />
                            <label htmlFor="emoji-type" className="mx-1">
                                Émojis
                            </label>

                            <input
                                type="radio"
                                value="image"
                                id="image-type"
                                onChange={handleChangeForm}
                                name="type"
                                checked={questionForm.type === 'image'}
                                className="accent-yellow-500"
                                disabled
                            />
                            <label htmlFor="image-type" className="mx-1">
                                Image
                            </label>

                            <input
                                type="radio"
                                value="music"
                                id="music-type"
                                onChange={handleChangeForm}
                                name="type"
                                checked={questionForm.type === 'music'}
                                className="accent-yellow-500"
                                disabled
                            />
                            <label htmlFor="music-type" className="mx-1">
                                Musique
                            </label>
                        </div>
                    </form>
                    <div className="mt-8 flex flex-row gap-2">
                        <LinkButton
                            linkTo={'/'}
                            buttonText={'Retour'}
                            primary={false}
                        />
                        <LinkButton
                            linkTo={`/create-question/${questionForm.theme}/${questionForm.type}`}
                            buttonText={'Suivant'}
                        />
                    </div>
                </Card>
            </section>
        </>
    );
}
