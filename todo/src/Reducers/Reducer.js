export const initialState = [
    {
      toDo: "",
      completed: false,
      id: Date.now(),
    },
  ];
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      case "COMPLETE_TODO":
        return state.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        });
      case "CLEAR_LIST":
        return state.filter((item) => !item.completed);
      default:
        return state;
    }
  };