class Conta {
  constructor() {
    this._nomeCorrentista = "";
    this._banco = "";
    this._numeroConta = "";
    this._saldo = 0;
  }

  get nomeCorrentista() {
    return this._nomeCorrentista;
  }

  set nomeCorrentista(valor) {
    this._nomeCorrentista = valor;
  }

  get banco() {
    return this._banco;
  }

  set banco(valor) {
    this._banco = valor;
  }

  get numeroConta() {
    return this._numeroConta;
  }

  set numeroConta(valor) {
    this._numeroConta = valor;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = parseFloat(valor);
  }
}

class Corrente extends Conta {
  constructor() {
    super();
    this._saldoEspecial = 0;
  }

  get saldoEspecial() {
    return this._saldoEspecial;
  }

  set saldoEspecial(valor) {
    this._saldoEspecial = parseFloat(valor);
  }
}

class Poupanca extends Conta {
  constructor() {
    super();
    this._juros = 0;
    this._dataVencimento = "";
  }

  get juros() {
    return this._juros;
  }

  set juros(valor) {
    this._juros = parseFloat(valor);
  }

  get dataVencimento() {
    return this._dataVencimento;
  }

  set dataVencimento(valor) {
    this._dataVencimento = valor;
  }
}

const objCorrente = new Corrente();
objCorrente.nomeCorrentista = prompt(
  "CONTA CORRENTE\nDigite o nome do correntista:",
);
objCorrente.banco = prompt("CONTA CORRENTE\nDigite o nome do banco:");
objCorrente.numeroConta = prompt("CONTA CORRENTE\nDigite o número da conta:");
objCorrente.saldo = prompt("CONTA CORRENTE\nDigite o saldo inicial:");
objCorrente.saldoEspecial = prompt(
  "CONTA CORRENTE\nDigite o limite do saldo especial:",
);

const objPoupanca = new Poupanca();
objPoupanca.nomeCorrentista = prompt(
  "CONTA POUPANÇA\nDigite o nome do correntista:",
);
objPoupanca.banco = prompt("CONTA POUPANÇA\nDigite o nome do banco:");
objPoupanca.numeroConta = prompt("CONTA POUPANÇA\nDigite o número da conta:");
objPoupanca.saldo = prompt("CONTA POUPANÇA\nDigite o saldo inicial:");
objPoupanca.juros = prompt("CONTA POUPANÇA\nDigite a taxa de juros (%):");
objPoupanca.dataVencimento = prompt(
  "CONTA POUPANÇA\nDigite a data de vencimento:",
);

document.getElementById("resultado").innerHTML = `
    <h2>Dados da Conta Corrente</h2>
    <p><strong>Nome:</strong> ${objCorrente.nomeCorrentista}</p>
    <p><strong>Banco:</strong> ${objCorrente.banco}</p>
    <p><strong>Número da Conta:</strong> ${objCorrente.numeroConta}</p>
    <p><strong>Saldo:</strong> R$ ${objCorrente.saldo.toFixed(2)}</p>
    <p><strong>Saldo Especial:</strong> R$ ${objCorrente.saldoEspecial.toFixed(2)}</p>
    <hr>
    <h2>Dados da Conta Poupança</h2>
    <p><strong>Nome:</strong> ${objPoupanca.nomeCorrentista}</p>
    <p><strong>Banco:</strong> ${objPoupanca.banco}</p>
    <p><strong>Número da Conta:</strong> ${objPoupanca.numeroConta}</p>
    <p><strong>Saldo:</strong> R$ ${objPoupanca.saldo.toFixed(2)}</p>
    <p><strong>Juros:</strong> ${objPoupanca.juros.toFixed(2)}%</p>
    <p><strong>Vencimento:</strong> ${objPoupanca.dataVencimento}</p>
`;
