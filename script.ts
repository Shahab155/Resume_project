const toggleButton = document.querySelector(
  ".toggleButton"
) as HTMLButtonElement;
const skills = document.querySelector(".skills") as HTMLDivElement;

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
// get all containers
const resumeContainer = document.querySelector(
  ".resumeContainer"
) as HTMLDivElement;
const formContainer = document.querySelector(
  ".formContainer"
) as HTMLDivElement;
const outputResume = document.querySelector(".outputResume") as HTMLDivElement;
const mainHeading = document.querySelector(
  ".mainHeading"
) as HTMLHeadingElement;
// initialize the area to be dispalyed
const form = document.getElementById("resumeForm") as HTMLFormElement;
const displayPhoto = document.getElementById(
  "displayPhoto"
) as HTMLImageElement;
const displayName = document.getElementById(
  "displayName"
) as HTMLHeadingElement;
const displayEmail = document.getElementById(
  "displayEmail"
) as HTMLParagraphElement;
const displayPhone = document.getElementById(
  "displayPhone"
) as HTMLParagraphElement;
const displayRoleHeading = document.getElementById(
  "displayRoleHeading"
) as HTMLHeadingElement;
const displayRoleSpan = document.getElementById(
  "displayRoleSpan"
) as HTMLSpanElement;
const displayExperience = document.getElementById(
  "displayExperience"
) as HTMLSpanElement;
const displayAge = document.getElementById(
  "displayAge"
) as HTMLParagraphElement;
const dateOfBirth = document.getElementById(
  "displayDOB"
) as HTMLParagraphElement;
const displayNationality = document.getElementById(
  "displayNationality"
) as HTMLParagraphElement;
const displayCityParagraph = document.getElementById(
  "displayCityParagraph"
) as HTMLParagraphElement;
const displayCitySpan = document.getElementById(
  "displayCitySpan"
) as HTMLSpanElement;
const displayProvince = document.getElementById(
  "displayProvince"
) as HTMLParagraphElement;
const displayProjects = document.getElementById(
  "displayProjects"
) as HTMLSpanElement;
const displayfoundation = document.getElementById(
  "displayFoundation"
) as HTMLSpanElement;
const schoolName = document.getElementById(
  "schoolName"
) as HTMLParagraphElement;
const collegeName = document.getElementById(
  "collegeName"
) as HTMLParagraphElement;
const universityName = document.getElementById(
  "universityName"
) as HTMLParagraphElement;
const departmentName = document.getElementById(
  "departmentName"
) as HTMLParagraphElement;
const yearFrom = document.getElementById("yearFrom") as HTMLSpanElement;
const yearTo = document.getElementById("yearTo") as HTMLSpanElement;
const displaySkills = document.getElementById(
  "displaySkills"
) as HTMLUListElement;

form.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();
  const photoInput = document.getElementById("photoInput") as HTMLInputElement;
  const name1 = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const age = (document.getElementById("age") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const projects = (document.getElementById("projects") as HTMLInputElement)
    .value;
  const role = (document.getElementById("role") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const foundation = (document.getElementById("foundation") as HTMLInputElement)
    .value;
  // get Nationality input
  const nationality = document.getElementById(
    "nationality"
  ) as HTMLSelectElement;
  // now get the text that nationality will provide
  const nationalityText = nationality.options[nationality.selectedIndex].text;
  // get city input
  const city = document.getElementById("city") as HTMLSelectElement;
  // this will show the text that user has selected
  const cityText = city.options[city.selectedIndex].text;
  // get province input
  const province = document.getElementById("province") as HTMLSelectElement;
  const provinceText = province.options[province.selectedIndex].text;
  const school = (document.getElementById("school") as HTMLInputElement).value;
  const college = (document.getElementById("college") as HTMLInputElement)
    .value;
  const uni = (document.getElementById("uni") as HTMLInputElement).value;
  const department = (document.getElementById("department") as HTMLInputElement)
    .value;
  const startYear = (document.getElementById("startYear") as HTMLInputElement)
    .value;
  const endYear = (document.getElementById("endYear") as HTMLInputElement)
    .value;

  // this logic is for image upload
  const photoFile = photoInput.files ? photoInput.files[0] : null;
  let photoBase64 = "";

  if (photoFile) {
    photoBase64 = await fileToBase64(photoFile);
    localStorage.setItem("displayPhoto", photoBase64);

    displayPhoto.src = photoBase64;
  }

  // / file to base64 function
  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
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
  document.querySelector(".outerBtnContainer")?.classList.remove("hidden");
  mainHeading.innerText = "Dynamic Resume";

  // get editButton
  const editButton = document.getElementById("editButton") as HTMLButtonElement;
  editButton.addEventListener("click", () => {
    formContainer.classList.remove("hidden");
    outputResume.classList.add("hidden");
    updateResumeForm();
  });
  //   the function that will be re-called on edit button clicked
  function updateResumeForm() {
    (document.getElementById("name") as HTMLInputElement).value =
      displayName.innerText || "";
    (document.getElementById("email") as HTMLInputElement).value =
      displayEmail.innerText || "";
    (document.getElementById("phone") as HTMLInputElement).value =
      displayPhone.innerText || "";
    (document.getElementById("age") as HTMLInputElement).value =
      displayAge.innerText;
    (document.getElementById("experience") as HTMLInputElement).value =
      displayExperience.innerText || "";
    (document.getElementById("projects") as HTMLInputElement).value =
      displayProjects.innerText || "";
    (document.getElementById("role") as HTMLInputElement).value =
      displayRoleHeading.innerText || "";
    (document.getElementById("dob") as HTMLInputElement).value =
      dateOfBirth.innerText || "";
  }
  (document.getElementById("school") as HTMLInputElement).value =
    schoolName.innerText || "";
  (document.getElementById("college") as HTMLInputElement).value =
    collegeName.innerText || "";
  (document.getElementById("uni") as HTMLInputElement).value =
    universityName.innerText || "";
  (document.getElementById("department") as HTMLInputElement).value =
    departmentName.innerText || "";
  (document.getElementById("startYear") as HTMLInputElement).value =
    yearFrom.innerText || "";
  (document.getElementById("endYear") as HTMLInputElement).value =
    yearTo.innerText || "";

  // now add functionality to make resume shareable
  const copyLinkButton = document.getElementById(
    "linkButton"
  ) as HTMLButtonElement;

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
});

// logic for adding and deleting skills
const addSkillsButton = document.getElementById(
  "addSkillButton"
) as HTMLButtonElement;
const deleteSkillButton = document.getElementById(
  "deleteSkillButton"
) as HTMLButtonElement;

addSkillsButton.addEventListener("click", () => {
  let skillInput = document.getElementById("skillInput") as HTMLInputElement;

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
