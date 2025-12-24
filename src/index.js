function PageCreator(pageContainer, title, ...pageSections) {
    if (!new.target){
        throw Error("new keyword wasn't used");
    }

    this.pageContentContainer = document.getElementById(pageContainer);
    this.removePageContent();
    this.addPageContent(this.generatePageContent(title, pageSections));
}

PageCreator.prototype.createPageTitleSection = function (pageTitle) {
        const titleSection = document.createElement("section");
        titleSection.setAttribute("id","title-section");
        const titleTag = document.createElement("h1");
        
        titleTag.textContent = pageTitle;
        titleSection.append(titleTag);

        return titleSection
}

PageCreator.prototype.removePageContent = function () { 
    while (this.pageContentContainer.lastChild) {
        this.pageContentContainer.lastChild.remove();
    }
}

PageCreator.prototype.generatePageContent = function (title, pageSections) {
    const pageContent = [];
    pageContent.push(this.createPageTitleSection(title));

    pageSections.forEach(pageSectionContent => {
        const pageSection = document.createElement("section");
        pageSectionContent.forEach( (content) => {
            pageSection.innerHTML += content;
        });
        pageContent.push(pageSection);              
    });

    return pageContent
}

PageCreator.prototype.addPageContent = function (pageContent) { this.pageContentContainer.append(...pageContent); }


const homepageContent = [ 
    ['<h3>About Us</h3>','<p>Greek Cuisine Paradise is an authentic, family-owned escape that brings the vibrant flavors and sun-drenched atmosphere of the Mediterranean right to your table. Specializing in traditional Hellenic recipes passed down through generations, the restaurant offers a menu rich in fresh herbs, premium olive oils, and flame-grilled meat</p>'],
    ['<h3>Hours</h3>','<h4>Sunday</h4>','CLOSED','<h4>Monday</h4>','9AM - 8PM','<h4>Tuesday</h4>','7AM - 8PM','<h4>Wednesday</h4>','7AM - 8PM','<h4>Thursday</h4>','7AM - 8PM','<h4>Friday</h4>','7AM - 8PM','<h4>Saturday</h4>','7AM - 2PM']
];
const home = new PageCreator("content", "Greek Cuisine Paradise", ...homepageContent);