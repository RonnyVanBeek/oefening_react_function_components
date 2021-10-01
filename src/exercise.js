const Exercise = (props) => {

    const style = {
        boxShadow: "7px 2px 8px 1px rgba(18,89,46,0.67)",
        background: "#EEEEEE",
        minHeight: "7em",
        padding: ".5em",
        margin: "1.5em .5em",
    };

    return <div style={style}>
        <ExerciseTitle title={props.title}/>
        {props.children}
    </div>
}

const ExerciseTitle = (props) => {
    const style = {
        fontFamily: "Lucida Sans, Monaco, monospace",
        fontSize: "3rem",
    letterSpacing: "3px",
    color: "#3A5D9B",
    fontWeight: 300,
    fontStyle: "oblique",
    lineHeight: 1.2,
}

    return <div style={style}>
        {props.title}
    </div>


}

export default Exercise;