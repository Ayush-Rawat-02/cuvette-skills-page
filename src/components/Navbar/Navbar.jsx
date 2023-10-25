import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="Cuvette.png" alt="Cuvette" />
        </div>
        <div className="user">
            <img src="User.png" alt="User" />
            <p className='text-primary'>Siddarth Jain</p>
        </div>
    </div>
  )
}

export default Navbar