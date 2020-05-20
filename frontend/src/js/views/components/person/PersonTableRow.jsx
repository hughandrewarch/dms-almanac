import React from 'react';
import * as Props from '../../../props'

export default class PersonTableRow extends React.PureComponent {

    static propTypes = {
        person: Props.PERSON
    }

    constructor(props) {
        super(props);
        this.clickPerson = this.clickPerson.bind(this);
    }

    clickPerson() {
        const route = "/person/:personId"
        this.props.history.push(route.replace(":personId", this.props.person.id))
    }

    render() {
        const { person } = this.props

        return (
            <div key={person.id} onClick={this.clickPerson}>
                <div>{person.name}</div>
            </div>
        )
    }
}
