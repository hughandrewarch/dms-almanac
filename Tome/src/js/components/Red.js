import React from 'react'

class Red extends React.Component {

  render() {
    const { params } = this.props.match
    return <h1 style={{color: '#993333'}}>Red {params.id}</h1>
  }
}
export default Red