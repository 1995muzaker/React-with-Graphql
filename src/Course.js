import React from "react";

const Course = props => (
  <div className="card" style={{ width: "100%", marginTop: "10px" }}>
    <div className="card-body">
      <h5 className="card-title">{props.course.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        by <span>{props.course.author}</span>
      </h6>
      <img src={props.course.img} alt="sports img" />
      <a href={props.course.url} target="blank" className="card-link">
        View story
      </a>
    </div>
  </div>
);

export default Course;
