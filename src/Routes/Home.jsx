import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map(user => (
          <Card key={user.id} name={user.name} username={user.username} id={user.id} showFavButton={true} />
        ))}
      </div>
    </main>
  );
};

export default Home;