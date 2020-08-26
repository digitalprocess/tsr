import React, {useState} from 'react'

const Input = () => {
	// const [name, setName] = useState<string>(''); // Explicit Type
	const [name, setName] = useState('') // Type inference
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={ev => setName(ev.target.value)}
			/>
		</div>
	)
}

export default Input
