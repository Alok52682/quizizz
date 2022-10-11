import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from './Option';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Question = ({ ques }) => {
    const [open, setOpen] = useState(false);

    const handleAnswer = (ans) => {
        if (ans === ques.correctAnswer) {
            toast.success("Answer is currect!!");
        }
        else {
            toast.error("Answer is not currect!!");
        }
    }
    return (
        <div className='w-9/12 mx-auto border border-error rounded-lg shadow-lg shadow-slate-300/50 p-5 my-10'>
            <h1 className='text-xl font-semibold'>{ques.question}</h1>

            <ol className='list-decimal'>
                {
                    ques.options.map((ans, index) => <Option key={index} ans={ans} handleAnswer={handleAnswer} />)
                }
                <ToastContainer autoClose={2000} />
            </ol>
            <div onClick={() => setOpen(!open)} title='Show The Currect Answer' className='cursor-pointer'>
                {open ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
            </div>
            {
                open ? <p className='font-bold text-success'>Correct Answer : {ques.correctAnswer}</p> : undefined
            }
        </div>
    );
};

export default Question;