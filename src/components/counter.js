import React, { Component, Fragment } from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { deepPurple } from '@mui/material/colors'

class Counter extends Component {
  render() {
    return (
      <Fragment>
        { this.props.children }
        <Stack spacing={2} direction='row'>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>
            { this.formatCount() }
          </Avatar>
          <Button variant='contained' color='primary'
            onClick = { () => this.props.onIncrement(this.props.counter) } 
          >
            +
          </Button>
          <Button variant='contained' color='secondary'
            onClick = { () => this.props.onDecrement(this.props.counter) } 
          >
            -
          </Button>
          <Button 
            variant='contained' color='warning'
            onClick = { () => this.props.onDelete(this.props.counter.id) } 
          >
            Delete
          </Button>
        </Stack>
      </Fragment>
    )
  }

  formatCount () {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
}

export default Counter