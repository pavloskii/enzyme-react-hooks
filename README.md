# enzyme-react-hooks

> React hooks testing utils for Enzyme

[![NPM](https://img.shields.io/npm/v/enzyme-react-hooks.svg)](https://www.npmjs.com/package/enzyme-react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save enzyme-react-hooks
```

## Usage

```tsx
import { renderHook } from "enzyme-react-hooks";
import { useCounter } from "./hooks";

it("should increment counter", () => {
  const { result } = renderHook(useCounter);

  act(() => result.current.increment());

  expect(result.current.count).toBe(1);
});
```

## License

MIT © [pavloskii](https://github.com/pavloskii)
