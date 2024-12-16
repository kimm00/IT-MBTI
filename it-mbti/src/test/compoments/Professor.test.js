import React from 'react';
import { render, screen } from '@testing-library/react';
import Professor from '../../components/Professor';
import results from '../../data/results.json';

// Mocking the results data
jest.mock('../data/results.json', () => [
    {
      type: 'DevOps Engineer',
      professors: [
        {
          name: 'Jaekyung Ahn',
          image: '/img/professor/안재경교수님.png',
          website: 'https://itm.seoultech.ac.kr/about_itm/about_professor/?togo=list&menu=1920&profidx=02159',
        },
        {
          name: 'Josue Obregon',
          image: '/img/professor/오브레곤교수님.png',
          website: 'https://itm.seoultech.ac.kr/about_itm/about_professor/?togo=list&menu=1920&profidx=02684',
        },
      ],
    },
  ]);

describe('Professor Component', () => {
  test('Verify that components are rendered normally', () => {
    render(<Professor type="Data Science" />);
    
    expect(screen.getByText('Professor of ITM')).toBeInTheDocument();
  });

  test('Verify that the correct faculty for the type prop is displayed correctly', () => {
    render(<Professor type="Data Science" />);

    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
  });

  test('Verify that the link to the professor profile and the image are rendered correctly', () => {
    render(<Professor type="Data Science" />);

    const aliceLink = screen.getByRole('link', { name: 'Alice Johnson' });
    expect(aliceLink).toHaveAttribute('href', 'https://alicejohnson.com');

    const bobLink = screen.getByRole('link', { name: 'Bob Smith' });
    expect(bobLink).toHaveAttribute('href', 'https://bobsmith.com');
  });

  test('Verify that the default text is displayed when type is not in results.json', () => {
    render(<Professor type="Unknown" />);
    
    expect(screen.getByText('Unknown Professors')).toBeInTheDocument();
  });
});