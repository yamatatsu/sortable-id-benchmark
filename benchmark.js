import { Bench } from 'tinybench';
import { ulid } from 'ulid';
import { v6 as uuidv6, v7 as uuidv7 } from 'uuid';
import KSUID from 'ksuid';

const bench = new Bench();

bench
  .add('ulid', () => {
    ulid();
  })
  .add('uuid v6', () => {
    uuidv6();
  })
  .add('uuid v7', () => {
    uuidv7();
  })
  .add('ksuid', () => {
    KSUID.randomSync().string;
  });

console.log('Running ID generation benchmark...\n');

await bench.run();

console.log('Results:');
console.table(bench.table());