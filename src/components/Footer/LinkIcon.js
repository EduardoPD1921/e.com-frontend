import React from 'react';

function LinkIcon({ icon, link }) {
  return (
    <a href={link}>
      {icon}
    </a>
  );
};

export default LinkIcon;