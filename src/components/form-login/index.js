const formLogin = (function () {

    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .form-login {
                padding: 0 34px 40px;
            }
        `

        $head.insertBefore($style, null);

    };

    module._children = () => {

        const createLabel = labelCollabcode.render();
        const createInput = inputCollabcode.render();

        const $loginLabel = createLabel({
            name: "login",
            content: "Username or E-mail"
        });

        const $loginInput = createInput({
            type: "text",
            name: "login",
            placeholder: "exaple@email.com"
        });

        const $passwordLabel = createLabel({
            type: "password",
            content: "Password"
        });

        const $passwordInput = createInput({
            type: "password",
            name: "password",
            placeholder: "******"
        });

        const $pageButton = pageButton.render("login");

        return `
            ${$loginLabel}
            ${$loginInput}
            ${$passwordLabel}
            ${$passwordInput}
            ${$pageButton}
        `;

    };

    module.render = () => {
        module._style();
        return `<form action="#" method="POST" class="form-login">${module._children()}</form>`;

    };

    return {
        render: module.render
    };

})();