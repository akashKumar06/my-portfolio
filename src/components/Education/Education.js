import { useState } from "react";
import Edu from "./Edu";
import classes from "./Education.module.css";

import EDU_DATA from './EducationData';

const Education = () => {
  const [eduData,setEduData] = useState(EDU_DATA);

  const clickHandler = (id) => {
    const index = eduData.findIndex((data) => data.id === id);
    const item = eduData.find(data => data.id === id);
    if(item.status === true){
      item.status = false;
    }else{
      item.status = true;
    }
    const newData = [...eduData];
    newData.splice(index,1);
    newData.forEach(data => data.status = false);
    newData.splice(index,0,item);
    setEduData(newData);
  }

  return (
    <div className={classes.education}>
      <h2>Educational Qualification</h2>
      <div className={classes.container}>
        {eduData.map((data) => {
          return <Edu onClick={clickHandler} key={data.id} data={data}/>
        })}
      </div>
    </div>
  );
};
export default Education;
