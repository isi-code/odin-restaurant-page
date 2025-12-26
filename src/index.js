import { homepageContent, menuContent, aboutContent } from './page-contents.js'
import { PageSectionGenerator } from './page-section-generator.js';
import { PageNavigation } from './navigation.js';

const home = new PageSectionGenerator("Gyro Paradise", homepageContent);
const menu = new PageSectionGenerator("Menu", menuContent);
const about = new PageSectionGenerator("About", aboutContent);

const pages = { 
    home : home.addPageContent(),
    menu : menu.addPageContent(), 
    about : about.addPageContent()
}

const navBarContainer = document.querySelector("header > nav");
const pageContentContainer = document.getElementById("content");

const navBar = new PageNavigation(navBarContainer, pageContentContainer);
navBar.updatePage(pages.home);
