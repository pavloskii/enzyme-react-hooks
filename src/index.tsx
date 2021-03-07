import React from "react";
import { mount } from "enzyme";

function renderHook<THookProps, THookReturn>(
  hook: (props: THookProps) => THookReturn,
  options: {
    initialProps?: THookProps;
  } = {}
) {
  const result: { current: THookReturn } = { current: null! };

  const HookWrapper: React.FC<THookProps> = (wrapperProps: THookProps) => {
    result.current = hook({ ...wrapperProps });
    return null;
  };

  const wrapper = mount(
    <HookWrapper {...(options.initialProps ?? ({} as THookProps))} />
  );

  const rerender = (newProps: THookProps) => {
    wrapper.setProps(newProps);
  };

  return { result, rerender };
}

export { renderHook };
