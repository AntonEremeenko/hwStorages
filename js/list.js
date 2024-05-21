(function () {
    const getStorage = JSON.parse(localStorage.getItem('form'));

    if (getStorage === null) {
        alert('Error');
        return;
    }

    const div = document.querySelector('[data-list]');
    const objectToArray = Object.values(getStorage);

    const generateList = function (array) {
        if (array.length === 0) {
            return;
        }

        const ul = document.createElement('ul');

        for (let i = 0; i < array.length; i++) {
            const li = document.createElement('li');
            if (Array.isArray(array[i])) {
                li.appendChild(generateList(array[i]));
            } else {
                li.innerHTML = array[i];
            }
            ul.appendChild(li);

        }
        return ul;
    };
    const result = generateList(objectToArray);
    div.appendChild(result);
})()

