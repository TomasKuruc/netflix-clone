import {createAction} from "helpers/createAction";

class TestAction {
    static readonly TEST_ACTION = "TestAction.TestAction";


    static setTestAction = (action) => {
        return createAction(TestAction.TEST_ACTION, action)
    }
}

export default TestAction;