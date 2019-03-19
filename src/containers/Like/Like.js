import React, {useState} from 'react';
import Heart from '@/components/UI/Heart/Heart';

const like = () => {
  const [isActive, setActive] = useState(false);

  return <Heart isActive={isActive} onClick={() => setActive(!isActive)}/>;
};

export default like;
