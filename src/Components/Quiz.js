import { useLoaderData } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Question from './Question';

const Quiz = () => {

    const loaderData = useLoaderData();
    const questions = loaderData.data.questions;


    return (
        <div>
            <h1 className='text-center text-error text-3xl md:text-5xl font-bold md:font-extrabold my-8 underline'>Quiz of {loaderData.data.name}</h1>
            <div className='text-center'>
                {
                    questions ? questions.map(question => <Question key={question.id} ques={question} />) : <ErrorPage></ErrorPage>
                }
            </div>

        </div>
    );
};

export default Quiz;