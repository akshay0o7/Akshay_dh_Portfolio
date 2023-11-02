document.addEventListener("DOMContentLoaded", function() {
  const seeMoreBtn = document.getElementById("see-more-btn");
  const seeLessBtn = document.getElementById("see-less-btn");
  const workMoreSection = document.getElementById("work-more");

  seeMoreBtn.addEventListener("click", function() {
    workMoreSection.style.display = "block";
    seeMoreBtn.style.display = "none";
    seeLessBtn.style.display = "block";

    // Scroll to the "See Less" button
    seeLessBtn.scrollIntoView({ behavior: "smooth" });
  });

  seeLessBtn.addEventListener("click", function() {
    workMoreSection.style.display = "none";
    seeMoreBtn.style.display = "block";
    seeLessBtn.style.display = "none";


    // Scroll to the "Work" section
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });
  });
});
