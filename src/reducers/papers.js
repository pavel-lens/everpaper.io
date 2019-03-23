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

// export const initialState = createState(reducer, [
//   createAction('SET_LOADING', false),
//   createAction('ADD_NEW_PAPER', {
//     title: 'Saturday at park',
//     content:
//       'Today we went to park with my wife and our doggie Mia. Both were excited as it was a beautiful autumn day, the sun was shinning and the',
//     created: new Date(),
//     edited: new Date(),
//   }),
//   createAction('ADD_NEW_PAPER', {
//     title: 'Intense day at work',
//     content:
//       'The day started slowly with my usual coffee howoever things soon turned to opposite direction',
//     created: new Date(),
//     edited: new Date(),
//   }),
// ]);

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_NEW_PAPER':
//       return {
//         ...state,
//         list: [...(state.list || []), action.payload],
//       };

//     default:
//       return state;
//   }
// }

const reducer = autoReducer(initialState, {
  ADD_NEW_PAPER: (state, action) => ({
    ...state,
    list: [...(state.list || []), action.payload],
  }),
  SET_LOADING: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
});

// Usage:
// var reducer = autoReducer({}, { ...handlers })
// var reducer = autoReducer({}, 'moduleName', { ...handlers })
//
function autoReducer(initialState, namespace, reducerDefinitions) {
  // Support for both with / without namespace usage
  if (typeof namespace === 'object' && !reducerDefinitions) {
    reducerDefinitions = namespace;
    namespace = null;
  }

  const extractActionType = actionName => actionName.replace(`${namespace}/`, '');
  const extractActionNamespace = actionName => {
    if (actionName.indexOf('/') === -1) {
      return null;
    }
    return actionName.split('/')[0];
  };

  return function(state = initialState, action) {
    const actionType = extractActionType(action.type);
    const actionNamespace = extractActionNamespace(action.type);

    // Skip Redux native actions
    const isReduxNativeAction = actionType.indexOf('@@redux/') === 0;
    if (isReduxNativeAction) {
      return state;
    }

    // Check the namespace
    if (actionNamespace !== namespace) {
      return state;
    }

    // Call defined reducer
    if (reducerDefinitions[actionType]) {
      return reducerDefinitions[actionType](state, action);
    }

    console.error(`Action ${actionType} not specified in your reducer!`);

    return state;
  };
}

function createAction(type, payload, metadata) {
  return {
    type,
    metadata,
    payload,
  };
}

function createState(moduleReducer, actionList) {
  // Create state by iterating through defined list of actions
  const state = actionList.reduce(
    (acc, action) => moduleReducer(acc, action),
    {} // initial state
  );
  console.log('initialState', state);
  return state;
}

export default reducer;
