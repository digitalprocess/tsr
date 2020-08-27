import React, { useState, useRef } from 'react'

const Input = () => {
	// const [name, setName] = useState<string>(''); // Explicit Type
	const [name, setName] = useState('') // Type inference
	const ref = useRef<HTMLInputElement>(null!)

	if (ref && ref.current) {
		console.log(ref.current.value)
	}

	return (
		<div>
			<input
				ref={ref}
				type="text"
				value={name}
				onChange={ev => setName(ev.target.value)}
			/>
		</div>
	)
}

export default Input
