export function PageSectionGenerator(title, pageSections) {
  if (!new.target) {
    throw Error("new keyword wasn't used");
  }
  this.pageTitle = title;
  this.pageSections = pageSections;
}
PageSectionGenerator.prototype.createPageTitleSection = function () {
// Create an individual section that contains title to later be added to the main content div
  const titleSection = document.createElement("section");
  titleSection.setAttribute("id", "title-section");
  const titleTag = document.createElement("h1");

  titleTag.textContent = this.pageTitle;
  titleSection.append(titleTag);

  return titleSection;
};
PageSectionGenerator.prototype.addPageContent = function () {
// A new section is created returning containing all the page content to later be added to page
  const pageContent = [];
  pageContent.push(this.createPageTitleSection());

  this.pageSections.forEach((pageSectionContent) => {
    const pageSection = document.createElement("section");
    pageSection.innerHTML = pageSectionContent.join("");
    pageContent.push(pageSection);
  });

  return pageContent;
};