import { render, screen } from '@testing-library/react';
import Sample from './Components/Sample';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('testing offices', () => {
  render(<Sample />);
  const linkElement = screen.getByText(/From samples Component/i);
  expect(linkElement).toBeInTheDocument();
});

test('checking data hello world', ()=>{
  render(<Sample />);
  const data = screen.getByText(/Hello world/i);
  expect(data).toBeInTheDocument();
  
})