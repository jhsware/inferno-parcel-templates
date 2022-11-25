import { render } from 'inferno';
import { describe, expect, it, beforeEach } from "@jest/globals";

import { Button } from "../src/Button";

describe('Button', () => {
  let node;
  beforeEach(() => {
    node = document.createElement('div');
  })

  it('can be rendered', () => {
    render(<Button>Click</Button>, node);
    expect(node).toMatchSnapshot();
  });
});