import React, { useReducer, useRef } from 'react'
import { useClickOutside } from './useClickOutside'

const initialState = { rValue: true }

type State = {
	rValue: boolean
}

type Action = {
	type: 'one' | 'two'
}

// type Action =
// 	| { type: 'one' }
// 	| { type: 'two' }

function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'one':
			return { rValue: true }
		case 'two':
			return { rValue: false }
		default:
			return state
	}
}

const ReducerButtons = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const ref = useRef<HTMLDivElement>(null!)
	useClickOutside(ref, () => console.log('clicked outside'))

	return (
		<div ref={ref}>
			<button onClick={() => dispatch({ type: 'one' })}>Action One</button>
			<button onClick={() => dispatch({ type: 'two' })}>Action Two</button>
			{/* <button onClick={() => dispatch({ type: 'tow' })}>Action Three</button> */}
			{state && state.rValue && <div>Hi!</div>}
		</div>
	) }

export default ReducerButtons
