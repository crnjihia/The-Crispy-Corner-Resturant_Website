// Shows the Hidden Sections on Click (Menu Page)
document.querySelectorAll(".section-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.dataset.target;
    const target = document.getElementById(targetId);
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      section.style.display = "none";
    });

    target.style.display = "block";
  });
});

// Back to Top Button (All Pages)
const myButton = document.getElementById("myBtn");

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add event listener for the back-to-top button
myButton.addEventListener("click", topFunction);
