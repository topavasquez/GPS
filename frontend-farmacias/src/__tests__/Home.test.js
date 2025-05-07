// frontend/src/__tests__/Home.test.js

import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  it('should render the welcome message', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to the Home page/i)).toBeInTheDocument();
  });
});
