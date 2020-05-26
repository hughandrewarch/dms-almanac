import React from "react"
import { connect } from 'react-redux';
import SettlementCreateFormFields from "./SettlementCreateFormFields"
import PropTypes from "prop-types"
import SettlementApi from "../../../api/SettlementApi"
import SettlementActions from "js/actions/SettlementActions"

//TODO is there any real reason for the separation between create form and form fields
// if form fields are not reusable
const mapDispatchToProps = (dispatch) => {
    return {
        create: (settlement) => {
            return dispatch(SettlementActions.create(settlement))
        }
    }
}

//TODO add validation
class SettlementCreateForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      population: 0,
      description: '',
      type: 'TOWN'
    }
  }

  handleChange = (values) => {
    this.setState({
      name: values.name,
      population: values.population,
      description: values.description,
    })
  }

  handleSubmit = () => {
    const { create, onSubmit } = this.props

    create(this.state)
        .then(onSubmit)
  }

  handleCancel = () => {
    this.props.onCancel()
  }

  //Todo pass fields as props, don't save them as state
  render() {
    return (
      <div>
        <SettlementCreateFormFields onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SettlementCreateForm);
