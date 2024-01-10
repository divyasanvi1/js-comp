const course={
    name:"js",
    courseInstructor:"hitesh",
}
// ways to access values and keys of objects
//object de-structure
//1.course.courseInstructor
//2. both are same methods
     const{courseInstructor}=course
     console.log(courseInstructor);

     const{courseInstructor :Instructor}=course
     console.log(Instructor);
     // {} curlybraces used for mainly destructuring
