import './ProgressBar.css'

function ProgressBar({percent,color,bgColor}) {
  return (
    <div className="progress-bar flex-row">
        <div className="bar-container" style={{backgroundColor: bgColor}}>
            <div style={{width: `${percent}%`, backgroundColor: color}} className="bar-fill">
            </div>
        </div>
        <p style={{color:color}}>{percent}%</p>
    </div>
  )
}

export default ProgressBar