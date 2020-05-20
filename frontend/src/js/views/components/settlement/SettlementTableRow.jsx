import React from 'react';
import * as Props from '../../../props'

export default class SettlementTableRow extends React.PureComponent {

    static propTypes = {
        settlement: Props.SETTLEMENT
    }

    render() {
        const { settlement } = this.props

        return (
            <div key={settlement.id}>
                <div>{settlement.name}</div>
            </div>
        );
    }
}
