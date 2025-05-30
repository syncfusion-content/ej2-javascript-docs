// Top Sidebar initialization
var topSidebar = new ej.navigations.Sidebar({ type: "Push", open: top_sidebar_open, close: top_sidebar_close });
topSidebar.appendTo('#top-sidebar');

// Bottom Sidebar initialization
var bottomSidebar = new ej.navigations.Sidebar({ type: "Push", open: bottom_sidebar_open, close: bottom_sidebar_close });
bottomSidebar.appendTo('#bottom-sidebar');

// Top Sidebar toggle button initialization
var topBtn = new ej.buttons.Button({ cssClass: 'e-info' });
topBtn.appendTo('#top-btn');

// Bottom Sidebar toggle button initialization
var bottomBtn = new ej.buttons.Button({ cssClass: 'e-info' });
bottomBtn.appendTo('#bottom-btn');

document.getElementById('top-btn').onclick = function () {
  topSidebar.toggle();
}
document.getElementById('bottom-btn').onclick = function () {
  bottomSidebar.toggle();
}

function top_sidebar_open() {
  var element = document.getElementsByClassName("e-content-animation")[0];
  element.style.height = (element.offsetHeight - 75) + "px";
  element.classList.add("top_content_animation");
  // Remove the e-left class in Sidebar
  topSidebar.element.classList.remove("e-left");
  // Add the custom class to Sidebar
  topSidebar.element.classList.add("top_sidebar");
}

function top_sidebar_close() {
  var element = document.getElementsByClassName("e-content-animation")[0];
  element.style.height = (element.offsetHeight + 75) + "px";
  element.classList.remove("top_content_animation");
}

function bottom_sidebar_open() {
  var element = document.getElementsByClassName("e-content-animation")[0];
  element.style.height = (element.offsetHeight - 75) + "px";
  element.classList.add("bottom_animation_content");
  // Remove the e-left class in Sidebar
  bottomSidebar.element.classList.remove("e-left");
  // Add the custom class to Sidebar
  bottomSidebar.element.classList.add("bottom_sidebar");
}

function bottom_sidebar_close() {
  var element = document.getElementsByClassName("e-content-animation")[0];
  element.style.height = (element.offsetHeight + 75) + "px";
  element.classList.remove("bottom_animation_content");
}