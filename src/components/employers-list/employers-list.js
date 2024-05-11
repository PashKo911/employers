import EmployeesListItem from '../employers-list-item/employers-list-item'
import './employers-list.css'

const EmpoyersList = ({ data }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item
		return <EmployeesListItem key={id} {...itemProps} />
	})
	return <ul className="app-list list-group">{elements}</ul>
}

export default EmpoyersList
