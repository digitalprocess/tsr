import React, { useRef, useContext } from 'react'
import { useClickOutside } from './useClickOutside'
import { GlobalContext } from './GlobalContext'
import styled from 'styled-components'

const ReducerButtons = () => {

	const ref = useRef<HTMLDivElement>(null!)

	const context = useContext(GlobalContext)
	const { rValue, turnOn, turnOff } = context

	useClickOutside(ref, () => console.log('clicked outside'))

	return (
		<Wrapper ref={ref}>
			<button onClick={turnOn}>Action One</button>
			<button onClick={turnOff}>Action Two</button>
			{/* <button onClick={() => dispatch({ type: 'tow' })}>Action Three</button> */}
			{rValue && <div>Hi!</div>}
		</Wrapper>
	)}

export default ReducerButtons

const Wrapper = styled.div`
	background: lightgray
`
