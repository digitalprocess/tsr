import React from 'react'
import { GlobalContext, initialValues }  from './components/GlobalContext'
// import logo from './logo.svg'
import './App.css'

import Head from './components/Head'
import Input from './components/Input'
import Button from './components/Button'
import ReducerButtons from './components/ReducerButtons'

function App() {
	return (
		<GlobalContext.Provider value={initialValues}>
			<div className="App">
				<Head title="Hello" isActive={true} />
				<Button onClick={e => {
					e.preventDefault()
					console.log(e)
				}}>
					Hello FC
				</Button>
				<Input />
				<ReducerButtons />
			</div>
		</GlobalContext.Provider>
	)
}

export default App
