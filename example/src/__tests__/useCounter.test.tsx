import { act } from "react-dom/test-utils";
import { renderHook } from "enzyme-react-hooks";
import { useCounter } from "../hooks/useCounter";

describe("useCounter tests", () => {
  it("should increment counter", () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.increment());

    expect(result.current.count).toBe(1);
  });

  it("should decrement counter", () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.decrement());

    expect(result.current.count).toBe(-1);
  });

  it("should increment by 2", () => {
    const { result } = renderHook(() => useCounter(2));

    act(() => result.current.increment());

    expect(result.current.count).toBe(2);
  });

  it("should rerender with different step", () => {
    const { result, rerender } = renderHook(useCounter, {
      initialProps: 2
    });

    expect(result.current.count).toBe(0);

    act(() => result.current.increment());

    expect(result.current.count).toBe(2);

    rerender(4);

    act(() => result.current.decrement());

    expect(result.current.count).toBe(-2);
  });
});
