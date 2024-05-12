import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmpoyersList from '../employers-list/employers-list'
import SearchPanel from '../search-panel/search-panel'
import EmployersAddForm from '../employers-add-form/employers-add-form'

import './app.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: [
				{
					name: 'Pasha',
					salary: 800,
					increase: false,
					id: 1,
				},
				{
					name: 'Ira',
					salary: 3000,
					increase: true,
					id: 2,
				},
				{
					name: 'Svyatoslav',
					salary: 5000,
					increase: false,
					id: 3,
				},
			],
		}
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((element) => element.id !== id),
			}
		})
	}

	addItem = (name, salary) => {
		this.setState(({ data }) => ({
			data: [
				...data,
				{
					name,
					salary,
					increase: false,
					id: uuidv4(),
				},
			],
		}))
	}

	onToggleIncrease = (id) => {
		console.log(`Increase this ${id}`)
	}
	onToggleRice = (id) => {
		console.log(`Rice this ${id}`)
	}

	render() {
		const { data } = this.state

		return (
			<div className="app">
				<AppInfo />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmpoyersList
					data={data}
					onDelete={this.deleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRice={this.onToggleRice}
				/>
				<EmployersAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
