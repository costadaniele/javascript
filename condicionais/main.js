/*function retornaProfissao(full) {

    if (full == 'front') {
        return 'frontend';
    } else if(full == 'back') {
        return 'backend'
    } else {
        return 'fullstack';
    }
}
*/

function retornaProfissao(full) {
    switch (full) {
        case 'front':
            return 'frontend';
        case 'back':
            return 'backend';
        default:
            return 'fullstack';
    }
}

var resultado = retornaProfissao('oi');
console.log(resultado);