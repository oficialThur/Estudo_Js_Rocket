// como criaum obj


// estrutura de um obj
const obj = {}

// obj com propriendade e metodo
const user = {
    // chave ou valor
    email: 'of@gmail.com',
    // propriedade alinhada
    name: {
        primeiro_nome: 'arthur',
        seguindo_nome: 'Henrique'
    },
    idade: 20,
    endereco: {
        rua: 'seringueira',
        bairro: 'patrocino',
        numero: 247
    },
    // metodo 
    menssage: () => {
        console.log('oi')
    }
}

/* acessando propriedade e metodo notação de ponto */

console.log(user.email);

// executando o metodo do obj 
user.menssage();

// notação de colchetes
console.log(user['email']);

console.log(user["name"]["seguindo_nome"]);

//--------------------------------------------------------------------


const new_user = {
    new_name: 'Arthur',
    new_message: () => {
        console.log(`oi ${this.new_name}}`)
    }
}
