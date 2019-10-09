import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

const TasksList = ({ data }) => {
	return (
		<List>
			{data.reverse().map((e, i) => (
				<ListItem button key={i}>
					<ListItemText>{e}</ListItemText>
				</ListItem>
			))}
		</List>
	)
}

export default TasksList
