import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogInButton } from '@/components/utilities';
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

describe('LogInButton', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LogInButton />);
    expect(getByText('Log in')).toBeInTheDocument();
  });
});
