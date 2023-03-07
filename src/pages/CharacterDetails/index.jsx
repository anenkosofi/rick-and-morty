import { useState, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import { getOneCharacter } from 'services/rick&mortyAPI';

export const CharacterDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getResult = async id => {
      const data = await getOneCharacter(id);
      setCharacter(data);
    };
    getResult(id);
  }, [id]);

  const backLinkHref = location.state?.from ?? '/';

  if (!character) {
    return;
  }
  const {
    gender,
    image,
    name,
    origin,
    species,
    status,
    type = 'Unknown',
  } = character;

  return (
    <>
      <NavLink to={backLinkHref}>Go back</NavLink>
      <div>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h2>Informations</h2>
        <ul>
          <li>
            <span>Gender</span>
            <span>{gender}</span>
          </li>
          <li>
            <span>Status</span>
            <span>{status}</span>
          </li>
          <li>
            <span>Specie</span>
            <span>{species}</span>
          </li>
          <li>
            <span>Origin</span>
            <span>{origin.name}</span>
          </li>
          <li>
            <span>Type</span>
            <span>{type}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
