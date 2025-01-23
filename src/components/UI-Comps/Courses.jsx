import React from "react";
import { courses } from "../../../main";
import { Clock } from "lucide-react";
import { motion, easeOut } from "motion/react";
const Courses = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 mx-80  max-xl:mx-8">
      {courses.map((course, index) => {
        return (
          <motion.div
            initial={{ filter: "blur(10px)", y: -40, opacity: 0 }}
            whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{ ease: easeOut, duration: 1, delay: 0.2 * index }}
            key={index}
            className="flex flex-col shadow-2xl justify-between aspect-[9/14] w-80  border bg-primary/50 border-text/50 overflow-hidden rounded-lg"
          >
            <div
              style={{ backgroundImage: `url(${course.imgUrl})` }}
              className="min-h-[50%] min-w-full bg-center  bg-cover"
            ></div>
            <div className="my-4  space-y-2 mx-2">
              <p className="text-indigo-600 opacity-70 underline ">
                {course.tag}
              </p>
              <h1 className="text-xl font-semibold">{course.title}</h1>
              <div className="flex items-center space-x-1">
                <Clock />
                <p>{course.duration}</p>
              </div>
              <p>Level : {course.level}</p>
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-xl">DZD {course.price}</h1>
                <button className="rounded-lg p-2  bg-button text-white   hover:bg-hover transition-colors duration-300 ease-out">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Courses;
