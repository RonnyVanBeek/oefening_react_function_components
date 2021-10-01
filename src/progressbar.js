const ProgressBar = (props) => {

    return <svg height="80" width="33%">
                <Label percentage={props.percentage} color={props.color}/>
                <Bar percentage={props.percentage} color={props.color}/>
            </svg>

}

const Label = (props) => {
    return <text x='180' y='25' fill={props.color} style={{fontFamily: 'Verdana',fontSize: '25px',fontWeight: 'bold'}}>{props.percentage}%</text>
}

const Bar = (props) => {
    let progress = "M20 55 l"+(props.percentage/100)*360 + " 0";

    return  (
                <g fill="none" stroke="lightgrey" strokeWidth="25">
                    <path strokeLinecap="round" d="M20 55 l360 0" />
                </g>,
                <g fill="none" stroke={props.color} strokeWidth="25">
                    <path strokeLinecap="round" d={progress} />
                </g>
)

}

const ExerciseThree = (props) => {
    return <div>
                <ProgressBar percentage={75} color={"#ce4b99"}/>
                <ProgressBar percentage={15} color={"#ce1b29"}/>
                <ProgressBar percentage={65} color={"#125b69"}/>
            </div>
}

export default ExerciseThree;