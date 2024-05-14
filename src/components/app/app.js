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
					rise: true,
					id: 1,
				},
				{
					name: 'Ira',
					salary: 3000,
					increase: true,
					rise: false,
					id: 2,
				},
				{
					name: 'Svyatoslav',
					salary: 5000,
					increase: false,
					rise: false,
					id: 3,
				},
			],
			term: '',
			filter: 'all',
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
					rise: false,
					id: uuidv4(),
				},
			],
		}))
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			}),
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items
		}

		return items.filter((item) => {
			// return item.name.indexOf(term) > -1
			return item.name.includes(term)
		})
	}

	onUpdateSearch = (term) => {
		this.setState({
			term,
		})
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter((item) => item.rise)
			case 'moreThen1000':
				return items.filter((item) => item.salary > 1000)
			default:
				return items
		}
	}

	onFilterSelect = (filter) => {
		this.setState({ filter })
	}

	onSalaryChange = (id, salary) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, salary: salary }
				} else return item
			}),
		}))
	}

	render() {
		const { data, term, filter } = this.state
		const employees = this.state.data.length
		const increasedCount = this.state.data.filter((elem) => elem.increase).length
		const visibleData = this.filterPost(this.searchEmp(data, term), filter)

		return (
			<div className="app">
				<AppInfo employees={employees} increasedCount={increasedCount} />
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>

				<EmpoyersList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onSalaryChange={this.onSalaryChange}
				/>
				<EmployersAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
