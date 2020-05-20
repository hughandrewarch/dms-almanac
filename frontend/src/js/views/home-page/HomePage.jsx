import React from 'react';
import { connect } from 'react-redux';
import PeopleSelector from "../../selectors/PeopleSelector"
import SettlementsSelector from "../../selectors/SettlementsSelector"
import PersonTable from "../components/person/PersonTable"
import SettlementTable from "../components/settlement/SettlementTable"

const mapStateToProps = (state, props) => {
    return {
        settlements: SettlementsSelector.selectAll(state),
        people: PeopleSelector.selectAll(state)
    }
}

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { active: "SETTLEMENT"}

        this.switchTab = this.switchTab.bind(this)
    }

    renderSettlements() {
        const { settlements, history } = this.props

        if(this.props.settlements) {
            return(
                <SettlementTable settlements={settlements} history={history} />
            )
        }
    }

    renderPeople() {
        const { people, history } = this.props

        if(this.props.people) {
            return(
                <PersonTable people={people} history={history}/>
            )
        }
    }

    renderContent() {
        switch(this.state.active) {
            case "SETTLEMENT":
                return this.renderSettlements()
            case "PERSON":
                return this.renderPeople()
        }
    }

    switchTab() {
        console.log(this.state.active)
        switch(this.state.active) {
            case "SETTLEMENT":
                this.setState({active: "PERSON"})
                break
            case "PERSON":
            default:
                this.setState({active: "SETTLEMENT"})
                break
        }
    }

    activeTab() {
        switch(this.state.active) {
            case "SETTLEMENT":
                return "Settlements"
            case "PERSON":
                return "People"
            default:
                return "OOPS"
        }
    }

    render() {
        return (
            <div>
                <div >HOME PAGE</div>
                <h2 onClick={this.switchTab}>{this.activeTab()}</h2>
                <div>{this.renderContent()}</div>
            </div>)
    }
}

export default connect(mapStateToProps, null)(HomePage)
