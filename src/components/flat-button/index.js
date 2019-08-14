const flatButton = (function () {

    const module = {};

    module._id = 0;

    module._style = (active) => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        // O valor do active é passado por paramentro vindo lá da page.
        // IF ternario no Background, se active for true recebe cor vermelha caso contrario cor branca

        $style.textContent = `
            .flat-button-${module._id} {
                background-color: ${active ? "#f25a70" : "#eae6da"};
                color: ${active ? "#fff" : "#fffcee"};
                width: 186px;
                height: 176px;
                border: none;
                font-size: 24px;
                font-weight: bold;
                text-decoration: none;
                text-transform: uppercase;
            }
        `

        $head.insertBefore($style, null);
    }

    module.render = (content = "", active = false) => {
        module._id++;
        module._style(active);

        return `<button class="flat-button-${module._id}">${content}</button>`;
    };

    return {
        render: module.render
    }

})();