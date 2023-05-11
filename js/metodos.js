$(function(){
    $("#datos").validate({
        rules:{
            primerNombre:{
                required:true
            },
            primerApellido:{
                required:true
            },
            segundoApellido:{
                required:true
            },
            correoElectronico:{
                required:true,
                email:true
            },
            numeroTelefono:{
                number:true
            },
            genero:{
                required:true
            },
            fechaNacimiento:{
                required:true,
                date:true
            },
            region:{
                required:true
            },
            comuna:{
                required:true
            },
            password:{
                required:true
            },
            password2:{
                required:true,
                equalTo:password
            },
            flexCheckDefault:{
                required:true
            },
        },//rules
        messages:{
            primerNombre:{
                required:'*Campo obligatorio',
                minlength:'Mínimo de carácteres (3)'
            },
            primerApellido:{
                required:'*Campo obligatorio',
                minlength:'Mínimo de carácteres (3)'
            },
            segundoApellido:{
                required:'*Campo obligatorio',
                minlength:'Mínimo de carácteres (3)'
            },
            correoElectronico:{
                required:'*Campo obligatorio',
                email: 'Formato de correo inválido'
            },
            genero:{
                required:'Selecciona una opción',
            },
            fechaNacimiento:{
                required:'Selecciona una fecha válida',
                min:'Fecha incorrecta'
            },
            region:{
                required:'Selecciona una opción',
            },
            comuna:{
                required:'Selecciona una opción',
            },
            password:{
                required:'*Campo obligatorio',
                minlength:'Mínimo de carácteres (8)'
            },
            password2:{
                required:'*Campo obligatorio',
                minlength: 'Mínimo de carácteres (8)',
                equalTo: 'Contraseñas no coinciden'
            },
            flexCheckDefault:{
                required:'Marcar casilla',
            },

        },//messages    
        submitHandler: function(form) {
            window.location.href = "registroExitoso.html";
            return false; 
        }            
    })
});


function colorOrange(obj){
    obj.style.color='orange';
}

function colorBlanco(obj){
    obj.style.backgroundColor='white';
}

function upperText(texto)
{
    const x = texto;
    x.value= x.value.toUpperCase();
}

function colorFondo(obj){
    obj.style.backgroundColor='pink';
};


  