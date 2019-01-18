export const gallery = (state = [], action) => {
  switch (action.type) {
    case "TEST":
      return [...state, { id: 123, url: "http://lalala.test/test.png" }];

    default:
      return state;
  }
};
