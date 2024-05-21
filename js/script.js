(function (){
    const loginForm = document.getElementById('form');
    const formHandler = (event) => {
        event.preventDefault();
        const formData = {
            email: null,
            firstName: null,
            lastName: null,
            nickname: null,
            password: null,
            option: null,
            file: null,
            message: null,
            terms: null
        };
        const inputs = event.target.querySelectorAll('input, textarea , select');

        for(const input of inputs) {
            if(input.value.trim() === '') return null;
            formData [input.name] = input.value;
        }

        console.log(formData);

        localStorage.setItem('form', JSON.stringify(formData));
        window.location.href = '/js_course_3_hw_40-master/List.html';
    };

    loginForm.addEventListener('submit', formHandler);

})()


