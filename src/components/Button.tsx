import React from 'react'

type Props = {
	// onClick(): string; method returns string
	// onClick(): void; method returns nothing
	// onClick(text: string): void; method with params
	onClick: (text: string) => void // function with params
}

const Button = ({onClick}: Props) => {
	return (
		<div>
			<button onClick={() => onClick('hi')}>Click me</button>
		</div>
	)
}

export default Button
