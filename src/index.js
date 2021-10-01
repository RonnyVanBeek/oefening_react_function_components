import ReactDOM from 'react-dom';
import Exercise from './exercise';
import ExerciseOne from './multiplication_table_klas';
import ExerciseTwo from "./rater";
import './css/all.css';
import ExerciseThree from "./progressbar";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <div>
        <Exercise title={"Oefening 1: Maaltafel"}>
                <ExerciseOne />
        </Exercise>
        <Exercise title={"Oefening 2: Rater"}>
                <ExerciseTwo />
        </Exercise>
        <Exercise title={"Oefening 3: Progress Bar"}>
                <ExerciseThree/>
        </Exercise>
        <Exercise title={"Oefening 4: Comment Card"}/>
        <Exercise title={"Oefening 5: Getallen kader"}/>
    </div>,
    document.getElementById('root')
)