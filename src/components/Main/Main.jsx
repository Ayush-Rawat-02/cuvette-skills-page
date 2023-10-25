import './Main.css'
import Graph from '../Graph/Graph'

function Main({setToggleScore}) {
  return (
    <div className='main'>
        <p id='skill-tag' className='text-secondary'>Skill Test</p>

        {/* Test Details */}
        <div className="box flex-row test">
            <div className="flex-row test-about">
                <img id='html' src="HTML.png" alt="HTML" />
                <div className="flex-col">
                    <h4>Hypertext Markup Language</h4>
                    <p className='text-secondary'>Questions: 08 | Duration: 15mins | Submitted on: 5 June 2021</p>
                </div>
            </div>
            <button id='btn-update' onClick={()=>setToggleScore(true)}>
                Update
            </button>
        </div>
        {/* Stastics */}
        <div className="box flex-col statistics">
            <h3 className='text-primary'>Quick Statistics</h3>
            <div className="flex-row">
                <div className="flex-row stat-group">
                    <div className="group-icon">
                        <img src="Prize.png" alt="Prize" />
                    </div>
                    <div className="flex-col">
                        <h2 className='text-primary'>12,890</h2>
                        <p>YOUR RANK</p>
                    </div>
                </div>
                <div className="v-bar"></div>
                <div className="flex-row stat-group">
                    <div className="group-icon">
                        <img src="Calander.png" alt="Percentile" />
                    </div>
                    <div className="flex-col">
                        <h2 className='text-primary'>37%</h2>
                        <p>PERCENTILE</p>
                    </div>
                </div>
                <div className="v-bar"></div>
                <div className="flex-row stat-group">
                    <div className="group-icon">
                        <img src="Check.png" alt="Correct" />
                    </div>
                    <div className="flex-col">
                        <h2 className='text-primary'>07/15</h2>
                        <p>CORRECT ANSWERS</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Comparision Graph */}
        <div className="box flex-col graph">
            <div className="flex-row">
                <div className="flex-col">
                    <h3 className='text-primary'>Comparision Graph</h3>
                    <p className='text-secondary'><strong>You scored 37% percentile</strong> which is lower than the average percentile 72% of all the engineers who took this assessment</p>
                </div>
                <div className="group-icon">
                    <img src="Graph.png" alt="Graph" />
                </div>
            </div>
            <Graph/>
        </div>
    </div>
  )
}

export default Main