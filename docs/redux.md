# What should I use Redux ?

Redux is most useful in cases when:

- You have larger amounts of application state that are needed in many places in the app

- The app state is updated frequently over time

- The logic to update that state may be complex

- The app has a medium or larger-sized codebase, and might be worked on by many people

- you want to be able to understand when, why,and how state in your application has updated, and visualize the changes to your state over time

- You need more powerful capabiliities for managing side effects, persistence, and data serialization.

  

# What is React Context?

Context provides a way to pass data throught the component tree without having to pass props down manually at every level.

## Using context

Using React Context in an app requires a few steps:

- Frist, call `const MyContext=React.createContext()` to create a  context object instance.

- In a parent component, render `<MyContext.Provider value={someValue}> `. This puts some single piece of data into the context. That value could be anything - a string, a number, an object, an array, a class instance, an event emitter, and so on.

- Then, in any component nested insde that provider, call `const the ContextValue=useContext(MyContext)`.

  

# Comparing Context and Redux

Let's review what capabilities Cntext and Redux+Redux actually have:

- Context
  - Does not store or "manage" anything
  - Only works in react components
  - Passes down a single value, which could be anything
  - Allow reading that single value
  - Can be used to avoid prop-drilling
  - Does show the current context value changes, but wth no way to skip updates
  - Does not include any mechanism for side effects - it's purely for rendering compoents
- React+Reux
  - Stores and manages a single value
  - Works with any UI, inlcude outside React compoents
  - Allows reading that single value
  - Can be used to avoid prop-drilling
  - Can update the value via dispatching an action and running reducers
  - Has DevTools that show the history of all dispatched actions and state changes over time
  - Uses middleware to allow app code to trigger side effects
  - Allows components to subscribe to store update, extract specific pieces of the store state, and only re-render when those values changes
  - 

# Using useRducer

## Goal

Put the login in whole function. 

## reducer

What is a reduce is below. It inclues some action to implement some logic and change the state.

```
(state,action)=>newState
```

What is useReducer

```
const [state,dispatch]=useReducer(reducer,initialState)
```

# Store

## createStore

Arguments

1. Reducer : A reducing function that returns the next state tree, given the current state tree and an action to handle.
2. [preloadedState] : The initila state
3. [enhancer] : The store enhancer. 

Returns

​	(Store) : an object that holds the complete of your app. The only way to change its state is by dispatching action. You may also subscribe to the changes to its state to update the UI.

## Store method

### getState()

return  (any) : The current state tree of your application

### dispatch(action)

This is the only way to trigger the state change. The return is the dispatched action.

### subscribe(listener)

The following caveats should be noticed.

1. The listener should only call `dipatch()` either in response to user action or under specific conditions. Calling `dispatch()` without any conditions is technically possible, however, it leads to an infinite loop as every call usually triggers the listener again.
2. The subscriptions are snapshotted just before every dispatch() call. If you subscript or unsubscribe while the listeners are being invoked, this will not have any effect on the dispatch() that is currently in progress. However, the next dispatch() call, whether nested or not, will use a more recent snapshot of the subscription list.
3. The listener should not expect to see all state changes, as the state might have been update multiple times during a nested dispatch before the listener is called. It is, however, guaranteed that all subscribers registered before the dispatch started will be called with lastest state by the time it exits.

It is a low-level API. Most like, instead of using it directly, you'll use React bindings. If you commonly use the callback as a hook to react to state changes, you might want to write a custom `observeStore` utility. The store is also an Observable, so you can subscribe to changes with libraries like Rxjs.

### replaceReducer(nextReducer)

Replaces the reducer currently used by the store to calculate the state.

## combineReducers 

To create a single root reduer out of many.

## next State tree

If you state is a plain object, make sure you never mutate it! Immutable updates require makeing copies of each level of data, typically using the object spread operator ( return { ...state,...newData})

## First dispatch

When a store is created, redux dispatches a dummy action to your reducer to populate the store with the initial state. You are not meant to handle the dummy action directly. Just remember that your reducer should return some kind of initial sate if the sate given to is as the first argument is undefined, and you're all set.

## compose

To apply multiple store enchancers, you may use compose

# Rxjs

