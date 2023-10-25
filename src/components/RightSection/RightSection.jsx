import ProgressBar from '../ProgressBar/ProgressBar'
import './RightSection.css'

function RightSection() {
  return (
    <div className='right-section'>
        
        {/* Syallabus wise analysis */}
        <div className="box flex-col syllabus-analysis">
            <h4 className='text-primary'>Syllabus wise Analysis</h4>
            <div className="flex-col syllabus-analysis-row">
                <p className="text-secondary">HTML Tools, Forms, History</p>
                <ProgressBar color={"#438AF6"} bgColor={"#438AF630"} percent={80}/>
            </div>
            <div className="flex-col syllabus-analysis-row">
                <p className="text-secondary">Tags & References in HTML</p>
                <ProgressBar color={"#FF9142"} bgColor={"#FF914230"} percent={60}/>
            </div>
            <div className="flex-col syllabus-analysis-row">
                <p className="text-secondary">Tables & CSS Basics</p>
                <ProgressBar color={"#FB5E5E"} bgColor={"#FB5E5E30"} percent={24}/>
            </div>
            <div className="flex-col syllabus-analysis-row">
                <p className="text-secondary">Tables & CSS Basics</p>
                <ProgressBar color={"#2EC971"} bgColor={"#2EC97130"} percent={96}/>
            </div>
        </div>

        {/* Question analysis */}
        <div className="box flex-col question-analysis">
            <div className="flex-row">
                <h4 className='text-primary'>Question Analysis</h4>
                <h4 className='text-blue'>07/15</h4>
            </div>
            <p className="text-secondary"><strong>You scored 7 questions correct out of 15.</strong> However it still needs some improvements.</p>
            <p>Progress</p>
        </div>
    </div>
  )
}

export default RightSection