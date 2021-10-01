//import ExerciseOne from './exercise';

const ExerciseOne = (props) => {

    return  <div style={exerciseStyle}>
                <div style={tableStyle}>
                    <div style={headerStyle}>
                        <Header table={props.table}/>
                    </div>
                    <div style={rowStyle}>
                        <Row style={rowStyle} factor1={props.factor1} factor2={props.factor2}/>
                    </div>
                </div>
            </div>
            /*<div style={exerciseStyle}>
                <div style={tableStyle}>
                    <div style={headerStyle}>
                        <Header table={props.table}/>
                    </div>
                    <div style={rowStyle}>
                        <Row style={rowStyle} factor1={props.factor1} table={props.table}/>
                    </div>
                </div>
            </div>*/
};

const Header = (props) => {
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
    return translate[parseInt(props.table)];
};

const Row = (props) => {
    const items = [];

    for (let i = 1; i<props.factor1;i++){
        let result = i*props.factor1;
        items.push(<p>{i} x {props.factor2} = {result}</p>);
    }
    console.log(items);
    //let response = '';
    // for(let i=0;i=props.factor1;i++){
    //     response += <div>{i} x {props.factor2} = {i * props.factor2}</div>
    // }
    return items;
};


// Opmaak voor de component Header
const headerStyle = {
    fontSize : 50,
    color: "#e65100",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ff9800"
};

// Opmaak voor de component Row
const rowStyle = {
    fontSize : 20,
    color: "#455a64"
};

// Opmaak voor de component MultiplicationTable
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

// Opmaak voor de component ExerciseOne
const exerciseStyle = {
    display: "inline-block"
};

//export default ExerciseOne;