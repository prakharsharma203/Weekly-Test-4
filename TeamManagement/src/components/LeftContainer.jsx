import { useContext } from "react";
import { Context } from "../context/ContextProvider"
import "./container.css"

const LeftContainer = () => {
  const { empData, team, setTeam, setEmpData } = useContext(Context);
  // console.log(empData)

  const addInTeam = (id) => {
    let createTeam = [...empData];
    createTeam = createTeam.filter((ele) => {
      if(ele.id === id){
        return ele;
      }
    })

    let currEmployee = empData.map((ele) => {
      if(ele.id === id){
        return {...ele, curr: true}
      }
      return ele;
    })

    let data = createTeam[0]
    setTeam([...team, data])
    setEmpData(currEmployee)
  }


  return (
    <div className="leftContainer">
      <h1 className="heading">ALL EMPLOYEES</h1>
      <div>
        {empData.map((ele) => {
          return <div key={ele.id} className="employess">
          <div className="twoCol">
          <span>{ele.first_name}</span>
          <span>{ele.age} Year</span>
          </div>
          {
            !ele.curr && <button className="button-17" onClick={() => addInTeam(ele.id)}>ADD</button>
          }
          
          </div>
        })}
      </div>
    </div>
  )
}

export default LeftContainer