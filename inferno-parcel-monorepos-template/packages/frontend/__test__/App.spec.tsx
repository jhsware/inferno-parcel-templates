import { render } from 'inferno';
import { describe, expect, it, beforeEach } from "@jest/globals";

import { App } from "../src/App";

describe('App', () => {
  let node;
  beforeEach(() => {
    node = document.createElement('div');
  })

  it('can be rendered', () => {
    render(<App title="Test">test</App>, node);
    expect(node).toMatchSnapshot();
  });
});