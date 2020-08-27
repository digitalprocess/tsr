import React, { useState, useRef } from 'react'

const Input = () => {
	// const [name, setName] = useState<string>(''); // Explicit Type
	const [name, setName] = useState('') // Type inference
	const ref = useRef<HTMLInputElement>(null)

	console.log(ref?.current?.value) // Optional Chaining

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
