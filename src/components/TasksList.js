import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

const TasksList = ({ data, changeStatus, tag, title }) => {
	return (
		<List>
			<h2>{title}</h2>
			{data.reverse().map((e, i) => (
				<ListItem button key={i} onClick={() => changeStatus(e.id)}>
					<ListItemText>
						{tag} {e.text}
					</ListItemText>
				</ListItem>
			))}
		</List>
	)
}

export default TasksList
