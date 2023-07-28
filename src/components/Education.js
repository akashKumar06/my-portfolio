import classes from "./Education.module.css";

const Education = () => {
  return (
    <div className={classes.education}>
      <h2>Educational Qualification</h2>

      <div className={classes.container}>
        <div className={classes.items}>
          <h3>MCA | Master in Computer Application</h3>
          <div>2023 - Present</div>
          <button>+</button>
        </div>
        <div className={classes.items}>
          <h3>BCA | Bachelor in Computer Application</h3>
          <div>2020 - 2023</div>
          <button>+</button>
        </div>
        <div className={classes.items}>
          <h3>Intermediate</h3>
          <div>2019 - 2020</div>
          <button>+</button>
        </div>
        <div className={classes.items}>
          <h3>Matriculation</h3>
          <div>2017</div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};
export default Education;
