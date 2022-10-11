import React from 'react';

const Option = ({ ans, handleAnswer }) => {
    return (
        <div onClick={() => handleAnswer(ans)} className=' bg-red-50 rounded-lg cursor-pointer m-5 w-11/12 md:w-9/12 mx-auto p-3 shadow-inner hover:border hover:border-red-400'>
            <li className='text-start w-9/12 mx-auto'>{ans}</li>
        </div>
    );
};

export default Option;