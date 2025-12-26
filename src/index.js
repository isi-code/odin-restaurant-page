import "./restaurant-styles.css";
import { homepageContent, menuContent, aboutContent } from './page-contents.js'
import { PageSectionGenerator } from './page-section-generator.js';
import { PageNavigation } from './navigation.js';

const navBarContainer = document.querySelector("header > nav");
const pageContentContainer = document.getElementById("content");

const home = new PageSectionGenerator("Gyros' Paradise", homepageContent);
const menu = new PageSectionGenerator("Menu", menuContent);
const about = new PageSectionGenerator("About", aboutContent);

const pages = { 
    home : home.addPageContent(),
    menu : menu.addPageContent(), 
    about : about.addPageContent()
}

const nav = new PageNavigation(navBarContainer, pageContentContainer, pages);
nav.updatePage(pages.home);