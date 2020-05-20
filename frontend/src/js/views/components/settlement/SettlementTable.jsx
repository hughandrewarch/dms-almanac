import React from 'react';
import SettlementTableRow from './SettlementTableRow';
import * as Props from '../../../props'

export default class SettlementTable extends React.PureComponent {

    static propTypes = {
        settlements: Props.SETTLEMENTS
    }

    render() {
        const { settlements, history } = this.props

        return (
            <div>
                {settlements.map((settlement) => (
                    <SettlementTableRow key={settlement.id} settlement={settlement} history={history} />
                ))}
            </div>
        );
    }
}
