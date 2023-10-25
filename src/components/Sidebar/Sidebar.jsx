import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
            <li>
                <div className="flex-row">
                    <img src="Dashboard.png" alt="Dashboard" />
                    <p>Dashboard</p>
                </div>
            </li>
            <li className='active'>
                <div className="flex-row">
                    <img src="Award.png" alt="Test" />
                    <p>Skill Test</p>
                </div>
            </li>
            <li>
                <div className="flex-row">
                    <img src="Calander.png" alt="Internships" />
                    <p>Internships</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar