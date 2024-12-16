import React from 'react';
import { render, screen } from '@testing-library/react';
import Graph from '../../components/Graph';

describe('Graph Component', () => {
  test('Verify that components are rendered normally', () => {
    const scores = [['Frontend', 7.5], ['Backend', 5]];

    render(<Graph scores={scores} />);

    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  test('Verify the percentage is displayed correctly based on the score', () => {
    const scores = [['Frontend', 7.5], ['Backend', 5]];
    const maxScorePerType = 10;
    const scaledMaxTotalScore = scores.length * maxScorePerType;

    const frontendPercentage = Math.round((7.5 / scaledMaxTotalScore) * 100);
    const backendPercentage = Math.round((5 / scaledMaxTotalScore) * 100);

    render(<Graph scores={scores} />);

    expect(screen.getByText(`${frontendPercentage}%`)).toBeInTheDocument();
    expect(screen.getByText(`${backendPercentage}%`)).toBeInTheDocument();
  });

  test('If there is no score, make sure the percentage is displayed as 0', () => {
    const scores = [['Frontend', 0], ['Backend', 0]];

    render(<Graph scores={scores} />);

    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  test('Verify that a component is empty when it is in an empty score array', () => {
    render(<Graph scores={[]} />);

    expect(screen.queryByText('%')).not.toBeInTheDocument();
  });
});