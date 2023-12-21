import axios from 'axios';
import { useEffect, useState } from 'react';

import Card from '../components/Card';
import LinkButton from '../components/LinkButton';
import NavBar from '../components/NavBar';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { URL_JSON_SERVER } from '../constants';
import { themeToString, typeQuestionToString } from '../helpers/StringHelper';

export default function ModerateQuestion() {
    const [question, setQuestion] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(URL_JSON_SERVER + 'questions');
            let questionToModerate = response.data.find(
                (question) => question.validated === false,
            );

            if (questionToModerate !== undefined) {
                setQuestion(questionToModerate);
            }
        } catch (error) {
            console.error('Error fetch data', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const validateQuestion = async () => {
        try {
            await axios.put(
                URL_JSON_SERVER + 'questions/' + question.id,
                {
                    id: question.id,
                    type: question.type,
                    theme: question.theme,
                    name: question.name,
                    statement: question.statement,
                    poster_path: question.poster_path,
                    validated: true,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
        } catch (error) {
            console.error('Error updating data', error);
        }

        window.location.replace(`/moderate-question`);
    };

    const deleteQuestion = async () => {
        try {
            await axios.delete(URL_JSON_SERVER + 'questions/' + question.id, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error updating data', error);
        }

        window.location.replace(`/moderate-question`);
    };

    return (
        <>
            <NavBar />
            <section
                id="moderate-question"
                className="flex flex-col items-center justify-center"
            >
                <Card>
                    <h2 className="text-yellow-500">Modérer une question</h2>
                    {question !== null ? (
                        <>
                            <div className="gap-5- flex flex-col items-center">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${question.poster_path}`}
                                    className="mt-5 h-52"
                                    alt={`poster-${question.name}`}
                                />
                                <h3 className="pt-5 font-bold">
                                    Thème de la question
                                </h3>
                                <div>{themeToString(question.theme)}</div>
                                <h3 className="pt-5 font-bold">
                                    Type de la question
                                </h3>
                                <div>{typeQuestionToString(question.type)}</div>

                                <h3 className="pt-5 font-bold">
                                    Nom de l&apos;oeuvre
                                </h3>
                                <div>{question.name}</div>
                                <h3 className="pt-5 font-bold">
                                    Énoncé de la question
                                </h3>
                                <div>{question.statement}</div>
                            </div>
                            <div className="mt-8 flex flex-row flex-wrap justify-center gap-2">
                                <LinkButton
                                    linkTo={'/'}
                                    buttonText={'Retour'}
                                    primary={false}
                                />
                                <SecondaryButton
                                    buttonText={'Supprimer'}
                                    onClick={deleteQuestion}
                                />
                                <PrimaryButton
                                    buttonText={'Valider'}
                                    onClick={validateQuestion}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="my-5 italic">
                                Pas de question à modérer
                            </div>
                            <LinkButton
                                linkTo={'/'}
                                buttonText={'Retour'}
                                primary={false}
                            />
                        </>
                    )}
                </Card>
            </section>
        </>
    );
}
