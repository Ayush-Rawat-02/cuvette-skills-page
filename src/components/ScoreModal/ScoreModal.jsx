import './ScoreModal.css'
import { FiArrowRight } from "react-icons/fi";

function ScoreModal({setToggleScore}) {
  return (
    <div className="score-modal" onClick={()=>setToggleScore(false)}>
    <div className=' modal flex-col' onClick={(e)=>e.stopPropagation()}>
        <div className="flex-row">
            <h1>Update Scores</h1>
            <img src="HTML.png" alt="HTML" />
        </div>
        <div className="flex-col input-area">
            <div className="flex-row">
                <div className="flex-row">
                    <div className="disc">
                        1
                    </div>
                    <p className='text-secondary'>Update your <strong>rank</strong></p>
                </div>
                <input type="number" />
            </div>
            <div className="flex-row">
                <div className="flex-row">
                    <div className="disc">
                        2
                    </div>
                    <p className='text-secondary'>Update your <strong>percentile</strong></p>
                </div>
                <input type="number" />
            </div>
            <div className="flex-row">
                <div className="flex-row">
                    <div className="disc">
                        3
                    </div>
                    <p className='text-secondary'>Update your <strong>current score(out of 15)</strong></p>
                </div>
                <input type="number" />
            </div>
        </div>
        <div className="flex-row form-buttons">
            <button id='cancel-btn' onClick={()=>setToggleScore(false)}>
                Cancel
            </button>
            <button id='save-btn'>
                Save
                <FiArrowRight/>
            </button>
        </div>
    </div>
    </div>
  )
}

export default ScoreModal