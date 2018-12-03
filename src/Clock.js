import React, {Component} from 'react'

class Clock extends Component {
  constructor(props){
    super(props)
    this.initialState = {date: new Date()}
    this.state = this.initialState
  }
  componentDidMount() {
    this.timer = setInterval(
      ()=> this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  tick(){
    this.setState({date: new Date()})
  }

  render(){
    return (
      <div>
      <h2>Clock</h2>
      <p>US: {this.state.date.toLocaleTimeString()}</p>
      <p>CN: {this.state.date.toLocaleTimeString('zh-Hans-CN')}</p>
      </div>
    )
  }
}
export default Clock
