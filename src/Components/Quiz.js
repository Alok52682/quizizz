import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Question from './Question';

const Quiz = () => {

    const [correctAnswer, setCorrectAnswer] = useState(0);

    const loaderData = useLoaderData();
    const questions = loaderData.data.questions;


    return (
        <div>
            <h1 className='text-center text-error text-3xl md:text-5xl font-bold md:font-extrabold my-8 underline'>Quiz of {loaderData.data.name}</h1>
            <span className='px-10 py-5 bg-red-50 md:text-2xl sticky top-16 md:top-44 rounded-r-lg'>Correct : {correctAnswer}</span>
            <div className='text-center'>
                {
                    questions ? questions.map((question, index) => <Question key={question.id} index={index} ques={question} setScore={setCorrectAnswer} />) : <ErrorPage />
                }
            </div>

        </div>
    );
};

export default Quiz;