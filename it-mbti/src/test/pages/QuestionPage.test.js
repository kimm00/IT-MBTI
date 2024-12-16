import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import QuestionPage from '../../pages/QuestionPage';
import questions from '../../data/questions.json';

jest.mock('../../components/Questions', () => ({ questionText, onAnswer }) => (
  <div>
    <p>{questionText}</p>
    <button onClick={() => onAnswer(1)}>Answer 1</button>
  </div>
));

describe('QuestionPage Component', () => {
  test('Verify that the first question is displayed', () => {
    render(
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    );

    expect(screen.getByText(questions[0].question)).toBeInTheDocument();
  });

  test('Verify that progress bar updates when answering a question', () => {
    render(
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 20%');

    fireEvent.click(screen.getByText('Answer 1'));
    expect(progressBar).toHaveStyle('width: 40%');
  });

  test('Verify that Previous button goes to the previous question', () => {
    render(
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Answer 1'));
    fireEvent.click(screen.getByText('⬅ Previous'));
    expect(screen.getByText(questions[0].question)).toBeInTheDocument();
  });

  test('Verify that navigating to /loading when last question is answered', () => {
    render(
      <MemoryRouter initialEntries={['/question']}>
        <Routes>
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/loading" element={<div>Loading Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    // 마지막 질문까지 답변
    for (let i = 0; i < questions.length; i++) {
      fireEvent.click(screen.getByText('Answer 1'));
    }

    expect(screen.getByText('Loading Page')).toBeInTheDocument();
  });
});
