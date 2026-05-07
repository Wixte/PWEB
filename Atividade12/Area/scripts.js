function RetornaArea(x, y) {
  this.x = x;
  this.y = y;

  this.area = () => {
    return x * y;
  };
}

const x = Number(prompt('Digite um número'));
const y = Number(prompt('Digite outro número'));

const obj1 = new RetornaArea(x, y);
alert(obj1.area());
