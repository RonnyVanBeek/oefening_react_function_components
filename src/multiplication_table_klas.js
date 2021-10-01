
const ExerciseOne = (props) => {
    const exerciseStyle = {
        display: "flex"
    };

    return <div style={exerciseStyle}>
        <MultiplicationTable table={7}/>
        <MultiplicationTable table={8}/>
        <MultiplicationTable table={9}/>
    </div>
}

const MultiplicationTable = (props) => {
    const tableStyle = {
        fontFamily : "Comic Sans MS",
        textAlign: "center",
        width: 200,
        padding: 0,
        borderRadius: 20,
        backgroundColor: "#ffe0b2",
        filter: "drop-shadow(0px 0px 5px #666)",
        margin: "2em"
    };

    const rows = [];
    for(let i = 1; i <= 10; i++){
        rows.push(<Row factor1={i} factor2={props.table} />)
    }

    return <div style={tableStyle}>
        <Header table={props.table}/>
        {rows}
    </div>
}

const Header = (props) => {
    // Opmaak voor de component Header
    const headerStyle = {
        fontSize : 50,
        color: "#e65100",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#ff9800"
    };

    const translate = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    }

    return <div  style={headerStyle}>
        {translate[props.table]}
    </div>
}

const Row = (props) => {
    // Opmaak voor de component Row
    const rowStyle = {
        fontSize : 20,
        color: "#455a64"
    };

    return <div  style={rowStyle}>
        {props.factor1} * {props.factor2} = {props.factor1 * props.factor2}
    </div>
};

export default ExerciseOne;