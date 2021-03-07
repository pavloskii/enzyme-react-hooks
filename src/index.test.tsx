import { useState, useCallback } from "react";
import { act } from "react-dom/test-utils";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { renderHook } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("renderHook tests", () => {
  describe('custom hook', () => {
    function useCounter() {
      const [count, setCount] = useState(0)
  
      const increment = useCallback(() => setCount(count + 1), [count])
      const decrement = useCallback(() => setCount(count - 1), [count])
  
      return { count, increment, decrement }
    }
  
    it('should increment counter', () => {
      const { result } = renderHook(useCounter)
  
      act(() => result.current.increment())
  
      expect(result.current.count).toBe(1)
    })
  
    it('should decrement counter', () => {
      const { result } = renderHook(useCounter)
  
      act(() => result.current.decrement())
  
      expect(result.current.count).toBe(-1)
    })
  })

  it("useState hook", () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useState("initial");
      return { value, setValue };
    });

    expect(result.current.value).toBe("initial");

    act(() => {
      result.current.setValue("new value");
    });

    expect(result.current.value).toBe("new value");
  });
});
