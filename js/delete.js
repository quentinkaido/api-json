
function deletestudent(index) {
  people.splice(index, 1);
  showPeople();
  localStorage.setItem('people',JSON.stringify(people));
  console.log(people);
};
