import profilePic from '../assets/Maher.jpg'

function Card(params) {
    return(
        <div className="card">
            <img src={profilePic} alt="Profile Picture" />
            <h2>Maher Mohammed</h2>
            <p>MSc Students ISA</p>
        </div>
    )
}

export default Card