# Open in Browsers

<p align="center">
  <img src="https://raw.githubusercontent.com/fabiospampinato/vscode-open-in-browsers/master/resources/logo.png" width="128" alt="Logo">
</p>

Adds some commands for opening the current file or project in any browser you like, even all of them simultaneously.

## Install

Follow the instructions in the [Marketplace](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-open-in-browsers), or run the following in the command palette:

```shell
ext install fabiospampinato.vscode-open-in-browsers
```

## Usage

It adds 3 commands to the command palette:

```js
'Open in Browser...' // Open the current file or project in the selected browser
'Open in Default Browser' // Open the current file or project in the default browser
'Open in All Browsers' // Open the current file or project in all browsers
```

## Settings

An example configuration may look like this:

```js
{
  "openInBrowsers.browser": "chrome", // Browser opened via "Open in Default Browser"
  "openInBrowsers.browsers": [ // Browsers opened via "Open in All Browsers"
    "chrome",
    "firefox",
    "safari",
    "edge"
  ]
}
```

## License

MIT © Fabio Spampinato
