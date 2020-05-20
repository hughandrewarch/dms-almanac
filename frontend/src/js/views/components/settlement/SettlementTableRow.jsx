import React from 'react';
import * as Props from '../../../props'

export default class SettlementTableRow extends React.PureComponent {

    static propTypes = {
        settlement: Props.SETTLEMENT
    }

    constructor(props) {
        super(props);
        this.clickSettlement = this.clickSettlement.bind(this);
    }

    clickSettlement() {
        const route = "/settlement/:settlementId"
        this.props.history.push(route.replace(":settlementId", this.props.settlement.id))
    }

    render() {
        const { settlement } = this.props

        return (
            <div key={settlement.id} onClick={this.clickSettlement}>
                <div>{settlement.name}</div>
            </div>
        );
    }
}
