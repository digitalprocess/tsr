import React, { useReducer, useRef, useContext } from 'react'
import { useClickOutside } from './useClickOutside'
import { GlobalContext } from './GlobalContext'

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

	const context = useContext(GlobalContext)
	const { rValue } = context

	useClickOutside(ref, () => console.log('clicked outside'))

	return (
		<div ref={ref}>
			<button onClick={() => dispatch({ type: 'one' })}>Action One</button>
			<button onClick={() => dispatch({ type: 'two' })}>Action Two</button>
			{/* <button onClick={() => dispatch({ type: 'tow' })}>Action Three</button> */}
			{rValue && <div>Hi!</div>}
		</div>
	)}

export default ReducerButtons
