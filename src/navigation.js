import { PageContentRenderer } from './page-renderer.js';

export function PageNavigation(navBar, pageContentContainer) {
    const navBarContainer = navBar;
    const pageRenderer = new PageContentRenderer(pageContentContainer);
    
    const updatePage = (pageContent) => {
        pageRenderer.removePageContent();
        pageRenderer.renderPageContent(pageContent);
    }
    
    return { updatePage }
};

    