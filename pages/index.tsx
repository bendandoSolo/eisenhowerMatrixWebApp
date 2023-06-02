import type { NextPage } from 'next';
import Head from 'next/head';

import APITests from '../components/APITests';
import TodoList from '../components/Lists/TodoList';
import DoneList from '../components/Lists/DoneList';
import { Grid } from '@mui/material'; // best to use css grid

import EissenhowerMatrix from '../components/EissenhowerMatrix';
import MyDocument from '../components/Printing/Basic';

const Home: NextPage = () => {
	return (
		<>
			<div className='text-center p-40'>
				<Head>
					<title >Eissenhower Matrix App</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div className='flex-center'>
					<h1>The Eisenhower matrix</h1>
				</div>
				<p className='max'>Use our simple Eisenhower Matrix app to help you plan you projects and be more organized</p>
				<h3>Get Started with our free Eisenhower Matrix App</h3>
				<br></br>

				<Grid container spacing={2}>
					<Grid item md={6}>
						<TodoList />
					</Grid>
					<Grid item md={6}>
						<DoneList/>
					</Grid>
				</Grid>
				<EissenhowerMatrix />
				<hr/>
				<APITests />
				<MyDocument />
			</div>
		</>
	)
}

export default Home
