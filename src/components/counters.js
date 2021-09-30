import React, { Fragment } from 'react'
import Counter from './counter'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const Counters = (props) => {
  const { counters, onDelete, onIncrement, onDecrement, onReset } = props

  return (
    <Fragment>
      <Typography variant="h4" component="div" gutterBottom>
        Popular White Wines
      </Typography>
      <Stack spacing={2}>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </Stack>
      <Button variant="contained" onClick={onReset}>
        Reset
      </Button>
    </Fragment>
  )
}

export default Counters
