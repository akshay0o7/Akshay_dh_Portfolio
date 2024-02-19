document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtn = document.getElementById("see-more-btn");
  const seeLessBtn = document.getElementById("see-less-btn");
  const workMoreSection = document.getElementById("work-more");
  let clickCount = 0;

  seeMoreBtn.addEventListener("click", function () {
    clickCount++;
    workMoreSection.classList.add("visible"); // Add the 'visible' class
    seeMoreBtn.style.display = "none";
    seeLessBtn.style.display = "block";

        // Scroll to the corresponding work item based on clickCount
    const workItemToScroll = document.getElementById(`work-item-${clickCount}`);
    if (workItemToScroll) {
      workItemToScroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  });


  seeLessBtn.addEventListener("click", function () {
    workMoreSection.classList.remove("visible"); // Remove the 'visible' class
    seeMoreBtn.style.display = "block";
    seeLessBtn.style.display = "none";

    // Scroll to the "Work" section
    document.getElementById("work").scrollIntoView({ behavior: "smooth" });

    clickCount = 0
  });
});



// ---------------project button------------------------
document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtn = document.getElementById("see-more-btn0");
  const seeLessBtn = document.getElementById("see-less-btn0");
  const projectMoreSection = document.getElementById("project-more");
  const projectListSection = document.querySelector(".project-list");

  seeMoreBtn.addEventListener("click", function () {
    // Scroll to the project-more section
    projectMoreSection.style.display = "block"; // Display project-more section
    projectMoreSection.scrollIntoView({ behavior: "smooth", block: "start" });
    seeLessBtn.style.display = "block"; // Display see less button
    seeMoreBtn.style.display = "none"; // Hide see more button
  });

  seeLessBtn.addEventListener("click", function () {
    // Scroll back to the top of the Projects section
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth", block: "start" });
    // Hide project-more section and see less button
    projectMoreSection.style.display = "none";
    seeLessBtn.style.display = "none";
    seeMoreBtn.style.display = "block"; // Display see more button
  });
});
