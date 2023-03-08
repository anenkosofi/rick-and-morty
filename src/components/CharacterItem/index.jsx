import { NavLink, useLocation } from 'react-router-dom';

import css from './CharacterItem.module.css';

export const CharacterItem = ({ item: { id, image, name, species } }) => {
  const location = useLocation();

  return (
    <li className={css.characterItem}>
      <NavLink
        className={css.characterItemLink}
        to={`/character/${id}`}
        state={{ from: location }}
      >
        <img src={image} alt={name} className={css.characterImage} />
        <div className={css.characterInfo}>
          <p className={css.name}>{name}</p>
          <p className={css.species}>{species}</p>
        </div>
      </NavLink>
    </li>
  );
};
