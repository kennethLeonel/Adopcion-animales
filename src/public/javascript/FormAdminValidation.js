window.onload = function(){

    let form = document.querySelector('.FormAdmin');

    form.nombre.focus()

    let nombre = document.querySelector('[name=product_name]');
    let edad = document.querySelector('[name=edad]');
    let category = document.querySelector('[name=category]');
    let descripcion = document.querySelector('[name=descripcion]');

    
    form.addEventListener('submit', (e) =>{
        

        let errors = [];
        

        if(nombre.value === ""){
            errors.push({id:'#productName-error', msg: 'Nombre de producto requerido'});
        } else if (nombre.value.length < 3){
            errors.push({id:'#productName-error', msg: 'El nombre del producto debe tener al menos 3 caracteres'})
        }
        else{
            document.querySelector('#productName-error').innerHTML = ''
        }

        if(edad.value === ""){
            errors.push({id:'#edad-error', msg: 'Debe dar un precio'})
        }
        else{
            document.querySelector('#edad-error').innerHTML = ''
        }

    
        if (descripcion.value === ""){
            errors.push({id:'#descripcion-error', msg: 'Debe dar una descripcion al producto'})
        }
        else{
            document.querySelector('#descripcion-error').innerHTML = ''
        }

        if (category.value === ""){
            errors.push({id:'#category-error', msg: 'Debe elegir una categoria'})
        }
        else{
            document.querySelector('#category-error').innerHTML = ''
        }


        if (errors.length > 0) {
            e.preventDefault()
            errors.forEach((error) =>{
                let errorTag = document.querySelector(`${error.id}`)
                errorTag.innerHTML = `<span>${error.msg}<span>`
            })

        }
    })
    



    }