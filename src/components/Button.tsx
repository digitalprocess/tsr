import React from 'react'

type Props = {
	// Basic Mouse Event
	// onClick: (e: React.MouseEvent) => void;
	// Basic input event
	// onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({onClick}: Props) => {
	return (
		<div>
			<button onClick={onClick}>Click me</button>
		</div>
	)
}

export default Button
