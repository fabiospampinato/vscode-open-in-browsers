# VSC Open in Browsers

<p align="center">
	<img src="https://raw.githubusercontent.com/fabiospampinato/vscode-open-in-browsers/master/resources/logo-128x128.png" alt="Logo">
</p>

Adds some commands for opening the current file or project in any browser you like, even all of them simultaneously.

## Install

Run the following in the command palette:

```shell
ext install vscode-open-in-browsers
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

## License

MIT © Fabio Spampinato
