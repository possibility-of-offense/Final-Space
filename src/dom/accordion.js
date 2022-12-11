export function accordion() {
  const showMoreInfo = document.querySelector(
    ".single-details-view__info--show-more-info"
  );

  return function togglingAccordion(e) {
    const { target } = e;

    const content = target.textContent;
    if (content.includes("more")) {
      target.textContent = "Show less";
      showMoreInfo.style.height = `${showMoreInfo.scrollHeight}px`;
    } else {
      target.textContent = "Show more";
      showMoreInfo.style.height = `0px`;
    }
    showMoreInfo.classList.toggle("active");
  };
}
