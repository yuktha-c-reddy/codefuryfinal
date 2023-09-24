import Result from "./result";
import Start from "./start";
import Quiz from "./quiz";
import './wellbeing.css';
import { Link } from 'react-router-dom';
import { QuizContext } from "./QuizHolder";
import { useContext } from "react";
function WellBeing() {
  const { start, exit } = useContext(QuizContext);
  return (
    <>
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Start />
            }
          </>
          : <Result />
      }

      {/* <Result /> */}
      <Link to="/main">
      <a class="fancy" href="#">
      <span class="top-key"></span>
      <span class="text">Main Page</span>
     <span class="bottom-key-1"></span>
     <span class="bottom-key-2"></span>
      </a>
      </Link>
    </>
  );
}

export default WellBeing;
