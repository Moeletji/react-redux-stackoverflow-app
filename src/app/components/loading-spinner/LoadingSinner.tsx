import React, { useEffect, useState } from 'react';
import Spinner from 'react-spinkit';
import styled from 'styled-components';

const Message = styled.small`
	text-align: center;
	display: block;
`;

const spinnerStyles = {
	textAlign: 'center',
	margin: '2em'
};

interface LoadingSpinnerProps {
  message?: string;
  testId?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = 'Loading...',
  testId = 'loading',
}) => {
  const [timer, setTimer] = useState(0);
  let intervalId: NodeJS.Timeout;

  useEffect(() => {
    intervalId = setInterval(updateTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateTimer = () => {
    setTimer(prevTimer => (prevTimer === 15 ? 15 : prevTimer + 1));
    if (timer === 15) clearInterval(intervalId);
  };

  if (timer > 2 && timer <= 5) message = 'Still Loading...';
  if (timer > 5 && timer < 15) message = 'This is taking a while...';
  if (timer >= 15)
    message =
      'Something may have gone wrong, please try refreshing the page.';

  const spinnerStyles = { margin: 'auto' };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }} data-test={testId}>
        <div>
          <Spinner name="three-bounce" fadeIn="none" style={spinnerStyles} />
        </div>
      </div>
      <Message>{message}</Message>
    </>
  );
};

export default LoadingSpinner;
