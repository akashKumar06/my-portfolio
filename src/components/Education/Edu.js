import classes from "./Education.module.css";

const Edu = ({ data, onClick }) => {

    function clickHandler(){
        onClick(data.id);
    }

  let content = "";
  if (data.status === true) {
    content = <div className={classes.content}>
        <h4>{data.institute} | {data.place}</h4>
        <div>{data.desc}</div>
        <h4>{data.per}</h4>
        <h4>{data.grade}</h4>
    </div>;
  }

  return (
    <div className={classes.items}>
        <div className={classes['items-content']}>
          <h3>
            {data.degree} | {data.abbr}
          </h3>
          <div>{data.year}</div>
          <button onClick={clickHandler}>+</button>
        </div>
        {content}
    </div>
  );
};

export default Edu;
