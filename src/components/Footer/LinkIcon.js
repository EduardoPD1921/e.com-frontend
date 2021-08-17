import React from 'react';

function LinkIcon({ icon, link }) {
  return (
    <a target="_blank" rel="noreferrer" href={link}>
      {icon}
    </a>
  );
};

export default LinkIcon;