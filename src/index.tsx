import React from "react";
import { mount } from "enzyme";

function renderHook<THookProps, THookReturn>(
  hook: (props: THookProps) => THookReturn,
  options: {
    initialProps?: THookProps;
  } = {}
) {
  const result: { current: THookReturn } = { current: null! };

  const HookWrapper: React.FC<{ hookProps: THookProps | undefined }> = (
    props
  ) => {
    result.current = hook(props.hookProps as THookProps);
    return null;
  };

  const wrapper = mount(<HookWrapper hookProps={options.initialProps} />);

  const rerender = (newProps: THookProps) => {
    wrapper.setProps({ hookProps: newProps });
  };

  return { result, rerender };
}

export { renderHook };
