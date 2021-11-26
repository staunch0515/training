# Create React Project With TypeScript

1. Install tools

   ```commonlisp
   npm install -g create-react-app
   ```

2. Create project

   ```
   create-react-app my-app --scripts-version=react-scripts-ts
   // new method recommanded
   npx create-react-app --template typescript
   ```

3. Run project

   ```
   npm run start
   ```

   

# Import Marial UI

```
npm install @mui/material
npm install @mui/lab
npm install @mui/icons-material

```



# Using react-router-dom

Why do not use the react-router?

​	react-router does not provide APIs for routing jumps related to dom operations. react-router-dom is based on react-router.

```
this.props.history.push('/path')
```

Install the react-router-dom

```
npm i --save-dev @types/react-router-dom
```

## useLocation

If using useLocation, the Router must contain the Component using useLocation.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}

function App() {
  usePageViews();
  return <Switch>...</Switch>;
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
);
```

# useMemo

> Pass a  "create" function and an array of dependencies. useMomo will only recompute the memoized value when one of the dependencies has change. This optimization helps to avoid expeensive calculations on every render.

If no array is provided, a new value will be computed on every render.

# useCallback

The hook will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

```
useCallback(fn,deps) is equivalento to useMemo(()=>fn,deps)
```

*Conceptually, every value referenced inside the callback should also appear in the dependencies array. *

# the difference between useMemo & useCallback

The useCallback returns the reference function created before.  A new function will be created and returned when the dependencies be changeed.

The useMemo returns the result of the function. The function will be recomputed when the dependeices be changed.

```javascript
import React, { FC, useCallback, useMemo, useState } from 'react';

const Index: FC = (props) => {
  const [count, setCount] = useState(0);

  const isEvenNumber = useMemo(() => {
    return count % 2 === 0;
  }, [count]);

  const onClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div>{count} is {isEvenNumber ？ 'even':'odd'} number</div>
      <button onClick={onClick}></button>
    </div>
  );
};
```



# memo





# ref & useLayoutEffect 

> The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

```javascript
import React, { useRef, useLayoutEffect } from 'react';

const App = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  console.log(h1Ref) // { current: null }

  function changeInnerText(el: HTMLElement, value: string) {
  el.innerText = value;
}
  
  useLayoutEffect(() => {
    console.log(h1Ref); // { current: <h1_object> }
      if (null !== h1Ref.current) {
         changeInnerText(h1Ref.current, 'hello world');
      }
  })

  return (
    <h1 ref={h1Ref}>App</h1>
  )
}

export default App;
```

# useDataSource

```tsx
type SuccessCallbackType=(rowsInThisBlock:any[],lastRow?:number)=>void;

const useDataSource=()=>{
	const dispatch=useDispatch();
  const formik=useSearchForm();
  const insiderTradings=useSelect(userSelector.selectList);
  
  useEffect(()=>{
    if(!returnDate){
      return ;
    }
    if(insiderTradomgs.length===0){
      return;
    }
    returnDate(list);
    dispatch(insiderTradingAction.clearResult());
  },[insiderTradings,returnData,dispatch]);
  
  return {
    getRows(params:IGetRowsParams){
      const searchCondition={
        ...formik.values,
        firstResult:params.startRow,
        maxResult:params.endRow-params.startRow
      }
      if(!returnData){
        setReturnData(()=>params.successCallback());
      }
      dispatch(actions.search(searchCondition))
    }
  }
	
}
```

