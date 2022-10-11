import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Home = () => {
    const loaderData = useLoaderData();
    const quizTopics = loaderData.data;

    return (
        <div>
            <h1 className='text-3xl md:text-6xl font-extrabold text-center'>It matters
                <span className='text-error font-extrabold'> how you ask</span></h1>
            <p className='font-light lg:font-bold m-2 text-center'>Assessment, instruction, and practice that motivate every student to mastery</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 w-10/12 gap-5 my-10 mx-auto'>
                {
                    quizTopics.map(topic => <Topic key={topic.id} topic={topic} />)
                }
            </div>
        </div>
    );
};

export default Home;