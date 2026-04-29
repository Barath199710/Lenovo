import React from 'react'
import Selfintro from './Selfintro'
import Child from "./Child";
import Counter from "./Counter";
import UserStatus from "./UserStatus";
import MultiFieldForm from "./Component/Multiform";
import ValidatedForm from "./Component/ValidatedForm";
export default function App() {
  return (
    <div>
     
        {/* <Selfintro /> */}
       



    {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Child
        name="Alia"
        age={25}
        email="alia@gmail.com"
        role="Frontend Developer"
        location="New Delhi"
        phone="9030309390"
        hobby="Photography"
      />
      <Child
        name="Basha"
        age={30}
        email="basha@yahoo.com"
        role="Backend Developer"
        location="Gujarat"
        phone="987-654-3210"
        hobby="Cycling"
      />
      <Child
        name="Charles"
        age={28}
        email="charles@hotmail.com"
        role="UI Designer"
        location="Mumbai"
        phone="8090290901"
        hobby="Painting"
      />
      <Child
        name="Dimple"
        age={22}
        email="dimple@gmail.com"
        role="QA Engineer"
        location="Tutikorin"
        phone="8669020292"
        hobby="Gaming"
      />
      <Child
        name="Esther"
        age={35}
        email="esther@gmail.com"
        role="Project Manager"
        location="Sozhinganallur"
        phone="8884389090"
        hobby="Cooking"
      />
    </div>
  */}
  {/* <div style={{ textAlign: "center" }}>
      <h1>Task 3 – Counter & Conditional Rendering</h1>
      <Counter />
      <UserStatus />
      
    </div> */}
       {/* <div className="App">
      <h1>Task 4 – Multi-Field Form</h1>
      <MultiFieldForm />
    </div>  */}
 <div className="App">
      <header style={{ textAlign: "center", margin: "20px 0" }}>
        <h1>Task 5 – Form with Field Validation</h1>
      </header>
      <main>
        <ValidatedForm />
      </main>
    </div>
    </div> 
  )
}
  
  
