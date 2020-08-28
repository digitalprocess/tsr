import React, { Component } from 'react'

type Props = {
	title: string
}

type State = {
	status: false
}

export default class BigC extends Component<Props, State> {
	render() {
		const { title } = this.props
		return (
			<div>
				<h1>{title}</h1>
			</div>
		)
	}
}
