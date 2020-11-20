---
title: "Authentication with JWT"
date: "December 17, 2019"
next: "Password Encryption with bcrypt"
---

Often times you want to secure the routes of your sites to keep your user's data and sensitive information protected. In this sort of scenario jsonwebtoken or commonly known as JWT comes in handy.

<br>

Think of JWT as your pass in a convention or an event where you fill up the form once. Then organizers give you a pass which you can use to access the many part of that convention as long as you are inside of that convention.

<br>

JWT works similarly. Your user logs in to your application. Then JWT generates a token for that user once, and as long as your user in the app, and not logging out can use that token to access privileged part of that app. We will discuss the technical side of it shortly.

<br>

You can implement JWT in many programming languages. Here I am going to use NodeJS for my demonstration. If you want to try the examples in this post then create a sample project with "npm init -y" and do a "npm install jsonwebtoken" and come back.

<br>

The way JWT works is that when your user logins to your site it creates a token of long string which includes the information of that user. You can store anything like user_id, email or name in that token. Most often user_id will be enough. Then every time you route to a different section of your site it checks if the token exists and whether it's valid. If it's not you will get kicked out from the site. Usually you want to store the token on the client side of your application and set an expiration time to keep things tight and secure. Also, you want to avoid storing the token in your database.

<br>

Let's write some hypothetical code. By the way purpose of this demonstration is to give you an idea of how you can implement this in your own project, not a step by step guide of how to implement JWT in a real world app because that would be too cumbersome and will actually defeat the purpose of just understanding JWT. Ok, now back to code

<br>

```js
const jwt = require("jsonwebtoken")

const user = {
  id: "0123",
  name: "max",
  email: "max@gmail.com",
  password: "7235723867",
}
```

<br>

Let's say you have an user in your database with above info. When that user logs in with their email and password. Your site generates a token with that user's id and store it somewhere on client.

<br>

```js
const token = jwt.sign({ id: user.id }, "secretKey")
console.log("JWT Token: " + token)
```

<br>

There are many opinions on how you should store JWT. You should do a little research before you decide what is the best option for your application.

<br>

After generating the token your site verifies the token.

<br>

```js
const verifiedToken = jwt.verify(token, "secretKey")
console.log("User ID: " + verifiedToken.id)
```

<br>

From then on until log out or an event of token expiration any time that user tries to access any protected route; your site checks for the validity of that token and then grants access.

<br>

After verification of the token you can access user's id from the token, and then you can write queries to get all the info about that user from database.

<br>

As you can see both jwt.sign() and jwt.verify() takes at least two arguments. Let's dissect jwt.sign() first.

<br>

The first argument of jwt.sign() is a payload which will be stored in the token. It can be a string or an object. Here I am passing an object with user's id as the payload, and the second argument is a secretKey which is a string that will be used to create a digital signature for your token. If you want to know more about digital signature or how a JWT token is made you can check their own documentation [here](https://jwt.io/). By the way you should not store the secretKey like above example. You should keep it on an environment variable outside of your source code.

<br>

Similar to jwt.sign() method jwt.verify() also requires your secretKey to verify your token. But first argument in your jwt.verify() method is the token itself.

<br>

There are other options that you can set with your JWT. If you want to implement them in NodeJS you can check [this](https://www.npmjs.com/package/jsonwebtoken) for more details about NodeJS implementation of JWT.

<br>

And that's it. Hopefully this gives you an idea about JWT and it's usefulness, so you can use them in your own site to make it more robust and secure.
