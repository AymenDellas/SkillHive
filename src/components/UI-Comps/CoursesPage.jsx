import React from "react";
import { courses } from "../../../main";
import Button from "./Button";
import { Clock } from "lucide-react";
const CoursesPage = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-48 space-y-12 ">
        {courses.map((course, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row border  border-text h-72 rounded-lg w-[70%] bg-white"
            >
              <div
                style={{ backgroundImage: `url(${course.imgUrl})` }}
                className="h-full w-1/2 bg-center bg-cover"
              ></div>
              <div className="m-8 space-y-4 w-full h-full">
                <h1 className="font-bold text-lg mb-2">{course.title}</h1>
                <p>{course.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-4">
                    <p>Level :{course.level}</p>
                    <div className="flex items-center space-x-1">
                      <Clock />
                      <p>{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <p className="font-bold text-xl">
                      Price : DZD {course.price}
                    </p>
                    <Button text={"Start Learning"} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CoursesPage;
