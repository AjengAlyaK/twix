import { ActionType } from './action';

function commentReducer(comment = [], action = {}){
    switch(action.type){
        case ActionType.ADD_COMMENT:
            return [...comment, action.payload.comment];
        default: 
            return comment;
    }
}

export default commentReducer;