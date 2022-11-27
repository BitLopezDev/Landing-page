async function load (){

    const requestObj = `../../Users/data/courses.json`;
  const request = new Request(requestObj);

  const response = await fetch(request);
  const courses = await response.json();

  tellCourses(courses);

};
function tellCourses(obj){
    console.log(`Objeto: ${obj.title}`);
}
load();