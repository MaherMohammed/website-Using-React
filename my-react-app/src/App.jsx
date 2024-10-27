import Student from "./Components/Student"


function App() {
  return(
    <>
      <Student name="Maher" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Sara" age={50} isStudent={false}/>
      <Student name="Manar" age={27} isStudent={true}/>
      <Student />
    </>
  )
}

export default App
