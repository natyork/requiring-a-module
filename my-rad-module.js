var myobj = {
  a: 10,

  b: 5,

  add: function(){
    return this.a + this.b;
    },

  mult: function(){
    return multiply(this.a, this.b);
    }
};

module.exports = myobj;

function multiply(var1, var2) {
  return var1 * var2;
}