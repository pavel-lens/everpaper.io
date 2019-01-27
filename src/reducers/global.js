export const initialState = {
  isLoading: false,
  papers: [
    {
      title: 'Saturday at park',
      content:
        'Today we went to park with my wife and our doggie Mia. Both were excited as it was a beautiful autumn day, the sun was shinning and the',
      created: new Date(),
      edited: new Date(),
    },
    {
      title: 'Intense day at work',
      content:
        'The day started slowly with my usual coffee howoever things soon turned to opposite direction',
      created: new Date(),
      edited: new Date(),
    },
    {
      title: 'Afternoon drinks with friends',
      content:
        'Today we went to park with my wife and our doggie Mia. Both were excited as it was a beautiful autumn day, the sun was shinning and the',
      created: new Date(),
      edited: new Date(),
    },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_IS_LOADING':
      return state.isLoading;

    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
}
