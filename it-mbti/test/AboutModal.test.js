// AboutModal.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutModal from './AboutModal';

describe('AboutModal Component', () => {
  const mockOnClose = jest.fn();

  test('모달이 정상적으로 렌더링되는지 확인', () => {
    render(<AboutModal show={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('About IT-MBTI')).toBeInTheDocument();
  });

  test('닫기 버튼 클릭 시 onClose 함수가 호출되는지 확인', () => {
    render(<AboutModal show={true} onClose={mockOnClose} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('show prop이 false일 때 모달이 보이지 않는지 확인', () => {
    render(<AboutModal show={false} onClose={mockOnClose} />);

    expect(screen.queryByText('About IT-MBTI')).not.toBeInTheDocument();
  });
});