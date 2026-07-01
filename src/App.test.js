import React from 'react';
import { render } from "@testing-library/react-native";
import App from "./App";

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});



