
const formReducer = (state, action) => {
  switch(action.type){
    case "HANDLE INPUT TEXT":
        return{
            ...state,
            [action.field]: action.payload,
        };
    case 'User Input':
      return{
        ...state,
        UserId : action.payload,
        ZakatRate : 2.5,
        Year : new Date().getFullYear() 
      }
    default:
        return state;
  }
};

export default formReducer;
