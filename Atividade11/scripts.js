let aluno1 = new Object();
// usando Object();
aluno1.ra = '00001234';
aluno1.nome = 'Guilherme';
console.log(`ra=${aluno1.ra} nome=${aluno1.nome}`);

let aluno2 = {};
// usando chaves {}
aluno2.ra = '00001235';
aluno2['nome'] = 'Gabriela';
console.log(`ra=${aluno2.ra} nome=${aluno2.nome}`);

// literal
let aluno3 = {
  ra: '00001236',
  nome: 'Fabricio',
};

console.log(`ra=${aluno3.ra} nome=${aluno3.nome}`);

// Usando função construtora
function Aluno(ra, nome) {
  this.ra = ra;
  this.nome = nome;
  this.mostraDados = function () {
    return `ra=${this.ra} nome=${this.nome}`;
  };
}

let aluno4 = new Aluno('00001233', 'Jonas');
console.log(aluno4.mostraDados());

function Aluno2() {
  let ra;
  let nome;
  this.setRa = function (value) {
    this.ra = value;
  };
  this.getRa = function () {
    return this.ra;
  };
  this.setNome = function (value) {
    this.nome = value;
  };
  this.getNome = function () {
    return this.nome;
  };
}

let aluno6 = new Aluno2();
aluno6.setNome('Nickolas');
aluno6.setRa('00001321');
console.log(`ra=${aluno6.getRa()} nome=${aluno6.getNome()}`);

function AlunoADS() {
  let numLab;
  this.setNumLab = function (value) {
    this.numLab = value;
  };
  this.getNumLab = function () {
    return this.numLab;
  };
}

AlunoADS.prototype = new Aluno2();
let aluno7 = new AlunoADS();
aluno7.setNome('Maria luiza');
aluno7.setRa('00001124');
aluno7.setNumLab(5);
console.log(
  `ra=${aluno7.getRa()} nome=${aluno7.getNome()} lab=${aluno7.getNumLab()}`,
);

class Aluno1 {
  constructor() {
    this._ra;
    this._nome;
  }
  setNome(value) {
    this._nome = value;
  }
  getNome() {
    return this._nome;
  }
  setRa(value) {
    this._ra = value;
  }
  getRa() {
    return this._ra;
  }
}

let objAluno = new Aluno1();
objAluno.setNome('Eduardo');
objAluno.setRa('00002142');
console.log(`ra=${objAluno.getRa()} nome=${objAluno.getNome()}`);

class AlunoADS1 extends Aluno1 {
  constructor() {
    super();
    this._numLab;
  }
  setNumLab(value) {
    this._numLab = value;
  }
  getNumLab() {
    return this._numLab;
  }
}

let objAlunoADS = new AlunoADS1();
objAlunoADS.setNome('Caio');
objAlunoADS.setRa('00002134');
objAlunoADS.setNumLab(6);
console.log(
  `ra=${objAlunoADS.getRa()} nome=${objAlunoADS.getNome()} numlab=${objAlunoADS.getNumLab()}`,
);

let obj1 = new Object();
let obj2 = obj1;
obj1.nome = 'Matheus';
console.log(obj2.nome);

class ContaBancaria {
  #cpf;

  constructor(nome, saldoInicial) {
    this.nome = nome;
    this.saldo = saldoInicial;
  }

  setCpf(value) {
    this.cpf = value;
  }
  getCpf() {
    return this.cpf;
  }
  getSaldo() {
    return this.saldo;
  }
  depositar(valor) {
    this.saldo += valor;
    this.#registrarTrasacao(valor);
  }

  #registrarTrasacao(valor) {
    console.log(
      `Deposito de R$ ${valor} realizado. Saldo R$ ${this.saldo} para cpf ${this.getCpf()} ou ${this.#cpf}`,
    );
  }
}

const conta = new ContaBancaria('Gustavo', 1000);
conta.setCpf(55471144);
conta.depositar(50);

const arr = [
  ['codigo', 1],
  ['nome', 'João'],
  ['idade', 23],
];

const obj = Object.fromEntries(arr);
console.log(obj);
console.log(obj.nome);
console.log(JSON.stringify(obj));

const objEmpresa = {
  empresa: 'ZF do Brasil',
};
const funcionario = Object.create(objEmpresa, {
  nome: {
    value: 'Jorge',
  },
  endereco: {
    value: 'Av. São Paulo',
  },
});

console.log(funcionario.empresa);
console.log(funcionario.nome);
console.log(funcionario.endereco);

const objNovaEmpresa = {
  empresa: 'Baffs',
};
const objVeiculo = {
  placa: 'XXX 1234',
};

const motorista = Object.assign(
  {
    cpf: '12541454',
  },
  objNovaEmpresa,
  objVeiculo,
);

console.log(motorista);
