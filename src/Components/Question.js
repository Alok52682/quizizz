import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from './Option';

const Question = ({ ques }) => {
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
                <ToastContainer />
            </ol>
        </div>
    );
};

export default Question;