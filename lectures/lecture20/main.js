// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    data = await fetch(url).then(response => response.json());
} 
fetchCourses();


function search() {
    console.log(data);
    const searchTerm = document.querySelector('#search_term').value;
   for (let i = 0; i < data.length; i++) {
    if (data[i].Department === searchTerm) {
        console.log(data[i].Title); 
    }
   }
}
