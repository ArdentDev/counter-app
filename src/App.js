import React, { useState, Fragment } from 'react'
import NavBar from './components/navbar'
import './App.css'
import Counters from './components/counters'
import { useQuery, gql } from '@apollo/client'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}

const App = (props) => {
  const [totalCounters, setTotalCounters] = useState(10)
  const [counters, setCounters] = useState([
    { id: 1, name: 'Chardonnay', value: 1 },
    { id: 2, name: 'Riesling', value: 2 },
    { id: 3, name: 'Pinot Grigio', value: 3 },
    { id: 4, name: 'Sauvignon Blanc', value: 4 },
  ])

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId)
    let totalCounters = 0
    for (const counter of newCounters) {
      totalCounters += counter.value
    }
    setCounters(newCounters)
    setTotalCounters(totalCounters)
  }

  const handleIncrement = (counter) => {
    const newCounters = [...counters]
    const index = newCounters.indexOf(counter)
    newCounters[index] = { ...counter }
    newCounters[index].value++
    setCounters(newCounters)
    setTotalCounters(totalCounters + 1)
  }

  const handleDecrement = (counter) => {
    const newCounters = [...counters]
    const index = newCounters.indexOf(counter)
    newCounters[index] = { ...counter }
    if (newCounters[index].value <= 0) return
    newCounters[index].value--
    setCounters(newCounters)
    setTotalCounters(totalCounters - 1)
  }

  const handleReset = () => {
    const newCounters = counters.map((counter) => {
      counter.value = 0
      return counter
    })
    const totalCounters = 0
    setCounters(newCounters)
    setTotalCounters(totalCounters)
  }

  return (
    <Fragment>
      <NavBar totalCounters={this.state.totalCounters} />
      <Counters
        counters={counters}
        onDelete={handleDelete}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onReset={handleReset}
      />
      <ExchangeRates />
    </Fragment>
  )
}

export default App
