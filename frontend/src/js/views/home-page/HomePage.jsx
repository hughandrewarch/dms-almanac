import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {

    test3() {
        this.props.history.push('/settlement/2')
    }

    render() {
        return (
        <div>
            <div>HOME PAGE</div>
            <button onClick={this.test3.bind(this)}>Settlement 2</button>
        </div>
        );
    }
}

//Will be connecting later
export default connect(null, null)(HomePage)
