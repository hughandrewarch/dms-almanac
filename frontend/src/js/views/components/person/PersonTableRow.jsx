import React from 'react';
import * as Props from '../../../props'

export default class PersonTableRow extends React.PureComponent {

    static propTypes = {
        person: Props.PERSON
    }

    render() {
        const { person } = this.props

        return (
            <div key={person.id}>
                <div>{person.name}</div>
            </div>
        );
    }
}
