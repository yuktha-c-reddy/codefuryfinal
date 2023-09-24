import React, { useContext } from 'react';
import { QuizContext } from './QuizHolder';

 function Result() {
    const { correctA,correctB,correctC,correctD, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    // const feel=()=>{
    //     let obj={correctA,correctB,correctC,correctD}
	//     let greatest=Object.values(obj).sort().pop()
	//     let key = Object.keys(obj).find( k => obj[k] === greatest )
    //     console.log(key)
    // }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2'>{correctA} are None of the time</h2>
                <h2 className='text-2xl p-3 my-2'>{correctB} are Rarely</h2>
                <h2 className='text-2xl p-3 my-2'>{correctC} are Often</h2>
                <h2 className='text-2xl p-3 my-2'>{correctD} are All of the time</h2>
                <button onClick={playAgain} className='border border-pink-500 p-3 text-2xl rounded'>Play again</button>
            </div>
        </div>
    )
}
export default Result;