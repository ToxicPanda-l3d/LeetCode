/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let a=0, b=1;
  let next;
  while(true){
      next = a+b;
      yield a;
      a = b;
      b = next;
  }

};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
