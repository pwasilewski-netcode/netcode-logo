(function (pwLogo) {
    pwLogo.render = function (container) {
        const cubeContainer = createElement('div', 'l-cube-container');
        cubeContainer.appendChild(createCube([[4, 5, 7], [1, 4, 5, 7], [1, 3, 4]], [['netcode', 'coder', 'trainer', 'mentor'], 'Pawel']));
        cubeContainer.appendChild(createCube([[1, 2, 5], [4, 7], [4, 7]], ['Wasil', 'ewski'], true));
        container.appendChild(cubeContainer);
    };

    function createCube(marked, content, faceBottom = false) {
        const cube = createElement('div', 'c-cube');
        if (faceBottom === true) {
            cube.classList.add('c-cube--face-bottom');
        }
        for (let i = 0; i < 3; i++) {
            cube.appendChild(createFace(marked[i]));
        }
        cube.appendChild(createFooter(content[0]));
        cube.appendChild(createFooter(content[1]));
        return cube;
    }

    function createFace(marked) {
        const face = createElement('div', 'c-cube__face');
        for (let i = 0; i < 9; i++) {
            const part = createElement('div', 'c-cube__face__part');
            if (marked.indexOf(i) > -1) {
                part.classList.add('c-cube__face__part--is-marked');
            }
            face.appendChild(part);
        }
        return face;
    }

    function createFooter(content) {
        const el = createElement('div', 'c-cube__footer');
        if (!(content instanceof Array)) {
            el.innerText = content;
            return el;
        }
        const container = createElement('div', 'l-cube__footer-container');
        el.appendChild(container);
        for (let text of content) {
            container.appendChild(createElement('div', 'c-cube__footer__part', text));
        }
        return el;
    }

    function createElement(tagName, className = '', content = null) {
        const el = document.createElement(tagName);
        el.className = className;
        if (!!content) {
            el.innerHTML = content;
        }
        return el;
    }
})(window.pwLogo = window.pwLogo || {});

document.addEventListener('DOMContentLoaded', function () {
    pwLogo.render(document.querySelector('.l-container'));
});