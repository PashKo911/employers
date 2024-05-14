import { Component } from 'react'

import EmployeesListItem from '../employers-list-item/employers-list-item'
import './employers-list.css'

class EmpoyersList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			salary: '',
		}
	}

	onSalaryChange = (id, e) => {
		this.setState({
			salary: e.target.value,
		})

		this.props.onSalaryChange(id, e.target.value)
	}

	render() {
		const { data, onDelete, onToggleProp } = this.props
		const elements = data.map((item) => {
			const { id, ...itemProps } = item
			return (
				<EmployeesListItem
					key={id}
					{...itemProps}
					onDelete={() => onDelete(id)}
					onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
					onSalaryChange={(e) => this.onSalaryChange(id, e)}
				/>
			)
		})
		return <ul className="app-list list-group">{elements}</ul>
	}
}

export default EmpoyersList
