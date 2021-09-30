import React, { Component, Fragment } from 'react'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { deepPurple } from '@mui/material/colors'

class Counter extends Component {
  render() {
    return (
      <Fragment>
        <Stack spacing={2} direction="row">
          <Avatar sx={{ bgcolor: deepPurple[500] }}>
            {this.formatCount()}
          </Avatar>
          <Box sx={{ width: '10%' }}>
            <Typography variant="button" display="block" gutterBottom>
              {this.props.counter.name}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </Button>
        </Stack>
      </Fragment>
    )
  }

  formatCount() {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
}

export default Counter
