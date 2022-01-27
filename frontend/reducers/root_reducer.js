import { combineReducers } from "redux";
import EntitiesReducer from "./entities_reducer";
import ErrorsReducer from "./errors_reducer";
import SessionReducer from "./session_reducer";
import ui from "./ui_reducer";

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    ui
});

export default RootReducer;