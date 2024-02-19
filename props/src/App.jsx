
//props = read-only properties that are shared between components,
//A parent component can send data to a child component

import Student from "./Student"


function App() {

  return (
   <>
    <Student name='Spongebob' age={30} isStudent={true}/>
    <Student name='Patrick' age={42} isStudent={false}/>
    <Student name='Ram' age={50} isStudent={false}/>
    <Student name='Sandy' age={27} isStudent={true}/>
    <Student name='Lary'/>
   </>
  )
}

export default App
