import { homepageContent, menuContent, aboutContent } from './page-contents.js'
import { PageContentGenerator } from './page-content-generator.js';
import { PageNavigation } from './navigation.js';

const home = new PageContentGenerator("Gyro Paradise", homepageContent);
const menu = new PageContentGenerator("Menu", menuContent);
const about = new PageContentGenerator("About", aboutContent);

const pages = { 
    home : home.generatePageContent(),
    menu : menu.generatePageContent(), 
    about : about.generatePageContent()
}

const navBarContainer = document.querySelector("header > nav");
const pageContentContainer = document.getElementById("content");

const navBar = new PageNavigation(navBarContainer, pageContentContainer);
navBar.updatePage(pages.home);
