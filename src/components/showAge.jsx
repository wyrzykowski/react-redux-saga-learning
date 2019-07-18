import React, { Component } from 'react';
import { connect } from 'react-redux';



class ShowAge extends Component {
    render() {
        return (
            <div>
                <h1>Show Age Component</h1>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        age: state.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({ type: 'AGE_UP' }),
        onAgeDown: () => dispatch({ type: 'AGE_DOWN' })
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ShowAge)
