import React from "react";
import { courses } from "../../../main";
import { Clock, Target } from "lucide-react";

const Courses = () => {
  return (
    <section>
      <div className="flex flex-col items-center my-12 space-y-4">
        <h1 className="text-5xl text-text font-bold">
          Featured <span className="text-text/70">Courses</span>
        </h1>
        <p className="text-text text-lg">
          Explore our initial offerings in programming, video editing, and
          design
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-20 gap-12 justify-center mx-6 lg:mx-20 xl:mx-48 2xl:mx-72">
        {courses.map((course, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col flex-grow shadow-2xl justify-between bg-white border border-text/50 overflow-hidden rounded-lg"
            >
              <div
                style={{ backgroundImage: `url(${course.imgUrl})` }}
                className="h-48 min-w-full bg-center bg-cover  z-10"
              ></div>
              <div className="my-4 space-y-4 mx-2 z-10">
                <p className="text-button">{course.tag}</p>
                <h1 className="text-lg font-semibold">{course.title}</h1>
                <div className="flex items-center space-x-2">
                  <Clock />
                  <p>{course.duration}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Target />

                  <p>
                    Level : <span className="font-bold">{course.level}</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-lg text-green-600">
                    DZD {course.price}
                  </h1>
                  <button className="rounded-lg p-2  bg-button text-white   hover:bg-hover transition-colors duration-300 ease-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
