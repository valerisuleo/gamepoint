

# Building a Dark Mode Theme with React Context API

#### Introduction

This README provides a simple guide on how to set up a React Context API for managing a dark mode theme in your application.

#### 1. Creating the Provider Component

First, we define a `Provider` component that manages the theme's state.

```javascript
import React, { useState } from 'react';

const Provider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => setDarkMode(prevState => !prevState);

    return <div>{children}</div>;
};

export default Provider;
```

This component initializes the dark mode state and provides a method to toggle this state. It renders its children, allowing any child components to receive the context values.

#### 2. Defining the Context

Next, we define our context and a custom hook for easy access throughout our application.


```javascript
import React, { createContext, useContext } from 'react';

interface IThemeContext {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

const Context = createContext

(IThemeContext | undefined)(undefined);

export const useTheme = () => useContext(Context);
```

This setup creates a context with a default value of `undefined` and an interface specifying what the context will provide: a boolean to check if dark mode is enabled and a function to toggle it.

#### 3. Integrating the Provider with the Context

Finally, we integrate the `Provider` with the context to make the dark mode state and its handler available throughout the component tree.

```javascript
import React, { createContext, useContext, useState } from 'react';
import { IContext } from '../interfaces';

interface IThemeContext {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

const Context = createContext

(IThemeContext | undefined)(undefined);

export const useTheme = () => useContext(Context);

const Provider = ({ children }: IContext) => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);

    const handleDarkMode = () => {
        setDarkMode((prevState) => !prevState);
    };

    return (
        <Context.Provider value={{ isDarkMode, handleDarkMode }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
```

This code connects the `Provider` component with the `Context` using the `Context.Provider` component. It passes down the `isDarkMode` state and the `handleDarkMode` function as the context value, ensuring any child component can access and modify the dark mode settings using the `useTheme` hook.

### Usage

To use this context in your application, wrap your top-level component with the `Provider` from this setup:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './Provider';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Inside any component, you can toggle dark mode like this:

```jsx
import React from 'react';
import { useTheme } from './context'; // Adjust the import path as necessary

const ToggleButton = () => {
    const { isDarkMode, handleDarkMode } = useTheme();

    return (
        <button onClick={handleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default ToggleButton;
```

This simple setup allows you to integrate a theme switcher across your React application using Context API effectively.