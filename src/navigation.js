import { PageContentRenderer } from './page-renderer.js';

export function PageNavigation(navBar, pageContentContainer, pagesContent) {
    const navBarContainer = navBar;
    const pageRenderer = new PageContentRenderer(pageContentContainer);
    const pages = pagesContent;

    const navBarEventHandler = (event, method) => {
        navBarContainer.addEventListener(event, (e) => { method(e) });
    }

    const clickNavController = (e) => { 
        if (e.target.tagName === "BUTTON"){
            const navBtn = e.target.id;
            if (navBtn in pages) updatePage(pages[navBtn]);
        }
    };

    const updatePage = (pageContent) => {
        pageRenderer.removePageContent();
        pageRenderer.renderPageContent(pageContent);
    }

    const addNavigationEvents = () =>{ navBarEventHandler("click", clickNavController) };

    addNavigationEvents();

    return { updatePage }
};
