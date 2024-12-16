import React from 'react';
import { render, screen } from '@testing-library/react';
import Cat from '../components/Cat';
import results from '../data/results.json';

// Mocking the image for the test environment
jest.mock('../../data/results.json', () => [
  {
    type: 'UI/UX Designer',
    catType: 'Artistic Scottish Fold Type',
    catImage: '/img/cat/cat1.png',
  },
  {
    type: 'Frontend Developer',
    catType: 'Cool-Headed Oriental Shorthair Type',
    catImage: '/img/cat/cat2.png',
  },
]);

describe('Cat Component', () => {
  test('Verify that components are rendered normally', () => {
    render(<Cat title="Persian" />);
    
    expect(screen.getByText('Persian')).toBeInTheDocument();
    expect(screen.getByText('Fluffy Persian Cat')).toBeInTheDocument();
  });

  test('Verify that the correct data is displayed according to the Title prop', () => {
    render(<Cat title="Siamese" />);
    
    expect(screen.getByText('Siamese')).toBeInTheDocument();
    expect(screen.getByText('Elegant Siamese Cat')).toBeInTheDocument();
  });

  test('Verify that the default text is displayed when the type is not in results.json', () => {
    render(<Cat title="Unknown" />);
    
    expect(screen.getByText('Unknown Title')).toBeInTheDocument();
    expect(screen.getByText('Unknown Cat Type')).toBeInTheDocument();
  });

  test('Verify that the image is rendered correctly', () => {
    render(<Cat title="Persian" />);
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/images/persian-cat.jpg');
    expect(img).toHaveAttribute('alt', '/images/persian-cat.jpg');
  });
});
