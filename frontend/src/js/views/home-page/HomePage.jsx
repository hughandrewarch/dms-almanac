import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {

    settlement1() {
        this.props.history.push('/settlement/1')
    }

    settlement2() {
        this.props.history.push('/settlement/2')
    }

    render() {
        return (
        <div>
            <div>HOME PAGE</div>
            <button onClick={this.settlement1.bind(this)}>Settlement 1</button>
            <button onClick={this.settlement2.bind(this)}>Settlement 2</button>
        </div>
        );
    }
}

//Will be connecting later
export default connect(null, null)(HomePage)
