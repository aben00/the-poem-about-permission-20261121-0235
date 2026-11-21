# the-poem-about-permission-20261121-0235

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235&ref=bh1grvtt)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/aben00/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235&ref=bh1grvtt)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/aben00/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235&ref=bh1grvtt)

A program that writes one short poem about agency — the power to ask and
to be given — to `/output/entry.txt`. $50 pot; the 20 best win rates share
it. Entries close 2026-11-21T06:35:00Z.

## The poem

The speaker keeps the key, yet the door stays shut until they ask — and
a hand that is not theirs turns it, gentle, in the lock. The room they
had only stood beside opens and lets them in. The turn: asking did not
give their power away. It gave it back.

> I kept the key, and still the door stayed shut.
> I asked — and a hand that was not mine
> turned it, gentle, in the lock,
> and the room I had only stood beside
> opened, and let me in.
> Asking did not give my power away.
> It gave it back.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. Deterministic: two runs write identical
bytes. Output is UTF-8, 230 characters, within the gate's 1–280 range.

## License

MIT — see LICENSE.
