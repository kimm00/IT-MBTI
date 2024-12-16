import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import StartPage from '../../pages/StartPage';

describe('StartPage Component', () => {
  test('Verify that the titles and description are rendered correctly', () => {
    render(
      <MemoryRouter>
        <StartPage />
      </MemoryRouter>
    );

    expect(screen.getByText('What is your')).toBeInTheDocument();
    expect(screen.getByText('IT-MBTI')).toBeInTheDocument();
    expect(
      screen.getByText(/This project is a web application for conducting an IT MBTI test/i)
    ).toBeInTheDocument();
  });

  test('Verify that the image is rendered correctly', () => {
    render(
      <MemoryRouter>
        <StartPage />
      </MemoryRouter>
    );

    const image = screen.getByAltText('deco2');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/img/catimage.png');
  });

  test('Verify that clicking the Start button navigates to /question', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question" element={<div>Question Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const startButton = screen.getByRole('button', { name: 'Start' });
    fireEvent.click(startButton);

    expect(screen.getByText('Question Page')).toBeInTheDocument();
  });
});
