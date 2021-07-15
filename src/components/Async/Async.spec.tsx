import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from '.';

test('it render correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument();
  expect(await screen.findByText('Button')).toBeInTheDocument();

  await waitFor(() => {
    return expect(screen.getByText('Button')).toBeInTheDocument();
  });

  await waitFor(() => {
    return expect(screen.queryByText('Button')).toBeInTheDocument();
  });

  await waitForElementToBeRemoved(screen.queryByText('Button'));
});