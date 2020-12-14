exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    // Only update the `/blogs` page.
    if (page.path.match(/^\/clubs/)) {
        // page.matchPath is a special key that's used for matching pages
        // with corresponding routes only on the client.
        page.matchPath = "/clubs/*";

        // Update the page.
        createPage(page)
    }
}