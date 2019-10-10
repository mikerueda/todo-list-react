import React, { Component } from 'react'
import { CssBaseline, Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import nextId from 'react-id-generator'
import TasksList from './components/TasksList'

class App extends Component {
	state = {
		task: '',
		todo: []
	}

	fieldHandler = (e) => {
		this.setState({ task: e.target.value })
	}

	enterHandler = (e) => {
		if (e.key === 'Enter') {
			this.saveTask(e.target.name)
		}
	}

	saveTask = (field) => {
		let value = this.state[field]
		let newTodo = [ ...this.state.todo, { id: nextId('task-'), text: value, status: 'pending' } ]
		this.setState({ [field]: '', todo: newTodo })
	}

	changeStatus = (id) => {
		let newTodo = [ ...this.state.todo ]
		let task = newTodo.find((e) => e.id === id)
		task.status = task.status === 'pending' ? 'completed' : 'pending'
		this.setState({ todo: newTodo })
	}

	render() {
		const completed = [ ...this.state.todo.filter((e) => e.status === 'completed') ]
		const pending = [ ...this.state.todo.filter((e) => e.status === 'pending') ]
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
				<TasksList title={'pendientes'} tag={'( )'} data={pending} changeStatus={this.changeStatus} />
				<TasksList title={'completadas'} tag={'(x)'} data={completed} changeStatus={this.changeStatus} />
			</Container>
		)
	}
}

export default App
