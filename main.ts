// The poem about permission (Node 22, standard library only):
// writes one fixed poem about agency to /output/entry.txt.
// The power to ask and to be given: the speaker keeps the key,
// yet the door stays shut until they ask — and a hand that is not
// theirs turns it. Asking does not surrender power; it returns it.
// Deterministic: the same bytes every run. No network, no randomness,
// no input read: the poem is fixed in the source, so the two grader
// runs write byte-identical files.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I kept the key, and still the door stayed shut.',
  'I asked — and a hand that was not mine',
  'turned it, gentle, in the lock,',
  'and the room I had only stood beside',
  'opened, and let me in.',
  'Asking did not give my power away.',
  'It gave it back.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
