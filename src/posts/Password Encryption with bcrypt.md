---
title: "NodeJS Password Encryption with bcrypt"
date: "December 17, 2019"
---

<br>

Assuming you already know basic NodeJS and how to work with REST API let's add one more thing to your development skill sets. Which encrypting user password with bcrypt.

<br>

bcrypt is a very popular NodeJS library to securely save your site's user password. By the way to avoid any confusion we are using bcrypt not bcryptjs.

<br>

For the purpose of this demonstration we will keep things simple. Create a folder named encrypt-password and open it in your favorite text editor I use VS code. Inside that folder create a file named index.js.

<br>

Open your chosen Terminal app and go to the directory where index.js lives. now run the command

<br>

```
npm init -y
```

<br>

This will create a package.json file and will also initialize node_modules folder so, we can install bcrypt and encrypt our password. I am not going into details about "npm init -y" and "package.json" since I believe if you have any previous experience working with Node and npm you already understand what they do.

<br>

let's install bcrypt. On your Terminal, run the following command

<br>

```
npm install bcrypt
```

<br>

By the way if your install gives you error for some reason then install the version 3.0.6 that worked for me.

 <br>

```
npm install bcrypt@3.0.6
```

<br>

After installation open your index.js file and require bcrypt.

<br>

```js
const bcrypt = require("bcrypt")
```

<br>

bcrypt gives us powerful methods like genSalt(), hash() to encrypt password. Let's see how to use them.

<br>

```js
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  console.log(hash)
}
hashPassword("1234")
```

<br>

All right let's peel this code one line at a time and see what's going on. First we are creating bcrypt salt where we pass the number 10 to bcrypt.genSalt() method. Think of salt as a cloaking device the bigger number you pass to the genSalt() more secure your password will be.

<br>

salt is basically a random string that bcrypt creates and later when we call hash() method which takes two arguments one is actual password that user going to input through form and other is salt. And then bcrypt takes the password, hash it and then adds the salt at the beginning of that hashed string. So the randomness is not discernible. That's what basically those two lines are doing

<br>

As you can see both the genSalt(), and hash() methods return promise. You have to catch those promises. Here I am using async/await to handle JavaScript Promises.

<br>

If you run above function you will see on your console random long encrypted String.

<br>

Let's see how we can use that encrypted passwords to match with the password user inputs during login. For this bcrypt provides a compare method which checks a regular password that user provides with the hashed password and returns a Boolean true or false. Let's update the previous code and see that in action.

<br>

```js
async function hashPassword(password, password2) {
  // updated
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const isSame = await bcrypt.compare(password2, hash) // updated
  console.log(isSame) // updated
}

hashPassword("1234", "12345") // output: false
hashPassword("1234", "1234") // output: true
```

<br>

Under the hood bcrypt.compare() takes the salt of old hashed password and applies it to the new one and checks if they are the same.

<br>

And that's it. Now you can apply password encryption on your site and make your site a little bit more secure for your users.
