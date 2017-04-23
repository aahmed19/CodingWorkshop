import React from 'react'
import { mapStateToProps } from './State/StateMethods'
import { connect } from 'react-redux'
import HelloWorld from './HelloWorld'
import Flexbox from 'flexbox-react'
import RaisedButton from 'material-ui/RaisedButton'

import { map } from 'ramda'

const style = {
  margin: 12,
};


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      'test': 'hello',
    }
    // this.test = this.test.bind(this)
  }

  test = () => {
    console.log('receiving')
    map( (x) => x * 2, [ 1, 2, 3, 4 ])
  }

  testfunc = () => {
    this.setState({'test':'hello BITCHES'})
  } 

  // function testfunc() {
  //   this.setState({'test':'hello2'})
  // } // this can't access state!! IDK WHY but the thing above can

  componentWillMount(){

  }

  componentWillReceiveProps(nextProps){

  }

  componentWillUnmount(){

  }

  //click on the flat button, onClick
  //this.setState({ 'test': 'hello2' })
  //current state into HelloWorld component

  render() {
  console.log(this.state)
    return (
      <Flexbox flexDirection='column'>
      <RaisedButton label="WE LITTTTTTT" secondary={true} style={style} onTouchTap={this.testfunc}/>
        <HelloWorld test={this.state.test} func={this.test}/>
      </Flexbox>
    )
  }
}

export default connect(mapStateToProps)(App)

// redux state management
