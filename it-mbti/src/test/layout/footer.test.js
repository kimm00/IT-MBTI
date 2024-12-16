import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../layout/footer';

describe('Footer Component', () => {
  test('Verify that the logo image is rendered', () => {
    render(<Footer />);
    const logo = screen.getByAltText('main-logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/img/seoultech.svg');
  });

  test('Verify that the university name and project title are rendered', () => {
    render(<Footer />);
    expect(screen.getByText('Seoul National University of Science and Technology')).toBeInTheDocument();
    expect(screen.getByText('ITM OSS PROJECT')).toBeInTheDocument();
  });

  test('Verify that the team member names are rendered correctly', () => {
    render(<Footer />);
    expect(screen.getByText('23102003 Kim Doyi')).toBeInTheDocument();
    expect(screen.getByText('23102009 Park Shinhyung')).toBeInTheDocument();
    expect(screen.getByText('23102015 Oh Eunyoung')).toBeInTheDocument();
    expect(screen.getByText('23102025 Lee Haneol')).toBeInTheDocument();
    expect(screen.getByText('23102031 Hwang Yuyoung')).toBeInTheDocument();
  });
});
