"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const toggleButton = document.querySelector(".toggleButton");
const skills = document.querySelector(".skills");
toggleButton.addEventListener("click", () => {
  if (skills.style.display === "none") {
    skills.style.display = "block";
    toggleButton.innerText = "Hide Skills";
  } else {
    skills.style.display = "none";
    toggleButton.innerText = "Show Skills";
  }
});
skills.style.display = "none";
const resumeContainer = document.querySelector(".resumeContainer");
const formContainer = document.querySelector(".formContainer");
const outputResume = document.querySelector(".outputResume");
const mainHeading = document.querySelector(".mainHeading");
// initialize the area to be dispalyed
const form = document.getElementById("resumeForm");
const displayPhoto = document.getElementById("displayPhoto");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const displayPhone = document.getElementById("displayPhone");
const displayRoleHeading = document.getElementById("displayRoleHeading");
const displayRoleSpan = document.getElementById("displayRoleSpan");
const displayExperience = document.getElementById("displayExperience");
const displayAge = document.getElementById("displayAge");
const dateOfBirth = document.getElementById("displayDOB");
const displayNationality = document.getElementById("displayNationality");
const displayCityParagraph = document.getElementById("displayCityParagraph");
const displayCitySpan = document.getElementById("displayCitySpan");
const displayProvince = document.getElementById("displayProvince");
const displayProjects = document.getElementById("displayProjects");
const displayfoundation = document.getElementById("displayFoundation");
const schoolName = document.getElementById("schoolName");
const collegeName = document.getElementById("collegeName");
const universityName = document.getElementById("universityName");
const departmentName = document.getElementById("departmentName");
const yearFrom = document.getElementById("yearFrom");
const yearTo = document.getElementById("yearTo");
const displaySkills = document.getElementById("displaySkills");
form.addEventListener("submit", (event) =>
  __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const photoInput = document.getElementById("photoInput");
    const name1 = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const experience = document.getElementById("experience").value;
    const projects = document.getElementById("projects").value;
    const role = document.getElementById("role").value;
    const dob = document.getElementById("dob").value;
    const foundation = document.getElementById("foundation").value;
    // get Nationality input
    const nationality = document.getElementById("nationality");
    // now get the text that nationality will provide
    const nationalityText = nationality.options[nationality.selectedIndex].text;
    // get city input
    const city = document.getElementById("city");
    // this will show the text that user has selected
    const cityText = city.options[city.selectedIndex].text;
    // get province input
    const province = document.getElementById("province");
    const provinceText = province.options[province.selectedIndex].text;
    const school = document.getElementById("school").value;
    const college = document.getElementById("college").value;
    const uni = document.getElementById("uni").value;
    const department = document.getElementById("department").value;
    const startYear = document.getElementById("startYear").value;
    const endYear = document.getElementById("endYear").value;
    // this logic is for image upload
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = "";
    if (photoFile) {
      photoBase64 = yield fileToBase64(photoFile);
      localStorage.setItem("displayPhoto", photoBase64);
      displayPhoto.src = photoBase64;
    }
    // / file to base64 function
    function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    displayName.innerText = name1;
    displayEmail.innerText = email;
    displayPhone.innerText = phone;
    displayAge.innerText = `Age : ${age}`;
    displayExperience.innerText = `${experience} `;
    displayProjects.innerText = projects;
    displayfoundation.innerText = foundation;
    displayRoleHeading.innerText = role;
    displayRoleSpan.innerText = role;
    dateOfBirth.innerText = `Date of Birth : ${dob}`;
    displayNationality.innerText = `Nationality : ${nationalityText}`;
    displayCityParagraph.innerText = `City : ${cityText}`;
    displayCitySpan.innerText = ` ${cityText}`;
    displayProvince.innerText = `Province : ${provinceText}`;
    schoolName.innerText = `${school}`;
    collegeName.innerText = `${college}`;
    universityName.innerText = uni;
    departmentName.innerText = department;
    yearFrom.innerText = `${startYear} - `;
    yearTo.innerText = endYear;
    //  when form will be submitted than this updates will occur
    resumeContainer.classList.add("hidden");
    formContainer.classList.add("hidden");
    outputResume.classList.remove("hidden");
    mainHeading.innerText = "Dynamic Resume";
    // get editButton
    const editButton = document.getElementById("editButton");
    editButton.addEventListener("click", () => {
      formContainer.classList.remove("hidden");
      outputResume.classList.add("hidden");
      updateResumeForm();
    });
    function updateResumeForm() {
      document.getElementById("name").value = displayName.innerText || "";
      document.getElementById("email").value = displayEmail.innerText || "";
      document.getElementById("phone").value = displayPhone.innerText || "";
      document.getElementById("age").value = displayAge.innerText;
      document.getElementById("experience").value =
        displayExperience.innerText || "";
      document.getElementById("projects").value =
        displayProjects.innerText || "";
      document.getElementById("role").value =
        displayRoleHeading.innerText || "";
      document.getElementById("dob").value = dateOfBirth.innerText || "";
    }
    document.getElementById("school").value = schoolName.innerText || "";
    document.getElementById("college").value = collegeName.innerText || "";
    document.getElementById("uni").value = universityName.innerText || "";
    document.getElementById("department").value =
      departmentName.innerText || "";
    document.getElementById("startYear").value = yearFrom.innerText || "";
    document.getElementById("endYear").value = yearTo.innerText || "";
    // now add functionality to make resume shareable
    const copyLinkButton = document.getElementById("linkButton");
    // create an instance of new URLSearchParams and store all input data
    const queryParams = new URLSearchParams({
      name1: name1,
      email: email,
      phone: phone,
      age: age,
      experience: experience,
      projects: projects,
      role: role,
      dob: dob,
      nationalityText: nationalityText,
      cityText: cityText,
      provinceText: provinceText,
      school: school,
      college: college,
      uni: uni,
      department: department,
      startYear: startYear,
      endYear: endYear,
    });
    const uniqueURL = `${window.location.origin}?${queryParams.toString()}`;
    copyLinkButton.addEventListener("click", () => {
      navigator.clipboard.writeText(uniqueURL);
      alert("Link copied Successfully!");
    });
    window.history.replaceState(null, ``, `${queryParams.toString()}`);
  })
);
// logic for adding and deleting skills
const addSkillsButton = document.getElementById("addSkillButton");
const deleteSkillButton = document.getElementById("deleteSkillButton");
addSkillsButton.addEventListener("click", () => {
  let skillInput = document.getElementById("skillInput");
  if (skillInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = skillInput.value;
    li.style.color = "rgb(61, 58, 58)";
    li.style.marginBottom = "3px";
    displaySkills.appendChild(li);
    skillInput.value = "";
    deleteSkillButton.addEventListener("click", () => {
      displaySkills.removeChild(li);
    });
  } else {
    alert("Skill list is empty!");
  }
});
