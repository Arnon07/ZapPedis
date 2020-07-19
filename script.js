let typeSale = false;
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#showPassword").addEventListener('click', function () {
        const eye = document.querySelector(`#senha`);
        if (eye.getAttribute("type") === 'password') {
            eye.setAttribute('type', 'text');
            return this.setAttribute('class', 'fa fa-eye');
        } 
        eye.setAttribute('type', 'password');
        this.setAttribute('class', 'fa fa-eye-slash');
    })
})

var validacao = 0;

/*if (document.getElementById('to-second-step') !== null){
    document.getElementById('to-second-step').onclick = () => {
        let fields = [
            'empresa',
            'negocio',
            'endereco'
        ];

        fields.map(field => {
            if(document.getElementById(field).value === '' || document.getElementById(field).value === ' ') {
                swal('Os campo  não pode ser vazio')
                return false;
            }

            document.getElementById('first-step').classList.remove('active')
            document.getElementById('second-step').classList.add('active')
        })
    }
}*/
const empresa = document.getElementById('empresa')
const negocio = document.getElementById('negocio')
const endereco = document.getElementById('endereco')

if(document.getElementById('to-second-step') !== null){
    document.getElementById('to-second-step').onclick = () => {
        if (empresa.value.length === 0 || !empresa.value.trim()){
            swal('O campo empresa não pode ser vazio!')
            return false;
        }
        if (negocio.value.length === 0 || !negocio.value.trim()){
            swal('O campo negócio não pode ser vazio!')
            return false;
        }
        if (endereco.value.length === 0 || !endereco.value.trim() || endereco.value.length < 3){
            swal('O campo endereço não pode ser vazio ou menor que 3 caracteres!')
            return false;
        }
        document.getElementById('first-step').classList.remove('active')
        document.getElementById('second-step').classList.add('active')
    }
}


/*function cnFone(){
    let xFone = document.getElementById('telefone');
    let nFone = xFone.value.length;
    let vTelefone = xFone.value;
    if (isNumeric(vTelefone) && nFone >= 8 ){
        validacao ++;
    } else {
        validacao --;
        swal('Telefone inválido','Whats','info');
    }

}
function whats() {
    let xWhats = document.getElementById('whats');
    let nWhats = xWhats.value.length;
    let vWhats = xWhats.value;
    if (isNumeric(vWhats) && nWhats >= 8){
        validacao ++;
    } else {
        validacao --;
        swal('Telefone inválido','','info');
    }
}
if (document.getElementById('to-third-step') !== null){
    document.getElementById('to-third-step').onclick = () => {

        if (document.getElementById('email').value.indexOf('@')==-1 ||
            document.getElementById('email').value.indexOf('.')==-1 ){

            swal('Email invalido','','info');
            // xFone.focus();
            validacao --;
        } else {
            validacao ++;
        }
        cnFone();
        whats();


            document.getElementById('second-step').classList.remove('active')
            document.getElementById('third-step').classList.add('active')

    }
}
*/

const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const whats = document.getElementById('whats')

function isNumeric(str)
{
    var er = /[^0-9]/;
    return (er.test(str));
}

if(document.getElementById('to-third-step') !== null){
    document.getElementById('to-third-step').onclick = () => {
        if (email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1){
            swal('O e-mail não pode ser invalido')
            return false;
        }

        if (isNumeric(telefone.value) || telefone.value.length <= 8){
            swal('O campo telefone esta invalido!')
            return false;
        }
        if (isNumeric(whats.value) || whats.value.length <= 8){
            swal('O campo whtsapp esta invalido!')
            return false;
        }
        document.getElementById('second-step').classList.remove('active')
        document.getElementById('third-step').classList.add('active')
    }
}

