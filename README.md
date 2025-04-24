# 🎲 getRandom

A tiny, type-safe utility to select a random element from a non-empty array. Useful when you need quick randomness without pulling in a full library like lodash.

## ✨ Features

- ⚡ **Zero-dependency** – Built with native JavaScript.
- 🧠 **Type-safe** – Fully typed with generic support.
- 🚫 **Safe-by-default** – Throws clearly when given an empty array.
- 🧩 **Drop-in utility** – Add to any project with no setup.

## 💡 Why?

Sometimes you just need a random element from a list—without worrying about edge cases or bundling unnecessary extras. getRandom gives you that in one tiny, predictable function.

---

## 📦 Installation

```bash
npm install @rewin/get-random
```

## 🧪 Example Usage

```
import { getRandom } from './utils/getRandom';

const colors = ['red', 'green', 'blue'];

const randomColor = getRandom(colors); // might return 'green'
```

```
import { getRandom } from './utils/getRandom';

const fruits = ['🍎', '🍌', '🍇'] as const;

const fruit = getRandom(fruits); // Type is inferred as '🍎' | '🍌' | '🍇'
```

## 🛡️ Gotchas

Will throw an error if you pass an empty array.

Not cryptographically secure — fine for UI randomness, not for security-sensitive applications.

## 🪪 License

MIT — Use freely
