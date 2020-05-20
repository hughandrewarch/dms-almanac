import React from 'react';
import PersonTableRow from './PersonTableRow';
import * as Props from '../../../props'

export default class PersonTable extends React.PureComponent {

    static propTypes = {
        people: Props.PEOPLE
    }

    render() {
        const { people, history } = this.props

        return (
            <div>
                {people.map((person) => (
                    <PersonTableRow key={person.id} person={person} history={history} />
                ))}
            </div>
        );
    }
}
