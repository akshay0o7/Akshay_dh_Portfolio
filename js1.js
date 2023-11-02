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
