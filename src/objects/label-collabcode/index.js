const labelCollabcode = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .label-collabcode {
                display: block;
                color: rgba(58, 64, 66, .5);
                font-size: 16px;
            }

            .input-collabcode + .label-collabcode {
                margin-top: 30px;
            }
        `;

        $head.insertBefore($style, null);
    }

    module.render = () => {

        module._style();

        return ({ name, content }) => `
            <label class="label-collabcode" for="${name}">${content}</label>
        `;
    };

    return {
        render: module.render
    }

})();