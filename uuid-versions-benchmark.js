import { Bench } from 'tinybench';
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5, v6 as uuidv6, v7 as uuidv7 } from 'uuid';

const bench = new Bench();

// UUID v3 and v5 require namespace and name parameters
const NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const NAME = 'example';

bench
  .add('UUID v1', () => {
    uuidv1();
  })
  .add('UUID v3', () => {
    uuidv3(NAME, NAMESPACE);
  })
  .add('UUID v4', () => {
    uuidv4();
  })
  .add('UUID v5', () => {
    uuidv5(NAME, NAMESPACE);
  })
  .add('UUID v6', () => {
    uuidv6();
  })
  .add('UUID v7', () => {
    uuidv7();
  });

console.log('Running UUID versions benchmark (v1-v7)...\n');

await bench.run();

console.log('Results:');
console.table(bench.table());