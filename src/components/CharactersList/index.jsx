import { CharacterItem } from 'components/CharacterItem';

import css from './CharactersList.module.css';

const getSortedItems = items => {
  return items.sort((prevItem, nextItem) =>
    prevItem.name.localeCompare(nextItem.name)
  );
};

export const CharactersList = ({ items }) => {
  const characters = getSortedItems(items);

  return (
    <ul className={css.charactersList}>
      {characters.map(item => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
