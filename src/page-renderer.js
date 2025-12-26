export function PageContentRenderer(pageContainer) {
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