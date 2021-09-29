import React, { Component } from 'react'
import Counter from './counter'
import Button from '@mui/material/Button'

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onDecrement, onReset } = this.props

    return (
      <React.Fragment>
        <Button variant="contained" onClick={onReset}>
          Reset
        </Button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default Counters
