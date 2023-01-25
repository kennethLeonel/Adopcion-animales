window.onload = function () {


    let form = document.querySelector(".registro");
    form.nombre.focus();

    form.addEventListener("submit", (event) => {
        let errores = [];

        let nombre = document.getElementById("nombre");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let imagen = document.getElementById("imagen");
        //-----VALIDACION NOMBRE -------
        if (nombre.value == "") {
            errores.push('El nombre no puede estar vacio')
            nombre.classList.add('is-invalid')
        }
        else if (nombre.value.length < 2) {
            errores.push('El nombre tiene que tener al menos 2 caracteres!')
            nombre.classList.add('is-invalid')
        } else {
            nombre.classList.add('is-valid')
            nombre.classList.remove('is-invalid')
        }

    

        //-----VALIDACION EMAIL -------
        if (email.value == "") {
            errores.push("E-mail no puede quedar vacio")
            email.classList.add('is-invalid')
        } else {
            email.classList.add('is-valid')
            email.classList.remove('is-invalid')
        }

        //-----VALIDACION CONTRASEÑA -------
        if (password.value == "") {
            errores.push("Contraseña no puede quedar vacio")
            password.classList.add('is-invalid')
        }
        else if (password.value.length < 8) {
            errores.push("La contraseña tiene que tener al menos 8 caracteres!")
            password.classList.add('is-invalid')
        } else {
            password.classList.add('is-valid')
            password.classList.remove('is-invalid')
        }

        //----VALIDACION IMAGEN -------
        let allowedExtensions = /(.jpg|.png|.jfif|.gif|.webp|.svg)$/i;

        if (imagen.value == "") {
            errores.push("Tenes que subir una imagen")
            imagen.classList.add('is-invalid')
        } else {
            if (imagen.value) {
                if (!allowedExtensions.exec(imagen.value)) {
                    errores.push('Extensión de imagen no permitida');
                }
            }
        }

        if (errores.length > 0) {
            event.preventDefault();
            let listaErrores = document.querySelector(".errores")
            listaErrores.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                listaErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
           errorBox.style.display = "inline-block"

           okButton.addEventListener("click", function(){
            errorBox.style.display = "none"

           })
        }



    })
}