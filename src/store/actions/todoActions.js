import * as actions from './actionTypes';

// Add a todo
export const addTodo = data => async (
    dispatch,
    getState,
    {getFirestore, getFirebase}
) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    dispatch({type: actions.ADD_TODO_START});
    try {
        const res = await firestore
            .collection('todos')
            .doc(userId)
            .get();
        const newTodo = {
            id: new Date().valueOf(),
            todo: data.todo,
        };
        if (!res.data()) {
            firestore
                .collection('todos')
                .doc(userId)
                .set({
                    todos: [newTodo],
                });
        } else {
            firestore
                .collection('todos')
                .doc(userId)
                .update({
                    todos: [...res.data().todos, newTodo],
                });
        }
        dispatch({type: actions.ADD_TODO_SUCCESS});
        return true;
    } catch (err) {
        dispatch({type: actions.ADD_TODO_FAIL, payload: err.message});
    }
};

// Delete todo
export const deleteTodo = id => async (
    dispatch,
    getState,
    { getFirestore }
) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    dispatch({ type: actions.DELETE_TODO_START });
    try {
        const res = await firestore
            .collection('todos')
            .doc(userId)
            .get();
        const previousTodos = res.data().todos;
        const newTodos = previousTodos.filter(todo => todo.id !== id);
        await firestore
            .collection('todos')
            .doc(userId)
            .update({
                todos: newTodos,
            });
        dispatch({ type: actions.DELETE_TODO_SUCCESS });
    } catch (err) {
        dispatch({ type: actions.DELETE_TODO_FAIL, payload: err.message });
    }
};
