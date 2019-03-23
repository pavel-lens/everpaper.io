export const initialState = {
  isLoading: false,
  list: [
    {
      title: 'Saturday at park',
      content:
        'Today we went to park with my wife and our doggie Mia. Both were excited as it was a beautiful autumn day, the sun was shinning and the',
      created: new Date(),
      edited: new Date(),
    },
    {
      title: 'Intense day at work',
      content: 'The day started slowly with my usual coffee howoever things soon turned to opposite direction',
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

export default {
  state: initialState, // initial state
  reducers: {
    addPaper(state, paper) {
      return {
        ...state,
        list: [...state.list, paper],
      };
    },
    deletePaper(state, paperId) {
      return {
        ...state,
        list: state.list.filter((paper) => paper.id !== paperId),
      };
    },
    setLoading(state, isLoading) {
      return {
        ...state,
        isLoading,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async share(payload, rootState) {
      console.log('Simulating share..');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log('Sharing done..');
    },
  }),
};
