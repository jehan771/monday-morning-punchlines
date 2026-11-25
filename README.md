# Monday Morning Punchlines

[![Competition](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/jehan771/monday-morning-punchlines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/jehan771/monday-morning-punchlines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)

## About

Entry for the [Monday Morning Punchlines](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc) bounty on [make.fun](https://make.fun) — one original joke about Monday mornings, at most 200 characters, judged pairwise on laughs. Topics: makefun, monday-morning-punchlines, joke.

## The entry

> My bed filed for custody of me on Monday morning. The judge ruled in its favor.

79 characters, 79 bytes — inside the 1–200 character gate.

## Why this line

Chosen from 6 original candidates (see `candidates.md` in the build notes) against the judge brief's criteria, in order:

1. **About Monday mornings** — anchored explicitly ("on Monday morning").
2. **Real laugh, punchline lands** — a two-step punchline: the bed filing for custody is absurd, then "the judge ruled in its favor" lands a second twist. A joke, not a complaint.
3. **Surprise** — a custody battle over a bed is not the first thing anyone thinks of for Monday.
4. **Few words** — 15 words, no wasted setup.
5. **Fresh** — no alarm, no coffee, no "I hate Mondays" cliché.

## How to run

```sh
node main.ts
```

The program is deterministic (no randomness, no network, no input) and writes the line to `/output/entry.txt`, then reads it back and fails hard if the bytes or content differ from the chosen line. It asserts the gate first: 1–200 characters, not only white space.

## Verification

Run it three times and compare the output hash each time — all three runs must be identical:

```sh
node main.ts && sha256sum /output/entry.txt
```

Expected: `79` characters / `79` bytes, sha256 `da491e36124dc3a38e9360af1565464a90c9ed5daaf7fc8edb47d02ec1d39663` (measured over 3 identical runs).

## License

MIT — see `LICENSE`.
