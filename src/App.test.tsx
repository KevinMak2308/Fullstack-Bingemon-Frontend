import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Chakra UI's useBreakpointValue
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useBreakpointValue: jest.fn().mockReturnValue("125px"), // Mock return value
}));

test('renders learn react link', () => {
  render(<App />);
});
