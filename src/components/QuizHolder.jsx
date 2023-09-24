import React, { useState } from 'react';
import { createContext } from 'react';

const QuizContext = createContext();

const quizzes = [
    {
        "question": "I’ve been feeling optimistic about the future",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"
    },
    {
        "question": " I’ve been feeling relaxed",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"
    },
    {
        "question": "I’ve been feeling interested in other people",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"

    },
    {
        "question": "I’ve had energy to spare",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"

    },
    {
        "question": "I’ve been dealing with problems well",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"

    },
    {
        "question": " I’ve been thinking clearly",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"

    },
    {
        "question": "I’ve been feeling good about myself",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"
    },
    {
        "question": "I’ve been feeling close to other people",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"
    },
    {
        "question": "I’ve been feeling confident",
        "a": "None of the time",
        "b": "Rarely",
        "c": "Often",
        "d": "All of the time"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correctA, setCorrectA] = useState(0);
    const [correctB, setCorrectB] = useState(0);
    const [correctC, setCorrectC] = useState(0);
    const [correctD, setCorrectD] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes, correctA,correctB,correctC,correctD,setCorrectA,setCorrectB,setCorrectC,setCorrectD
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };