# enzyme-react-hooks

> React hooks testing utils for Enzyme

[![NPM](https://img.shields.io/npm/v/enzyme-react-hooks.svg)](https://www.npmjs.com/package/enzyme-react-hooks) [![MIT License](https://img.shields.io/npm/l/enzyme-react-hooks.svg?style=flat-square)](https://github.com/pavloskii/enzyme-react-hooks/blob/main/LICENSE)

Easily test react hooks with Enzyme, using enzyme implementation of the renderHook testing util. Based upon [React Hooks Testing Library](https://github.com/testing-library/react-hooks-testing-library). Inspired by the teachings of Kent C. Dodds in his [Epic React Workshop](https://epicreact.dev/). 

## Install

```bash
npm install --save-dev enzyme-react-hooks
```

## Usage

```tsx
import { act } from "react-dom/test-utils";
import { renderHook } from "enzyme-react-hooks";
import { useCounter } from "./useCounter";

it("should increment counter", () => {
  const { result } = renderHook(useCounter);

  act(() => result.current.increment());

  expect(result.current.count).toBe(1);
});
```

## Credits
[React Hooks Testing Library](https://github.com/testing-library/react-hooks-testing-library)

[Kent C. Dodds' Epic React Workshop](https://epicreact.dev/)

## License

MIT © [Igor Pavloski](https://github.com/pavloskii)
