const countMeme = 17;
export const memeList = new Array(countMeme);
for ( let i = 0; i < countMeme; i++)
memeList[i] = { id: i, person:'Дядя Степа' };

export const tagOptions = [
  {
    key: 'Иван Михайлов',
    text: 'Иван Михайлов',
    value: 'Иван Михайлов',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Михаил Иванов',
    text: 'Михаил Иванов',
    value: 'Михаил Иванов',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Степан Баранов',
    text: 'Степан Баранов',
    value: 'Степан Баранов',
    label: { color: 'green', empty: true, circular: true },
  },
  {
    key: 'Грачик Петросян',
    text: 'Грачик Петросян',
    value: 'Грачик Петросян',
    label: { color: 'green', empty: true, circular: true },
  },
]