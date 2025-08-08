import { render, screen } from '@testing-library/react';

describe('App Test', () => {
  it('should render a simple div', () => {
    render(<div data-testid="test-div">Hello World</div>);
    expect(screen.getByTestId('test-div')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should handle basic math', () => {
    expect(2 + 2).toBe(4);
  });
});
