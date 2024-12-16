import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ResultPage from '../../pages/ResultPage';

// Mock 하위 컴포넌트
jest.mock('../../components/Cat', () => ({ title }) => <div data-testid="cat-component">{title}</div>);
jest.mock('../../components/Detail', () => ({ type }) => <div data-testid="detail-component">{type}</div>);
jest.mock('../../components/Graph', () => ({ scores }) => <div data-testid="graph-component">{JSON.stringify(scores)}</div>);
jest.mock('../../components/Professor', () => ({ type }) => <div data-testid="professor-component">{type}</div>);
jest.mock('../../components/Skill', () => ({ type }) => <div data-testid="skill-component">{type}</div>);

describe('ResultPage Component', () => {
  const mockScores = {
    'Frontend Developer': 10,
    'Backend Developer': 8,
    'DevOps Engineer': 10,
  };

  test('Verify that components are rendered correctly with the highest score', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/result', state: { scores: mockScores } }]}>
        <Routes>
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('cat-component')).toHaveTextContent('Frontend Developer');
    expect(screen.getByTestId('detail-component')).toHaveTextContent('Frontend Developer');
    expect(screen.getByTestId('graph-component')).toHaveTextContent(JSON.stringify(Object.entries(mockScores)));
    expect(screen.getByTestId('professor-component')).toHaveTextContent('Frontend Developer');
    expect(screen.getByTestId('skill-component')).toHaveTextContent('Frontend Developer');
  });

  test('Verify that Next button changes the result type', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/result', state: { scores: mockScores } }]}>
        <Routes>
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </MemoryRouter>
    );

    const nextButton = screen.getByAltText('Next');
    expect(screen.getByTestId('cat-component')).toHaveTextContent('Frontend Developer');

    fireEvent.click(nextButton);
    expect(screen.getByTestId('cat
