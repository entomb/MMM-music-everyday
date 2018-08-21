# WIP: magic mirror module that suggests music every day

### idea:
every day suggest different artists from your spotify or last.fm playlists starting with a different letter.




# {{MODULE_NAME}}

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

{{DESCRIPTION}}

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: '{{MODULE_NAME}}',
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

## Configuration options

| Option           | Description
|----------------- |-----------
| `option1`        | *Required* DESCRIPTION HERE
| `option2`        | *Optional* DESCRIPTION HERE TOO <br><br>**Type:** `int`(milliseconds) <br>Default 60000 milliseconds (1 minute)
