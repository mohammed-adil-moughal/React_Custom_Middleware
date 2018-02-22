
export default function ({ dispatch }) {
    return next => action => {
        if (!action.payload || !action.payload.then) {

            return next(action);
        }
        console.log("we have a promise");

        action.payload.then(function (response) {
                const newAction = { ...action, payload: response };
                dispatch(newAction);
            });
    }
}