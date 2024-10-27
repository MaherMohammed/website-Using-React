import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

// using props types to ensure that key values are in certain types
// like age is number value




Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}


// defaultprops = default values for props if not passed
// from the parent component

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student