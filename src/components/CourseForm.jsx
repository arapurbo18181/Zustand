import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const [CourseTitle, setCourseTitle] = useState("");
  const addCourse = useCourseStore((state) => state.addCourse);

  const handleCourseSubmit = () => {
    if (!CourseTitle) {
      return alert("Please add a course title");
    }
    addCourse({
      id: Math.ceil(Math.random() * 100),
      title: CourseTitle,
    });
      setCourseTitle("")
  };

  return (
    <div className="form-container">
      <input
        value={CourseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
      />
      <button onClick={handleCourseSubmit} className="form-submit-btn">Add course</button>
    </div>
  );
};

export default CourseForm;
