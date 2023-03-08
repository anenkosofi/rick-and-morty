import { useState, useEffect } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { getOneCharacter } from 'services/rick&mortyAPI';

import css from './CharacterDetails.module.css';

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
    <main>
      <div className={css.container}>
        <NavLink className={css.backLink} to={backLinkHref}>
          <FiArrowLeft size={24} />
          <span>Go back</span>
        </NavLink>
        <div className={css.details}>
          <img src={image} alt={name} className={css.detailsImage} />
          <h1 className={css.detailsHeading}>{name}</h1>
          <h2 className={css.detailsSubheading}>Informations</h2>
          <ul className={css.detailsList}>
            <li className={css.detailsItem}>
              <span className={css.detailsItemLabel}>Gender</span>
              <span className={css.detailsItemName}>{gender}</span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsItemLabel}>Status</span>
              <span className={css.detailsItemName}>{status}</span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsItemLabel}>Specie</span>
              <span className={css.detailsItemName}>{species}</span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsItemLabel}>Origin</span>
              <span className={css.detailsItemName}>{origin.name}</span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsItemLabel}>Type</span>
              <span className={css.detailsItemName}>
                {type.length ? type : 'Unknown'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
