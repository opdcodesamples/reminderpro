import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../Constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) =>  {

// in ES6 we can write
/**
 * {
        text: action.text,
        dueDate: action.dueDate,
        id: Math.random()
    }

    as 

    let { text, dueDate } = action;
 */

    return {
        text: action.text,
        dueDate: action.dueDate,
        id: Math.random()
    }
}

const removeById = (state = [], id)  => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reduced reminders: ', reminders );
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state: ', reminders);
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            console.log('reminders as state: ', reminders);
            bake_cookie('reminders', reminders);
            return reminders; 
        case CLEAR_REMINDERS:
            reminders = [];
            console.log('reminders as state: ', reminders);
            bake_cookie('reminders', reminders);
            return reminders;         
        default:
         return state;    
    }


}

export default reminders;