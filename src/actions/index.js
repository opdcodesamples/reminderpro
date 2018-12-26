import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../Constants';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text: text,
        dueDate: dueDate
    }
    console.log('action in addReminder: ', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id: id
    }
    console.log('action in deleteReminder: ', action);
    return action;
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS,
    }
    console.log('action in clearReminders: ', action);
    return action;
}