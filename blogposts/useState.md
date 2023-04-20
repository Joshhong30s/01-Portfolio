---
title: 'useState'
date: '2023-03-31'
---

## Definition

useState is a React Hook that allows us to manage and preserve state variables in functional components. It enables the handling of local state and triggers a re-render of the component when the state changes.

## Use Scenario

For exmaple, a sign-up form for a website requires input fields for username, email, and password. The developer needs to store the input values and update them as the user key-in.

useState can store the current input values as states, and update whenever state changes, triggering a re-render of the component.

## How it works

```javascript
import React, { useState } from 'react'
function SignUpForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
         {' '}
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
          <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />    <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />    <button type='submit'>Sign Up</button> {' '}
    </form>
  )
}

export default SignUpForm
```

In this example, first we import the `useState` function from the 'react' library. Then we call `useState` to create state variables for `username`, `email`, and `password` with update functions `setUsername`, `setEmail`, and `setPassword` respectively. Each state variable is initialized with an empty string.

We use the state variables to store the input values and update functions in the `onChange` event handlers to update the state as the user types.

As the user types into the input fields, the respective state variables are updated, and the component re-renders to reflect the current input values. When the form is submitted, the `handleSubmit` function is called to process the form data, which now contains the current input values stored in the state variables.

## Key Takeaways

**Summary**: useState is a React Hook that enables the management of state variables in functional components. It helps in maintaining local state and re-rendering the component when state changes.

**More use scenarios** : The useState Hook can be used in various real-world development scenarios, such as creating forms with input fields, implementing pagination for large datasets, managing the state of a shopping cart in an e-commerce application, and toggling the visibility of elements in a component.
