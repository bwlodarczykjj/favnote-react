export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => {
  // funkcja zaciagnieta z GH ID.js do generowania unique id (https://gist.github.com/gordonbrander/2230317)
  const getId = () => {
    return `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  };

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      id: getId(),
      itemContent,
    },
  };
};

//     id: 1,
//     title: 'Przykładowa notatka statyczna, nie pobierana z nikąd',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     twitterName: 'hello_roman',
//     articleUrl: 'https://youtube.com/helloroman',
//     created: '1 day',
