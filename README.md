# babel-plugin-shadow-shim
This is a babel plugin that enables complete apps to run inside a shadow root.

## The problem
A web application typically relies on a large number of DOM queries to work correctly. These queries are often called from the `document` node, since it's the root node. So if you try to stick the application inside of a shdow root, you have a problem: The DOM queries called from the `document` node will not reach inside the shadow root and the app will not be able to find the elements it expects.

Now, you could of course rewrite your application to look inside the shadow root instead. But what if it sometimes lives outside of a shadow root and sometimes not? You would have to write logic to determine this. Or what if you have third party dependencies that run DOM queries from the `document` node? This is where you typically reach the conclusion that shadow DOM is more trouble than its worth.

## The solution
So enter `babel-plugin-shadow-shim`! A babel plugin that solves the problem by rewriting all the calls to, for example, `document.querySelector` so that they instead gets called on the shadow root. If the specified shadow root does not exist, the calls are routed to `document` instead like they would normally.

## Installation and configuration
Install from NPM:
```bash
$ npm install --save-dev babel-plugin-shadow-shim
````

Then add the plugin and settings to your `.babelrc` plugins section:
```json
"plugins": [
  [
    "shadow-shim",
    {
    "shadowRootSelector": "#shadow",
    "appIdentifier": "myUniqueId"
    }
  ]
]
```

`shadowRootSelector` is the selector of the element to which the shadow root is attached. Without this setting the plugin will not work.

`appIdentifier` can be any random string, and is used to make sure the code the plugin generates is unique to this application and does not conflict with other instances of `babel-plugin-shadow-shim` on the same page.

Make sure that your pipeline is set up so that babel runs at the last stage. You want the plugin to process all the output javascript.

If you are using Angular CLI, you can set up babel separately and execute it as a post build step using the babel CLI.

NOTE:
* This plugin is a work in progress. It's functionality is still very limited and there are problably bugs.
