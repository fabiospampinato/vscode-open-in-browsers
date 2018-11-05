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

```js
{
  "openInBrowsers.browser": "Google Chrome", // Browser opened via "Open in Default Browser"
  "openInBrowsers.browsers": [ // Browsers opened via "Open in All Browsers"
    "Google Chrome",
    "Firefox",
    "Safari",
    "IE",
    "Edge"
  ]
}
```

The actual browser's name to use is OS-dependant, for instance if you want to open Firefox under Ubuntu you have to use "firefox" (lowercase) in your settings. We use the [open](https://www.npmjs.com/package/open) utility under the hood, everything that works with it will work here.

## Contributing

If you found a problem, or have a feature request, please open an [issue](https://github.com/fabiospampinato/vscode-open-in-browsers/issues) about it.

If you want to make a pull request you can debug the extension using [Debug Launcher](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-debug-launcher).

## License

MIT © Fabio Spampinato
