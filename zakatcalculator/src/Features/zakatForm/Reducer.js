
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
        ZakatRate : 0.025,
        Year : new Date().getFullYear(),
        email_field : action.email,
        name : action.username,
      }
    default:
        return state;
  }
};

export default formReducer;
