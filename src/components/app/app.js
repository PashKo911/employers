import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmpoyersList from '../employers-list/employers-list'
import SearchPanel from '../search-panel/search-panel'
import EmployersAddForm from '../employers-add-form/employers-add-form'
import './app.css'

function App() {
	const data = [
		{
			name: 'Pasha',
			salary: 800,
			increase: false,
		},
		{
			name: 'Ira',
			salary: 3000,
			increase: true,
		},
		{
			name: 'Svyatoslav',
			salary: 5000,
			increase: false,
		},
	]

	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmpoyersList data={data} />
			<EmployersAddForm />
		</div>
	)
}

export default App
