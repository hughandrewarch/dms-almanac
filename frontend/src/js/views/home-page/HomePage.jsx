import React from 'react';
import { connect } from 'react-redux';
import PeopleSelector from "js/selectors/PeopleSelector"
import SettlementsSelector from "js/selectors/SettlementsSelector"
import PersonTable from "js/views/components/person/PersonTable"
import SettlementTable from "js/views/components/settlement/SettlementTable"
import SettlementCreateForm from "js/views/components/settlement/SettlementCreateForm"
import PersonCreateForm from "js/views/components/person/PersonCreateForm"

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
        this.return = this.return.bind(this)
    }

    return() {
         switch(this.state.active) {
            case "CREATE_SETTLEMENT":
                this.setState({active: "SETTLEMENT"})
                break
            case "CREATE_PERSON":
                this.setState({active: "PERSON"})
                break
        }
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

    renderCreateSettlements() {
        return(
            <SettlementCreateForm
                onSubmit={this.return}
                onCancel={this.return}/>
        )
    }

    renderCreatePeople() {
        return(
            <PersonCreateForm
                onSubmit={this.return}
                onCancel={this.return}/>
        )
    }

    renderContent() {
        switch(this.state.active) {
            case "SETTLEMENT":
                return this.renderSettlements()
            case "PERSON":
                return this.renderPeople()
            case "CREATE_SETTLEMENT":
                return this.renderCreateSettlements()
            case "CREATE_PERSON":
                return this.renderCreatePeople()
        }
    }

    switchTab() {
        switch(this.state.active) {
            case "SETTLEMENT":
                this.setState({active: "PERSON"})
                break
            case "PERSON":
                this.setState({active: "CREATE_SETTLEMENT"})
                break
            case "CREATE_SETTLEMENT":
                this.setState({active: "CREATE_PERSON"})
                break
            case "CREATE_PERSON":
                this.setState({active: "SETTLEMENT"})
                break
            default:
                break
        }
    }

    activeTab() {
        switch(this.state.active) {
            case "SETTLEMENT":
                return "Settlements"
            case "PERSON":
                return "People"
            case "CREATE_SETTLEMENT":
                return "Create Settlement"
            case "CREATE_PERSON":
                return "Create Person"
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
