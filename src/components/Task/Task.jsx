import React from 'react'
import css from './Task.module.css'
import { Button, FormCheck } from 'react-bootstrap'

const Task = (props) => {

	let onDeleteTask = () => {
		props.deleteTask(props.i)
	}

	return (
		<div className={css.todo_list}>
			<FormCheck className = { css.check_box } />
			<span className={css.text}>{ props.message }</span>
			<Button size="sm" variant="danger" className = { css.btn } onClick={onDeleteTask}>delete</Button>
		</div>
	)
}

export default Task