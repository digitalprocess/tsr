import React from 'react'

type Props = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ onClick, children }) => {
	return (
		<div>
			<button onClick={onClick}>{children}</button>
		</div>
	)
}

export default Button
