---
title: 'What is API and ..REST API'
date: '2023-04-05'
---

&nbsp;

How to explain API and RESTful API? I've watched couple of good materials in the beginning but still didn't quite understand until I've done some fullstack projects, now I try to explain it as effectively as possible.

&nbsp;
&nbsp;

## What is API?

API is an interface consist of set of functions and endpoints that allow different software components to communicate with each other. For example, it could be frontend and backend, between backend services, or software to software.

&nbsp;
&nbsp;

## Not sure if I get it..anyway, why we need API..and to do what？

Let me put this way. It's like a menu for a restaurant. When customers(client) want to order something(get), or want to sign up as a member(post), they don't directly goes into kitchen to talk a chef(backend) and managers(database). Instead, they order from menu or tell waiters what they want.

In above example, API is like a menu designed to serve clients in a structured and secure way.
In the programming world, API enable users send requests by calling API so the backend can perform request accordingly without worrying about sensitive information being exposed because clients only access information they are allowed to thorugh API, not everything in the backend.

&nbsp;
&nbsp;

## Example

Hope it's more clear. Now go back to the API definition with following example code.

```javascript
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js'

const router = express.Router()

router.post('/register', async (req, res) => {
  const { username, password } = req.body
  const user = await UserModel.findOne({ username: username })

  // check if user already exists
  if (user) {
    return res.json({ message: 'user already exists' })
  }
  // encrypt password
  const hashedPassword = await bcrypt.hash(password, 10)

  // add user to database
  const newUser = new UserModel({ username, password: hashedPassword })
  await newUser.save()

  res.json({ message: 'successfully registered!' })
})
```

This is just a small part of the API to handle user registration. When user requests to register as a member, they must provide a username and password then backend will save the user to database and return the reponse to the user.

Remember the definition? API is the set of functions and endpoints that handle the communication between different software components. In this example API is predefined as above to preform the request from my frontend to mongodb.

So this is what I said - the definition of API is pretty abstract, however as long as I build fullstack projects, it makes sense.

&nbsp;
&nbsp;

## What is REST API？

In definition, REST stand for _Representational State Transfer_ as a specific architectural style for building web services. It uses HTTP methods (GET, POST, PUT, and DELETE) to perform CRUD (Create, Read, Update, Delete) operations on backend resources.

RESTful APIs must be stateless and cachable, meaning that servers do not store any client state, and the responses sent from the server can be cached on the client side. This imporves performance and scalability of the API.

Shortly, REST API is one of API architechtures. There are other kinds of API but REST is widely used for Web applications and services. Most of time your API should be RESTful as long as it's HTTP based.

&nbsp;
&nbsp;

References: [What is REST API by Nathan Hekman](https://www.youtube.com/watch?v=lsMQRaeKNDk)
