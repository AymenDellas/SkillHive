import React from "react";
import { courses } from "../../../main";
import Button from "./Button";
import { Clock } from "lucide-react";

const CoursesPage = () => {
  return (
    <section className="pt-36 pb-16 px-6 lg:px-14 xl:px-44 2xl:px-56">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Explore Our Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-cardBg border border-gray-200 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${course.imgUrl})` }}
            ></div>

            <div className="p-6 flex flex-col justify-between space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h2>
              <p className="text-gray-600 text-sm">{course.description}</p>

              <div className="flex items-center justify-between text-gray-700 text-sm">
                <span>
                  Level: <strong>{course.level}</strong>
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-green-600">
                  DZD {course.price}
                </span>
                <Button text="Start Learning" className="px-4 py-2 text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesPage;
