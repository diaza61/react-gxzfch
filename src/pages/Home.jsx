import React from 'react';

function Home() {
  sessionStorage.setItem('key', 'Sample Token');
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
