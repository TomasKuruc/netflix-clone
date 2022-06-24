import TestAction from "stores/test/TestAction";
import update from "immutability-helper";

interface ReducerAction {
    payload: string | null,
    type: typeof TestAction.TEST_ACTION
}

interface TestState {
    test: {
        action: string | null
    }
}

class TestReducer {
    initialState: TestState = {
        test: {
            action: null
        }
    }

    reducer = (state = this.initialState, action:ReducerAction): TestState => {
        switch(action.type) {
            case TestAction.TEST_ACTION:
                console.log('test action')
                return {
                    ...state,
                    test: {
                        ...state.test,
                        action: action.payload
                    }
                }

            default:
                console.log('default')
                return state;
        }
    }
}

export default TestReducer;