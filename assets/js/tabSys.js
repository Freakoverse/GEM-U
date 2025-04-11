document.addEventListener("DOMContentLoaded", function() {
    const tabComponents = document.querySelectorAll('[tabSys]');

    tabComponents.forEach(tabComponent => {
        const tabSelectors = tabComponent.querySelectorAll('[tabSys-Selector] > button')
        const tabContents = tabComponent.querySelectorAll('[tabSys-Content] > div');

        tabSelectors.forEach((selector, index) => {
            selector.addEventListener('click', () => {
                // Remove active classes from all selectors and hide all contents
                tabSelectors.forEach((s) => {
                    s.classList.remove("bg-bgMain2","text-bgMain","hover:bg-bgMain2/25");
                    s.classList.add("hover:bg-bgMain2/25");
                });

                tabContents.forEach((content) => {
                    content.classList.add("hidden");
                });

                // Add active classes to the clicked selector and show the corresponding content
                selector.classList.add("bg-bgMain2","text-bgMain");
                selector.classList.remove("hover:bg-bgMain2/25");
                tabContents[index].classList.remove("hidden");
            });
        });
    });
});
