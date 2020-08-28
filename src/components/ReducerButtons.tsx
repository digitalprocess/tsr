import React, { useRef, useContext } from 'react'
import { useClickOutside } from './useClickOutside'
import { GlobalContext } from './GlobalContext'

const ReducerButtons = () => {

	const ref = useRef<HTMLDivElement>(null!)

	const context = useContext(GlobalContext)
	const { rValue, turnOn, turnOff } = context

	useClickOutside(ref, () => console.log('clicked outside'))

	return (
		<div ref={ref}>
			<button onClick={turnOn}>Action One</button>
			<button onClick={turnOff}>Action Two</button>
			{/* <button onClick={() => dispatch({ type: 'tow' })}>Action Three</button> */}
			{rValue && <div>Hi!</div>}
		</div>
	)}

export default ReducerButtons
