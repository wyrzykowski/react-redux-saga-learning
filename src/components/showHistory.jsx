import React, { Component } from 'react'
import { connect } from 'react-redux';

class ShowHistory extends Component {
    render() {
        return (
            <div>
                <h2>History:</h2>
                {this.props.history && this.props.history.map(el => {
                    return <span key={el.age + Math.floor(Math.random() * 100000) + 1}> {el.age}</span>
                })
                }

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

const mapDispatchToProps = () => {
    return {

    }

}



export default connect(mapStateToProps, mapDispatchToProps)(ShowHistory);