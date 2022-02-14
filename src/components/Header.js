import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  const pageTitle = {
    fontSize: '4rem',
    fontWeight: '600',
    marginBottom: '2rem',
    lineHeight: '1em',
    color: '#c9d1d9',
    textTransform: 'lowercase',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <h1 style={pageTitle}>Todos</h1>
    </header>
  );
};

export default Header;
