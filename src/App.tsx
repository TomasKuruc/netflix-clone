import React, {Suspense, useEffect} from 'react';
import logo from './logo.svg';
import 'App.scss';
import Loader from "components/Loader";
import {useDispatch} from "useDispatch";
import TestAction from "stores/test/TestAction";


const TestComponent = React.lazy(() => import("components/TestComponent"));

function App() {
  const dispatch = useDispatch();
  console.log(TestComponent)


  useEffect(() => {
    dispatch(TestAction.setTestAction("dopici akcia hned teraz"))
  } , [])

  return (
        <div className="App">
            <h1>app</h1>
          <Suspense fallback={<>Loading...</>}>
            <TestComponent/>
          </Suspense>
          <Loader/>
        </div>
  );
}

export default App;
