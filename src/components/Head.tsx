import React from 'react'

type Props = {
	title: string,
	isActive?: boolean
}

const Head = ({ title, isActive = false }: Props) => (
	<div>
		<h1>{title}</h1>
		{isActive &&
			<h2>Active</h2>
		}
	</div>
)

export default Head
