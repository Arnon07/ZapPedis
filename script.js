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

if (document.getElementById('to-second-step') !== null){
    document.getElementById('to-second-step').onclick = () => {
        let fields = [
            'empresa',
            'negocio',
            'endereco'
        ];

        fields.map(field => {
            if(document.getElementById(field).value === '' || document.getElementById(field).value === ' ')
                return swal('Os campo '+field+' não pode ser vazio')

            document.getElementById('first-step').classList.remove('active')
            document.getElementById('second-step').classList.add('active')
        })
    }
}
function isNumeric(str)
{
    var er = /^[0-9]+$/;
    return (er.test(str));
}
function cnFone(){
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

        if (validacao === 3){
            document.getElementById('second-step').classList.remove('active')
            document.getElementById('third-step').classList.add('active')
        }
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
if (document.getElementById('to-fifth-step') !== null){
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
        return swal('Seu plano é ' + typeSale);
    })
}
