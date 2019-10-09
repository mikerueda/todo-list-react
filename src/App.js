import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import TasksList from './components/TasksList'

class App extends React.Component {
	state = {
		task: '',
		todo: []
	}

	fieldHandler(e) {
		this.setState({ task: e.target.value })
	}

	enterHandler(e) {
		if (e.key === 'Enter') {
			let value = this.state[e.target.name]
			let newTodo = [ ...this.state.todo, value ]
			this.setState({ task: '', todo: newTodo })
		}
	}

	render() {
		return (
			<Container>
				<CssBaseline />
				<h1>Todo</h1>
				<TextField
					value={this.state.task}
					label={'Ingrese tarea'}
					name={'task'}
					onChange={(e) => this.fieldHandler(e)}
					onKeyPress={(e) => this.enterHandler(e)}
					variant="outlined"
				/>
				<TasksList data={[ ...this.state.todo ]} />
			</Container>
		)
	}
}

export default App
