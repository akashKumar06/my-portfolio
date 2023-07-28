import classes from "./Education.module.css";

const Education = () => {
  return (
    <div className={classes.education}>
      <h2>Educational Qualification</h2>
      <div className={classes.container}>
        <div>
            <h3>MCA | Master in Computer Application</h3>
            <h4>National Institute of Technology | Jamsedhpur</h4>
            <p>CGPA/PER - 93.40%</p>
            <p>year: 2023/2026</p>
        </div>
        <div>
            <h3>BCA | Bachelor in Computer Application</h3>
            <h4>St. Xavier's College | Ranchi</h4>
            <p>CGPA/PER - 84.48%</p>
            <p>year: 2020/2023</p>
        </div>
        <div>
            <h3>Intermediate</h3>
            <h4>Surendranath Centenary school | Ranchi</h4>
            <p>CGPA/PER - 87.60%</p>
            <p>year: 2027/2019</p>
        </div>
      </div>
    </div>
  );
};
export default Education;
