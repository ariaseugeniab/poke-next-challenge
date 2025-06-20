import { render, screen } from '@testing-library/react';
import Title from '../title';

describe('Title Component', () => {
  test('renders title with text', () => {
    render(<Title>Test Title</Title>);

    const title = screen.getByRole('heading', { name: /test title/i });
    expect(title).toBeInTheDocument();
  });

  test('applies default classes', () => {
    render(<Title>Default Title</Title>);

    const title = screen.getByRole('heading', { name: /default title/i });
    expect(title).toHaveClass('text-2xl', 'mb-2');
  });

  test('applies custom className', () => {
    render(<Title className="custom-title">Custom Title</Title>);

    const title = screen.getByRole('heading', { name: /custom title/i });
    expect(title).toHaveClass('text-2xl', 'mb-2', 'custom-title');
  });

  test('renders h3 element', () => {
    render(<Title>H3 Title</Title>);

    const title = screen.getByRole('heading', { name: /h3 title/i });
    expect(title.tagName).toBe('H3');
  });

  test('renders children correctly', () => {
    render(
      <Title>
        <span>Nested content</span>
      </Title>
    );

    const nestedContent = screen.getByText('Nested content');
    expect(nestedContent).toBeInTheDocument();
  });
});
