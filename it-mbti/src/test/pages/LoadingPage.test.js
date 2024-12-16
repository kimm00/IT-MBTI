import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from '../../pages/LoadingPage';
import ResultPage from '../../pages/ResultPage';
import userEvent from '@testing-library/user-event';

describe('LoadingPage Component', () => {
  test('Verify that loading text and spinner are rendered', () => {
    render(
      <MemoryRouter>
        <LoadingPage />
      </MemoryRouter>
    );

    expect(screen.getByText('What type will it be? 🤔')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('Verify that it redirects to /result after 5 seconds', async () => {
    render(
      <MemoryRouter initialEntries={['/loading']}>
        <Routes>
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/result" element={<div>Result Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Result Page')).toBeInTheDocument();
    }, { timeout: 6000 });
  });
});