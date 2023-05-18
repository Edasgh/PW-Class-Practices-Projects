// node complexNumber.js
class complexNumber {
  #real;
  #imaginary;
  constructor(r, i) {
    this.#real = r;
    this.#imaginary = i;
  }
  get real(){
    return this.#real;
  }
  get imag(){
    return this.#imaginary;
  }
  addComplexNum(c){
this.#real+=c.real;
this.#imaginary+=c.imag;
  }
  display() {
    console.log("(",this.#real,"+", this.#imaginary,"i ",")");
  }
}

const c1=new complexNumber(2,3)
c1.display();

const c2=new complexNumber(4,5)
c1.addComplexNum(c2);
c2.display();
c1.display();