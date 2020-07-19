const nomeindex = document.getElementById('nome-index');
const emailindex = document.getElementById('email-index');
const telefoneindex = document.getElementById('telefone-index');
function isNumeric(str)
{
    var er = /[^0-9]/;
    return (er.test(str));
}
if (document.getElementById('enviainfo') !== null){
    document.getElementById('enviainfo').onclick = function(){
        let that = this;
        if (nomeindex.value.length === 0 || !nomeindex.value.trim())
            return swal('O campo nome não pode ser vazio!')


        if (emailindex.value.indexOf('@')==-1 || emailindex.value.indexOf('.')==-1)
            return swal('O e-mail não pode ser invalido')



        if (isNumeric(telefoneindex.value) || telefoneindex.value.length <= 8)
            return swal('O campo telefone esta invalido!')

        let client = {
            'client': {
                'nome': nomeindex.value,
                'email': emailindex.value,
                'telefone': telefoneindex.value

            }
        }

        that.disabled = true;
        that.innerHTML = `
                    Enviando
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        `;
    }
}