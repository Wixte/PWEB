class Conta {
  constructor() {
    this._nome;
    this._correntista;
    this._banco;
    this._numeroConta;
    this._saldo;
  }

  getNome() {
    return this._nome;
  }
  getCorrentista() {
    return this._correntista;
  }
  getBanco() {
    return this._banco;
  }
  getNumeroConta() {
    return this._numeroConta;
  }
  getSaldo() {
    return this._saldo;
  }
  setNome(valor) {
    this._nome = valor;
  }
  setCorrentista(valor) {
    this._correntista = valor;
  }
  setBanco(valor) {
    this._banco = valor;
  }
  setNumeroConta(valor) {
    this._numeroConta = valor;
  }
  setSaldo(valor) {
    this._saldo = valor;
  }
}

class ContaCorrente extends Conta {
  constructor() {
    super();
    this._saldoEspecial;
  }
  getSaldoEspecial() {
    return this._saldoEspecial;
  }
  setSaldoEspecial(valor) {
    this._saldoEspecial = valor;
  }
}

class ContaPoupanca extends Conta {
  constructor() {
    super();
    this._juros;
    this._dataVencimento;
  }
  getJuros() {
    return this._juros;
  }

  setJuros(valor) {
    this._juros = valor;
  }
  getDataVencimento() {
    return this._dataVencimento;
  }
  setDataVencimento(valor) {
    this._dataVencimento = valor;
  }
}

const objCorrente = new ContaCorrente();
const objPoupanca = new ContaPoupanca();

objCorrente.setNome(prompt('Digite o Nome'));
objCorrente.setCorrentista(prompt('Digite o Correntista'));
objCorrente.setBanco(prompt('Digite o Banco'));
objCorrente.setNumeroConta(Number(prompt('Digite o número da conta')));
objCorrente.setSaldo(Number(prompt('Digite o saldo')));
objCorrente.setSaldoEspecial(Number(prompt('Digite o saldo especial')));

alert(
  `Nome:${objCorrente.getNome()} Correntista:${objCorrente.getCorrentista()} Banco:${objCorrente.getBanco()} Numero da conta:${objCorrente.getNumeroConta()} Saldo:${objCorrente.getSaldo()} Saldo especial:${objCorrente.getSaldoEspecial()}`,
);

objPoupanca.setNome(prompt('Digite o nome'));
objPoupanca.setCorrentista(prompt('Digite o correntista'));
objPoupanca.setBanco(prompt('Digite o banco'));
objPoupanca.setNumeroConta(Number(prompt('Digite o número da conta')));
objPoupanca.setSaldo(Number(prompt('Digite o saldo')));
objPoupanca.setJuros(Number(prompt('Digite o juros')));
objPoupanca.setDataVencimento(prompt('Digite a data de vencimento'));

alert(
  `Nome:${objPoupanca.getNome()} Correntista:${objPoupanca.getCorrentista()} Banco:${objPoupanca.getBanco()} Numero da conta:${objPoupanca.getNumeroConta()} Saldo:${objPoupanca.getSaldo()} Juros:${objPoupanca.getJuros()} Data vencimento:${objPoupanca.getDataVencimento()}`,
);
