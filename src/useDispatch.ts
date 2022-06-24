import {ThunkDispatcher} from "./model/store/thunk";
import {useDispatch as reduxUseDispatch} from "react-redux";

export function useDispatch(): ThunkDispatcher<any> {
    return reduxUseDispatch();
}