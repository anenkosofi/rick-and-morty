import { CharacterItem } from 'components/CharacterItem';

const getSortedItems = items => {
  return items.sort((prevItem, nextItem) =>
    prevItem.name.localeCompare(nextItem.name)
  );
};

export const CharactersList = ({ items }) => {
  const characters = getSortedItems(items);

  return (
    <ul>
      {characters.map(item => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
