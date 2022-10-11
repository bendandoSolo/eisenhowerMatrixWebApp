import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm} from 'react-hook-form';
import Button from '@mui/material/Button';

import useCreateTodo from '../hooks/useCreateTodo';
import { useQueryClient } from '@tanstack/react-query';

const AddTodoForm = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	 } = useForm();

	 const {isLoading, isError, isSuccess, mutate} = useCreateTodo();
	 const queryClient = useQueryClient();

	 const onSubmit = async (data: any) => {
		mutate(data);
		//queryClient.invalidateQueries(["useTodos"]);
		queryClient.invalidateQueries();//invalidate all queries
	 }

	return (
		<div className='p-24'>
			<form onSubmit={handleSubmit(data => onSubmit(data))}>
				<TextField label="Name" variant="outlined" {...register('name')}/>
				{errors.name && <p>Name is required.</p>}
				<Button variant="contained" color="success" type='submit'>Add Todo</Button>
			</form>
		</div>
	);
};

export default AddTodoForm;