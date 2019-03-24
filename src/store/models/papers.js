export const initialState = {
  isLoading: false,
  list: [
    {
      id: 'ac165dc4-2efb-46fb-aee7-0189d393f41d',
      title: 'Saturday at park',
      content:
        'Today we went to park with my wife and our doggie Mia. Both were excited as it was a beautiful autumn day, the sun was shinning and the',
      created: new Date(),
      edited: new Date(),
      contentState: {
        blocks: [
          {
            key: '68oop',
            text: 'Saturday at park',
            type: 'header-one',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
          {
            key: '5l2pa',
            text:
              'Today we went to park with my wife and our doggie Mia. Both were excited as it was a beautiful autumn day, the sun was shinning and the',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
        ],
        entityMap: {},
      },
    },
    {
      id: 'fc220818-b2a8-497e-97d0-c93907521e1a',
      title: 'Intense day at work',
      content: 'The day started slowly with my usual coffee howoever things soon turned to opposite direction',
      created: new Date(),
      edited: new Date(),
      contentState: {
        blocks: [
          {
            key: '3vaph',
            text: 'Intense day at work',
            type: 'header-one',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
          {
            key: '30qvv',
            text: 'The day started slowly with my usual coffee howoever things soon turned to opposite direction',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
        ],
        entityMap: {},
      },
    },
    {
      id: 'dd114bfa-7732-48fc-aa43-13af08073a80',
      title: 'Afternoon drinks with friends',
      content:
        'Today we went to park with my wife and our doggie Mia. Both were excited as it was a beautiful autumn day, the sun was shinning and the',
      created: new Date(),
      edited: new Date(),
      contentState: {
        blocks: [
          {
            key: '6cco5',
            text: 'Afternoon drinks with friends',
            type: 'header-one',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
          {
            key: 'acm93',
            text:
              'Today we went to park with my wife and our doggie Mia. Both were excited as it was a beautiful autumn day, the sun was shinning and the',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
        ],
        entityMap: {},
      },
    },
  ],
};

const newPaperContentState = {
  blocks: [
    {
      key: '82prq',
      text: 'Title title..',
      type: 'header-one',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '6bqf',
      text: 'Write down your thoughts.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

export default {
  state: initialState, // initial state
  reducers: {
    addPaper(state, paper) {
      return {
        ...state,
        list: [
          ...state.list,
          {
            ...paper,
            contentState: newPaperContentState,
          },
        ],
      };
    },
    update(state, paperId, contentState) {
      const paper = state.list.find((p) => p.id === paperId);
      const titleBlock = contentState.blocks.find((b) => b.type === 'header-one' || b.type === 'header-two');
      const previewBlock = contentState.blocks.find((b) => b.type === 'unstyled');

      const title = titleBlock ? titleBlock.text : '(no title)';
      const preview = previewBlock ? previewBlock.text : paper.content;

      console.log('title', title);
      console.log('preview', preview);

      return {
        ...state,
        list: [
          ...state.list.filter((p) => p.id !== paperId),
          {
            ...paper,
            title: title || paper.title,
            content: preview || paper.content,
            edited: new Date(),
            contentState,
          },
        ],
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
