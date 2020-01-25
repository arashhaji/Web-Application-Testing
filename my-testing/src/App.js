import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display'
import styled from 'styled-components'

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  const [outs,setOuts] = useState(0)

  const Container = styled.div`
    background-color: crimson;
    color: blue;
    border: 3px solid black
    
  `

  const strike = () => {
    if (strikes === 3) {
      setStrikes(0)
      setBalls(0)
      setOuts(outs + 1)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
      setOuts(outs + 1)
    } else {
      setBalls(balls + 1)
    }
  }
  const foul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const out = () => {
    if (outs === 3) {
      setBalls(0) 
      setStrikes(0) 
      setOuts(0)
    } else {
      setOuts(strikes + 1)
    }
  }
  const hit = () => {
    setStrikes(0)
    setBalls(0)
    setOuts(0)
  }
  return (
    <Container className='container'>
      <Display strikes={strikes} balls={balls} outs={outs}/>
      <Dashboard  ball={ball} strike={strike} foul={foul} hit={hit} out={out}/>
    </Container>
  );
}
export default App;
