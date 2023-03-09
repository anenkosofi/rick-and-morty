import { useState, useEffect } from 'react';

import { UserAuth } from 'components/Context/AuthContext';
import { getOneCharacter } from 'services/rick&mortyAPI';

import css from './Profile.module.css';

const Profile = () => {
  const { user } = UserAuth();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const id = Math.floor(Math.random() * (183 - 1) + 1);
    const getResult = async id => {
      const data = await getOneCharacter(id);
      setCharacter(data);
    };
    getResult(id);
  }, []);

  if (!character) {
    return;
  }

  return (
    <main>
      <section>
        <div className={css.container}>
          <h1>Welcome, {user?.displayName}!</h1>
          <img
            className={css.profilePicture}
            src={character.image}
            alt={character.name}
          />
        </div>
      </section>
    </main>
  );
};

export default Profile;
