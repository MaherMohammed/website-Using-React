import profilePic from '../assets/Maher.jpg'

function Card(params) {
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>Maher Mohammed</h2>
            <p className='card-text'>MSc Students ISA</p>
        </div>
    )
}

export default Card