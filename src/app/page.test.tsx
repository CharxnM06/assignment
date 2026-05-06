import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders both dashboard links', () => {
    render(<Home />);
    
    expect(screen.getByText('Ad Fraud Detection')).toBeInTheDocument();
    expect(screen.getByText('Identity Verification')).toBeInTheDocument();
  });
});
