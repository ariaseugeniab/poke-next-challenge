import HomeComponent from '@/components/home/home-component';
import { screen } from '@testing-library/react';
import { render } from './test-utils';

jest.mock('@/hooks/use-is-mobile', () => ({
  __esModule: true,
  default: () => false,
}));

jest.mock('@/hooks/use-pokemon', () => ({
  usePokemonList: () => ({
    data: { results: [], count: 0 },
    isLoading: false,
  }),
  usePokemonDetailsList: () => ({
    data: [],
    isLoading: false,
  }),
}));

jest.mock('@/hooks/use-query-params', () => ({
  useQueryParams: () => ({
    queryParams: { name: '', type: '', page: '1', orderBy: '' },
    setQueryParams: jest.fn(),
  }),
}));

test('Should render the home component with the correct title', () => {
  render(<HomeComponent />);

  const title = screen.getByRole('heading', {
    name: 'Welcome to the Poke-Next',
  });

  expect(title).toBeDefined();
});

test('Should render the home component with the search bar', () => {
  render(<HomeComponent />);

  const inputs = screen.getAllByRole('textbox');
  const selectInputs = screen.getAllByRole('combobox');
  const clearButton = screen.getByRole('button', {
    name: 'Clear all search filters',
  });

  expect(inputs).toHaveLength(1);
  expect(selectInputs).toHaveLength(2);
  expect(clearButton).toBeDefined();
});
