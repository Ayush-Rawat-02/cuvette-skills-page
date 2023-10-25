import Main from '../main/main'
import RightSection from '../rightSection/rightSection'
import Sidebar from '../sidebar/sidebar'
import './Head.css'

function Head({setToggleScore}) {
  return (
    <div className='head'>
        <Sidebar/>
        <div className="flex-row data-container">
            <Main setToggleScore={setToggleScore}/>
            <RightSection/>
        </div>
    </div>
  )
}

export default Head