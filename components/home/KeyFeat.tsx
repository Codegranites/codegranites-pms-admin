import React from 'react';
import cn from '../../utils/util';
import useInView from '../../hooks/useInView';
import { handleMouseEnter } from '../../utils/text-effect';

const KeyFeat = () => {
  const KeyFeatRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(KeyFeatRef);
  return <div>KeyFeat</div>;
};

export default KeyFeat;
