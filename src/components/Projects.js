import classes from './Projects.module.css';
import expenseImg from '../assets/expense.jpg';
import investImg from '../assets/invest.jpg';
import reactImg from '../assets/react.jpg';
import todoImg from '../assets/todo.jpg';
const Projects = () => {
    return(
        <div className={classes.projects}>
            <h2>My Work</h2>
            <div className="container">
                <div>
                    <img src={expenseImg} alt="expense-img" />
                    <div>
                        <h3>Expense Tracker</h3>
                        <a href="https://akashkumar06.github.io/expense-tracker/">View Project</a>
                    </div>
                </div>
                <div>
                    <img src={investImg} alt="investment-img" />
                    <div>
                        <h3>Investement Tracker</h3>
                        <a href="https://akashkumar06.github.io/investment-tracker/">View Project</a>
                    </div>
                </div>
                <div>
                    <img src={todoImg} alt="todo-img" />
                    <div>
                        <h3>Todo List</h3>
                        <a href="https://akashkumar06.github.io/todo-list/">View Project</a>
                    </div>
                </div>
                <div>
                    <img src={reactImg} alt="react-img" />
                    <div>
                        <h3>React Concepts</h3>
                        <a href="https://akashkumar06.github.io/react-concepts/">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;