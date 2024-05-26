import { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import "./container.css"

const RightContainer = () => {
  const {empData, team, setTeam, setEmpData } = useContext(Context);
  const [sort, setSort] = useState(true);

  const removeInTeam = (id) => {
    let updateTeam = [...team];
    updateTeam = updateTeam.filter((ele) => ele.id !== id)
    setTeam(updateTeam)

    let currEmployee = empData.map((ele) => {
      if(ele.id === id){
        return {...ele, curr: false}
      }
      return ele;
    })

    setEmpData(currEmployee)
  }

  let avgAge = team.reduce((acc, next) => {
    return acc = acc + next.age;
  }, 0)

  const sortByAgeAsc = () => {
    let arr = [...team];
    arr = arr.sort((a, b) => a.age - b.age)
    setTeam(arr)
  }

  const sortByAgeDesc = () => {
    let arr = [...team];
    arr = arr.sort((a, b) => b.age - a.age)
    setTeam(arr)
  }

  avgAge = Math.round(avgAge / team.length)

  return (
    <div className="rightContainer">
      <h1 className="heading">Teams</h1>
      <button className="button-17" onClick={() => {
        sort ? sortByAgeAsc() : sortByAgeDesc();
        setSort(!sort)
      }}>Sort by {sort ? <>🔼 Asc</> : <>🔽 Dsc</>}</button>
      <div>
        {team.map((ele) => {
          return (
            <div key={ele.id} className="employess">
            <div className="twoCol">
          <span>{ele.first_name}</span>
          <span>{ele.age} Year</span>
          </div>
              <button className="button-17" onClick={() => removeInTeam(ele.id)}>REMOVE</button>
            </div>
          );
        })}
      </div>
        <div className="avgContainer">
      <div className="avgAge">Average Age : {avgAge}</div>
      </div>
    </div>
  );
};

export default RightContainer;