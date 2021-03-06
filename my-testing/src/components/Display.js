import React from 'react'
import styled from 'styled-components'

export default function Display(props) {
    const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: auto;
    margin: auto;
    height: 10%;
    `
    return (
        <Container>
            <h2>Strikes : {props.strikes}</h2>
            <h2>Balls : {props.balls}</h2>
            <h2>Outs: {props.outs}</h2>
        </Container>
    )
}