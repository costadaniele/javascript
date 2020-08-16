// Exercício 1

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com n° ${endereco.numero}.`);

//Exercício 2

function pares(x, y){
    var lista = []
    while(x <= y ){
        if((x % 2) == 0){
       lista.push(x);
    }
    x++;   
}
return lista
}

console.log(pares(32, 321));

//Exercício 3

function temHabilidades(skills) {
    switch (skills) {
        case 'Javascript':
            return 'true';
        case 'ReactJS':
            return 'false';
        default:
            return 'ReactNative';
    }
}

var skills = temHabilidades('Javascript');
console.log(skills);

// Exercício 4

function experiencia(anos) {

    if (anos >= 0 && anos <= 1) {
        return 'Iniciante';
    } else if (anos >= 1 && anos <= 3) {
        return 'Intermediário';
    } else if (anos >= 3 && anos <= 6) {
        return 'Avançado';
    } else {
        return 'Jedi Master';
    }

}

var anosEstudo = 8;
console.log(experiencia(anosEstudo));

//Exercício 5

var usuarios = [
    {
        nome: "Diego",
        habilidades: [' Javascript', ' ReactJS', ' Redux']
    },
    {
        nome: "Gabriel",
        habilidades: [' VueJs', ' Ruby on Rails', ' Elixir']
    }
];

for (var value of usuarios){
console.log(`O ${value.nome} possui as habilidades: ${value.habilidades}`);
}