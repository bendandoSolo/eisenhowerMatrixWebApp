
// import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react'
import { Button, Checkbox, ListItemButton, ListItemText } from '@mui/material'
import { Task as TaskIcon, Delete as DeleteIcon, Edit as EditIcon, LowPriority as LowPriorityIcon } from '@mui/icons-material'
import TodoType from '../../types/Todo'
import useDeleteTodo from '../../hooks/useDeleteTodo'
import useUpdateTodo from '../../hooks/useUpdateTodo'
import useToggle from '../../hooks/useToggle'
import EditTodoForm from './EditTodoForm'
import PrioritySelect from '../SelectBox';

interface TodoItemViewProps {
    item: TodoType
    canEdit: boolean
}

const TodoItemView: React.FC<TodoItemViewProps> = ({ item, canEdit }) => {
    const [selectedTodo, setSelectedTodo] = React.useState<TodoType>()
    const [openEdit, closeEdit, toggleEdit] = useToggle();
    const [openPriority, closePriority, togglePriority] = useToggle();
    const { mutate } = useDeleteTodo()
	const { mutate: update } = useUpdateTodo()
	const deleteTodo = (id: number): void => { mutate(id) }

    const toggleIsComplete = (todo: TodoType): void => {
		todo.completionDate = (todo.completionDate == null) ? new Date() : undefined;
		update(todo);
	}

    const editTodo = (todo: TodoType): void => {
        setSelectedTodo(todo);
        toggleEdit()
        close()
    }

    const editPriority = (todo: TodoType): void => {
        setSelectedTodo(todo);
        togglePriority();
        close();
    }

    return (
        <>
            <ListItemButton>
                <TaskIcon />
                <ListItemText primary={item.name} />
                <ListItemText primary={item.description} />
                <Button color="primary" onClick={() => { deleteTodo(item.id) } }><DeleteIcon /></Button>
                <Button color="primary" onClick={() => { editPriority(item) } }> <LowPriorityIcon /></Button>
                {canEdit && <Button onClick={ () => { editTodo(item) } } ><EditIcon/></Button> }
                <Checkbox checked={!(item.completionDate == null)} onClick={() => { toggleIsComplete(item); } } />
            </ListItemButton>
            {/* // is toggle edit needed? */}
            {openEdit && <EditTodoForm todo={selectedTodo!} toggleEdit={toggleEdit}/>}
            {openPriority && <PrioritySelect todo={selectedTodo!} togglePriority={togglePriority}/>}
        </>
    )
}

export default TodoItemView;