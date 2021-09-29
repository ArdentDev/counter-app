import React, { Component } from 'react'
import NavBar from './components/navbar'
import './App.css'
import Counters from './components/counters'

class App extends Component {
  state = {
    totalCounters: 10,
    counters: [
      {id: 1, value: 1},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4}     
    ]
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter( counter => counter.id !== counterId )
    this.setState({ counters })
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    const totalCounters = this.state.totalCounters + 1
    this.setState({ counters, totalCounters })
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    if (counters[index].value<=0) return
    counters[index].value--
    const totalCounters = this.state.totalCounters - 1
    this.setState({ counters, totalCounters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => { counter.value = 0; return counter })
    const totalCounters = 0
    this.setState({ counters, totalCounters })
  }

  render () {
    return (
      <React.Fragment>
        <NavBar totalCounters = { this.state.totalCounters } />
        <Counters 
          counters = { this.state.counters } 
          onDelete = { this.handleDelete }
          onIncrement = { this.handleIncrement }
          onDecrement = { this.handleDecrement }
          onReset = { this.handleReset }
        />
      </React.Fragment>
    )
  }
}

export default App
