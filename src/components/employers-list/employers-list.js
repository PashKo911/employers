import EmployeesListItem from '../employers-list-item/employers-list-item'
import './employers-list.css'

const EmpoyersList = ({ data }) => {
	return (
		<ul className="app-list list-group">
			{data.map((item, i) => {
				return <EmployeesListItem key={i} {...item} />
			})}
		</ul>
	)
}

export default EmpoyersList