if (document.getElementById('to-bedroom-step') !== null){
    document.getElementById('to-bedroom-step').onclick = () => {
        let fields = [
            'vehicle1',
            'vehicle2',
            'vehicle3',
            'vehicle4'
        ];

        fields.map(field => {
            if(document.form.vehicle1[0].checked == false
                && document.form.vehicle1[1].checked == false
                && document.form.vehicle1[2].checked == false
                && document.form.vehicle1[3].checked == false){
                return swal('Os campos não pode ser vazios')
            }
            document.getElementById('third-step').classList.remove('active')
            document.getElementById('bedroom-step').classList.add('active')
        })
    }
}
/*if (document.getElementById('to-fifth-step') !== null){
    document.getElementById('to-fifth-step').onclick = () => {
        let fields = [
            'user',
            'senha'
        ];

        fields.map(field => {
            if(document.getElementById(field).value === '' || document.getElementById(field).value === ' ')
                return swal('Os campos não pode ser vazios')

            document.getElementById('bedroom-step').classList.remove('active')
            document.getElementById('fifth-step').classList.add('active')
        })
    }
}*/
const user = document.getElementById('user')
const senha = document.getElementById('senha')

if(document.getElementById('to-fifth-step') !== null){
    document.getElementById('to-fifth-step').onclick = () => {
        if (user.value.length === 0 || !user.value.trim()){
            swal('O campo usuário não pode ser vazio!')
            return false;
        }
        if (senha.value.length === 0 || !senha.value.trim()){
            swal('O campo senha não pode ser vazio!')
            return false;
        }
        document.getElementById('bedroom-step').classList.remove('active')
        document.getElementById('fifth-step').classList.add('active')
    }
}


document.getElementById('gratis').addEventListener("click", function () {
    if (document.getElementById('gratis').classList.contains('borda')){
        typeSale = false;
        return document.getElementById('gratis').classList.remove('borda')
    }

    typeSale = 'gratis';
    document.getElementById('gratis').classList.add('borda')
})

document.getElementById('plus').addEventListener("click", function () {
    if (document.getElementById('plus').classList.contains('borda')){
        typeSale = false;
        return document.getElementById('plus').classList.remove('borda')
    }

    document.getElementById('plus').classList.add('borda')
    typeSale = 'plus';
})

document.getElementById('gratis').addEventListener("click", function () {
    if (document.getElementById('gratis').classList.contains('borda'))
        document.getElementById('plus').classList.remove('borda')
})
document.getElementById('plus').addEventListener("click", function () {
    if (document.getElementById('plus').classList.contains('borda'))
        document.getElementById('gratis').classList.remove('borda')
})


if (document.getElementById('end-register') !== null){
    document.getElementById('end-register').addEventListener("click", function () {
        if(!typeSale)
            return swal('Você precisa selecionar um plano','','info');
            swal('Seu plano é ' + typeSale);


        let sale = {
            'enterprise' : {
                'empresa' : document.getElementById('empresa').value,
                'negocio' : document.getElementById('negocio').value,
                'endereco' : document.getElementById('endereco').value,
                'qtdPedidos' : document.querySelector('input[name="vehicle1"]:checked').value,
                'plane' : typeSale

            },
            'user' : {
                'email' : document.getElementById('email').value,
                'telefone' : document.getElementById('telefone').value,
                'whats' : document.getElementById('whats').value,
                'user' : document.getElementById('user').value,
                'senha' : document.getElementById('senha').value

            },
        }
        console.log(sale)
    })
}

document.getElementById('back-step-five').addEventListener("click", function () {
    document.getElementById('fifth-step').classList.remove('active')
    document.getElementById('bedroom-step').classList.add('active')
})
document.getElementById('back-step-four').addEventListener("click", function () {
    document.getElementById('bedroom-step').classList.remove('active')
    document.getElementById('third-step').classList.add('active')
})
document.getElementById('back-step-three').addEventListener("click", function () {
    document.getElementById('third-step').classList.remove('active')
    document.getElementById('second-step').classList.add('active')
})
document.getElementById('back-step-two').addEventListener("click", function () {
    document.getElementById('second-step').classList.remove('active')
    document.getElementById('first-step').classList.add('active')
})
