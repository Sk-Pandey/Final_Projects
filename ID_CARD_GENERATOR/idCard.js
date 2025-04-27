let form = document.querySelector("form");
let name = document.querySelector("#stdname");
let course = document.querySelector("#stdcourse");
let branch = document.querySelector("#stdbranch");
let enroll = document.querySelector("#stdenroll");
let photo = document.querySelector("#stdphoto");
let button = document.querySelector("button");

let card = document.querySelector("#Card");
let stdname = document.querySelector("#name");
let stdcourse = document.querySelector("#course");
let stdbranch = document.querySelector("#branch");
let stdenroll = document.querySelector("#enroll");
let photoPreview = document.querySelector("#photoPreview");

button.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Set card text values
  stdname.innerText = `Name: ${name.value}`;
  stdcourse.innerText = `Course: ${course.value}`;
  stdbranch.innerText = `Branch: ${branch.value}`;
  stdenroll.innerText = `Enroll.No: ${enroll.value}`;

  // Handle image upload
  const file = photo.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      photoPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Show card, hide form
  form.classList.add("hidden");
  card.classList.remove("hidden");
});
