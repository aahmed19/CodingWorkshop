import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class HelloWorld extends React.Component {

  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      'test': props.test, //received app.js
      'func': props.func, //received from app.js
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('Test is receiving', nextProps)
    this.setState(nextProps)
    console.log(this.state.test)
  }

  render() {
    return (
      <div>
        <RaisedButton label="WE LITTTTTTT" secondary={true} onTouchTap={this.state.func}/>
        <h1>IS DIS WORKING</h1>
        { this.state.test }
      </div>
    )
  }
}

export default HelloWorld
