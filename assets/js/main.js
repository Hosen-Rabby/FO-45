// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// scrop to top
const toTop = document.querySelector(".to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// switching sign in and up

const logHere = document.querySelector(".log_here");
const regHere = document.querySelector(".reg_here");
const signTxt = document.querySelector(".sign_txt");
const regTxt = document.querySelector(".reg_txt");
const signTitle = document.querySelector(".sign_title");
const regTitle = document.querySelector(".reg_title");
const signInDiv = document.querySelector(".sign_in");
const signUpDiv = document.querySelector(".sign_up");
const signInBtn = document.querySelector(".switch_btn_in");
const signUpBtn = document.querySelector(".switch_btn_up");

function signIn() {
  signInDiv.classList.add("active");
  signUpDiv.classList.remove("active");
  signInBtn.classList.add("active");
  signUpBtn.classList.remove("active");
  signTitle.classList.add("active");
  regTitle.classList.remove("active");
  regHere.classList.add("active");
  logHere.classList.remove("active");
  signTxt.classList.add("active");
  regTxt.classList.remove("active");
}

function signUp() {
  signUpDiv.classList.add("active");
  signInDiv.classList.remove("active");
  signUpBtn.classList.add("active");
  signInBtn.classList.remove("active");
  regTitle.classList.add("active");
  signTitle.classList.remove("active");
  logHere.classList.add("active");
  regHere.classList.remove("active");
  regTxt.classList.add("active");
  signTxt.classList.remove("active");
}

function resizeTextarea(textarea) {
  var lineCount = textarea.value.split("\n").length;

  var maxRows = 4;
  if (lineCount > maxRows) {
    lineCount = maxRows;
  }
  textarea.rows = lineCount;
}

// toggle selection
function toggleSelection(element) {
  var allPeople = document.querySelectorAll(".people");
  allPeople.forEach(function (item) {
    item.classList.remove("selected");
  });
  element.classList.add("selected");
}

// setting

const settingDiv = document.getElementById("setting");
const peopleDiv = document.getElementById("chat_l");
const profileDiv = document.getElementById("chat_r");
function openSetting() {
  settingDiv.style.right = "0";
}
function openPeople() {
  peopleDiv.style.left = "0";
}
function openProfile() {
  profileDiv.style.right = "0";
}

function closeSetting() {
  settingDiv.style.right = "-340px";
}
function closePeople() {
  peopleDiv.style.left = "-360px";
}

function closeProfile() {
  profileDiv.style.right = "-360px";
}



// sms bottom

function scrollToBottom() {
  var container = document.getElementsByClassName('chat_msg');
  container.scrollTop = container.scrollHeight;
}

window.onload = scrollToBottom;