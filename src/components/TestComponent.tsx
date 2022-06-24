import React, {useEffect} from 'react';
import {useTypedSelector} from "helpers/reducers";
import {useDispatch} from "useDispatch";
import TestAction from "stores/test/TestAction";
import Loader from "components/Loader";

interface Props {}

const TestComponent = (props: Props) => {
    const dispatch = useDispatch();
    const test = useTypedSelector(state => state.test.test);

    useEffect(() => {
        dispatch(TestAction.setTestAction("bla bla bla Action"))
    },[]);


    return (
        <div className="TestComponent">
            <h2>test component react.lazy</h2>
            <div>{test?.action ? test.action : "dpc"}</div>
        </div>
    );
};

export default TestComponent;