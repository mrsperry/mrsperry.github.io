export const fadeInElements: Function = (elements: HTMLCollectionOf<Element>, delay: number): void => {
    for (let index: number = 0; index < elements.length; index++) {
        const element: Element = elements.item(index);

        element.setAttribute("style", "opacity: 0");
        elements.item(index).animate(
            [
                { opacity: 0 },
                { opacity: 1 }
            ],
            {
                delay: index * delay,
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards"
            }
        );
    }
};