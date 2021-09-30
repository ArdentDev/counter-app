import React, { Fragment } from 'react'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { deepPurple } from '@mui/material/colors'

const Counter = (props) => {
  const formatCount = () => {
    const { value } = props.counter
    return value === 0 ? 'Zero' : value
  }

  return (
    <Fragment>
      <Stack spacing={2} direction="row">
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{formatCount()}</Avatar>
        <Box sx={{ width: '10%' }}>
          <Typography variant="button" display="block" gutterBottom>
            {props.counter.name}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onIncrement(props.counter)}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.onDecrement(props.counter)}
        >
          -
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => props.onDelete(props.counter.id)}
        >
          Delete
        </Button>
      </Stack>
    </Fragment>
  )
}

export default Counter
