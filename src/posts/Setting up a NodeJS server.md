---
title: "Setting up a NodeJS server"
date: "December 16, 2019"
---

<br>

- Go to <https://nodejs.org>.
- Download the latest LTS version of Node.
- Install.

Now open your terminal or CMD or PowerShell and check the node and npm version.

To check node version Type.

<br>

```sh
node - v
```

<br>

To check npm version Type.

<br>

```powershell
npm -v
```

<br>

If you get a version number in return which will look something like this.

```powershell
v10.16.3 (in case of Node)
6.9.0 (in case of npm)
```

<br>

That means you have installed node successfully.

<br>

## The fun part

<br>

Now we setup the server. Keep your Terminal or PowerShell open we are gonna need them soon.

Create a folder where you want to keep your server code. On your terminal go to that folder location and run this command

<br>

```sh
npm init -y
```

<br>

You will see something like this in your terminal

<br>

```json
{
  "name": "node-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

<br>

This creates a file named package.json in your folder which includes information about your package and version. We will discuss more about the package shortly. It also includes name of your main (.js) file which will run at the beginning every time you run the server. By default npm includes a file named index.js.

<br>

It also includes a folder called node_modules which holds all of your third party node packages.

<br>

Now you can create a file named index.js in your server folder or if you don't like the name index.js and you want to name your server file server.js that's fine too you just have to update the name in your package.json file. But for simplicity let's keep it index.js.

<br>

After creating index.js open the file in your favorite text editor. I use VS code. You can use any text editor you like. Now we will write some code. But, before we do that we need couple of npm packages. I know I haven't really explained what they are. npm is short for Node Package Manager.

<br>

One of the reasons NodeJS is very popular is the fact that it's open source. So, anyone can build their own modules. That's why we need something like npm. So, we can use those third party modules made by developers that will make our life much easier. One of those node_modules is [express](https://expressjs.com/) which comes with a lot of utility methods that will make our work so much easier working with server.

<br>

To install a node package all you have to do is go to your terminal and run this command.

<br>

```sh
npm install express
```

<br>

Make sure you are on the right path, in this case right path will be the folder your package.json lives. Wait till the download is completed. Now we can use express in our code.

<br>

To use express we need to require it from node_modules folder. Any node package you install lives on that folder.

<br>

Now, in your index.js file which should be empty because we haven't written any code yet. Write the following

<br>

```js
const express = require("express")
```

<br>

Just like that, we have required express. Let's write some code and make sure our server is running.

<br>

We have required express. Let's initialize it. To initialize express we create a variable called app. And call express on that variable.

<br>

```js
const app = express()
```

<br>

Next, we call one of utility methods of express to listen for a server on port 5000. Here is that code.

<br>

```js
app.listen(5000, () => {
  console.log("Server started on port 5000")
})
```

<br>

Let's test our code with a simple get request to see if everything is working.

<br>

```js
app.get("/", (req, res) => {
  res.send("Node Server Running!!")
})
```

<br>

By the way if you are confused by above code. It's just a http get Request. You can check what it does [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)

<br>

I am not further explaining it because it's beyond the scope of this post.

Our final code looks like this

<br>

```js
const express = require("express")

const app = express()

app.listen(5000, () => {
  console.log("Server started on Port 5000")
})

app.get("/", (req, res) => {
  res.send("Node Server Running!!")
})
```

<br>

Let's run this. In your terminal make sure you are on right path where your index.js and package.json lives.

run this command

<br>

```sh
node index.js
```

<br>

If everything goes well you will see in your console

<br>

```sh
Server started on port 5000
```

<br>

Now you can also check in your browser with this <http://localhost:5000>

You should see the following

<br>

```sh
Node Server Running!!
```

<br>

And that's it. You have a working Node Server running on your local machine.
