import classes from "./Projects.module.css";
import expenseImg from "../assets/expense.jpg";
import investImg from "../assets/invest.jpg";
import reactImg from "../assets/react.jpg";
import todoImg from "../assets/todo.jpg";
const Projects = () => {
  return (
    <div className={classes.projects}>
      <h2>My Work</h2>
      <div className={classes.container}>
        <div className={classes.items}>
          <div className={classes.image}>
            <img src={expenseImg} alt="expense-img" />
          </div>
          <div className={classes["items-content"]}>
            <h3>Expense Tracker</h3>
            <a
              href="https://akashkumar06.github.io/expense-tracker/"
              rel="noreferrer"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
        <div className={classes.items}>
          <div className={classes.image}>
            <img src={investImg} alt="investment-img" />
          </div>
          <div className={classes["items-content"]}>
            <h3>Investement Tracker</h3>
            <a
              href="https://akashkumar06.github.io/investment-tracker/"
              rel="noreferrer"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
        <div className={classes.items}>
          <div className={classes.image}>
            <img src={todoImg} alt="todo-img" />
          </div>
          <div className={classes["items-content"]}>
            <h3>Todo List</h3>
            <a
              href="https://akashkumar06.github.io/todo-list/"
              rel="noreferrer"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
        <div className={classes.items}>
          <div className={classes.image}>
            <img src={reactImg} alt="react-img" />
          </div>
          <div className={classes["items-content"]}>
            <h3>React Concepts</h3>
            <a
              href="https://akashkumar06.github.io/react-concepts/"
              rel="noreferrer"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
