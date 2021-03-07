# enzyme-react-hooks

> React hooks testing utils for Enzyme

[![NPM](https://img.shields.io/npm/v/enzyme-react-hooks.svg)](https://www.npmjs.com/package/enzyme-react-hooks) [![MIT License](https://img.shields.io/npm/v/enzyme-react-hooks.svg?style=flat-square)](https://github.com/pavloskii/enzyme-react-hooks/blob/main/LICENSE)

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

## Credits
[react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library)
[Kent C. Dodds' Epic React Workshop](https://epicreact.dev/)

## License

MIT © [pavloskii](https://github.com/pavloskii)
