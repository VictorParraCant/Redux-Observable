import { LOAD_STORIES, CLEAR_STORIES } from '../actions'; 
const stories = [
  {
    "by":"Victor",
    "id": 1234,
    "title": "Test redux observable",
    "url": "http://victorparracant.github.io/"
  },
  {
    "by":"Manuel",
    "id": 5678,
    "title": "Redux observable Test 2",
    "url": "http://victorparracant.github.io/"
  }
];

const initalState = {
  items: [],
};

export function storiesReducer(state = initalState, action) {
  switch (action.type) {
    case LOAD_STORIES:
      return {
        items: stories.slice(),
      };

    case CLEAR_STORIES:
      return {
        items: [],
      };

    default: return state;

  }
}

export default storiesReducer;
