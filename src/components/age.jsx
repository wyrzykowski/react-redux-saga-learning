import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';

const AgeButton = styled.a`
padding:10px;
margin:40px;
height:50px;
border:10px;
color:#FFF;
background-color:#999;
user-select: none;
&:hover{
    cursor:pointer;
    background-color:#BBB;
}
`

const AgeDisplayWrapper = styled.div`
margin:1px;
height:50px;
`

class Age extends Component {

    render() {
        return (
            <div className="App">
                <AgeDisplayWrapper >Age: <span>{this.props.age}</span></AgeDisplayWrapper >

                <AgeDisplayWrapper >A: <span>{this.props.a}</span></AgeDisplayWrapper >

                <AgeDisplayWrapper >B: <span>{this.props.b}</span></AgeDisplayWrapper >

                <br />
                <br />
                <br />
                <AgeDisplayWrapper >TIME DATA: <span>{this.props.data && this.props.data.data && this.props.data.data.utc_datetime}</span></AgeDisplayWrapper >

                <AgeButton onClick={this.props.onAgeDown}>Age Down</AgeButton>
                <AgeButton onClick={this.props.onAgeUp}>Age Up</AgeButton>
                <br />
                <br />
                <br />

                <AgeButton onClick={this.props.onAUp}>A Up</AgeButton>
                <AgeButton onClick={this.props.onBUp}>B Up</AgeButton>

            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
        onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
        onAUp: () => dispatch({ type: 'A_UP', valueA: 1 }),
        onBUp: () => dispatch({ type: 'B_UP', valueB: 1 })
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.r.age,
        data: state.r.data,
        a: state.rA.a,
        b: state.rB.b
    }
}
//to niżej zwórci mi hight level component
export default connect(mapStateToProps, mapDispatchToProps)(Age);
