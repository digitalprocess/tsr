import React from 'react'

type Props = {
	title: string // Required
	isActive?: boolean // Optional
	type3?: Array<string>
	type4?: string[] // this is the same Type as type3
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
