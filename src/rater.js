
const ExerciseTwo = (props) => {
    const exerciseStyle = {
        display: "flex"
    }

    return <div style={exerciseStyle}>
        <Rater rating={7} max={8}></Rater>
        <Rater rating={1} max={5}></Rater>
        <Rater rating={3} max={3}></Rater>
    </div>
}

const Rater = (props) => {
    const raterStyle = {
        textAlign: "center",
        padding: "2em",
        borderRadius: 2,
        backgroundColor: "#E2E2E2",
        filter: "drop-shadow(0px 0px 5px #666)",
        margin: "2em",
        width: "fit-content"
    };

    let stars = [];

    for(let i=1;i<=props.rating;i++){
        stars.push(<Star full={true}/>)
    }

    for(let i=1;i<=props.max-props.rating;i++){
        stars.push(<Star full={false}/>)
    }

    return <div style={raterStyle}>
        <div><Label score={props.rating / props.max}/></div>
        <div>{stars}</div>
    </div>

}

const Star = (props) => {
    if(props.full === true){
        return <i className="fas fa-star"></i>
    } else {
        return <i className="far fa-star"></i>
    }
}

const Label = (props) => {
    if(props.score<0.1){
        return "Disaster"
    } else
        if(props.score<=0.3){
            return "Insufficient"
        } else
            if (props.score<=0.5){
                return "Sufficient"
            } else
                if (props.score<=0.6){
                    return "Average"
                } else
                    if (props.score<=0.8){
                        return "Good"
                    } else
                        if (props.score<=0.9){
                            return "Very good"
                        } else {
                            return "Excellent"
                        }
}

export default ExerciseTwo