function PageContentGenerator(title, pageSections) {
  if (!new.target) {
    throw Error("new keyword wasn't used");
  }
  this.pageTitle = title;
  this.pageSections = pageSections;
}
PageContentGenerator.prototype.createPageTitleSection = function () {
// Create an individual section that contains title to later be added to the main content div
  const titleSection = document.createElement("section");
  titleSection.setAttribute("id", "title-section");
  const titleTag = document.createElement("h1");

  titleTag.textContent = this.pageTitle;
  titleSection.append(titleTag);

  return titleSection;
};
PageContentGenerator.prototype.generatePageContent = function () {
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

function PageContentRenderer(pageContainer) {
  if (!new.target) {
    throw Error("new keyword wasn't used");
  }
  this.pageContentContainer = document.getElementById(pageContainer);
  this.removePageContent();
}
PageContentRenderer.prototype.removePageContent = function () {
// Remove all present content when function is called clean content to render new content
  while (this.pageContentContainer.lastChild) {
    this.pageContentContainer.lastChild.remove();
  }
};
PageContentRenderer.prototype.renderPageContent = function (pageContent) {
  this.pageContentContainer.append(...pageContent);
};

const homepageContent = [
  [
    "<h3>About Us</h3>",
    "<p>Greek Cuisine Paradise is an authentic, family-owned escape that brings the vibrant flavors and sun-drenched atmosphere of the Mediterranean right to your table. Specializing in traditional Hellenic recipes passed down through generations, the restaurant offers a menu rich in fresh herbs, premium olive oils, and flame-grilled meat</p>",
  ],
  [
    "<h3>Hours</h3>",
    "<table>",
    "<thead>",
    "<tr>",
    "<th>Day</th>",
    "<th>Hours</th>",
    "</tr>",
    "</thead>",
    "<tbody>",
    "<tr>",
    "<td>Monday</td>",
    "<td>7AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Tuesday</td>",
    "<td>9AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Wednesday</td>",
    "<td>7AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Thursday</td>",
    "<td>7AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Friday</td>",
    "<td>7AM - 8PM</td>",
    "</tr>",
    "<tr>",
    "<td>Saturday</td>",
    "<td>7AM - 2PM</td>",
    "</tr>",
    "<tr>",
    "<td>Sunday</td>",
    "<td>CLOSED</td>",
    "</tr>",
    "</tbody>",
    "</table>"
  ],
];

const homePage = new PageContentGenerator(
  "Greek Cuisine Paradise",
  homepageContent
);
const pageRenderer = new PageContentRenderer("content");
pageRenderer.renderPageContent(homePage.generatePageContent());
