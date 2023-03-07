import { NavLink, useLocation } from 'react-router-dom';

export const CharacterItem = ({ item: { id, image, name, species } }) => {
  const location = useLocation();

  return (
    <li>
      <NavLink to={`/character/${id}`} state={{ from: location }}>
        <img src={image} alt={name} />
        <div>
          <p>{name}</p>
          <p>{species}</p>
        </div>
      </NavLink>
    </li>
  );
};
