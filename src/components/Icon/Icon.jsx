/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { ICON_MAP } from '../../constants/icons.constants';
// import './icon.scss';

const Icon= ({name, className=""}) => {

  const svgRef = useRef(null);

  useEffect(() => {
    svgRef.current.innerHTML = ICON_MAP[name];
  }, [name]);

  return (
    <div ref={svgRef} className={className}>
    </div>
  );
};

export default Icon;
