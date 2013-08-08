## thumbdrop
#### dubdrop compatible task for reading an image file and creating a thumbnail.

## Usage

Make sure you have `dubdrop` installed.

```
npm install dubdrop
```

```js
var dubdrop   = require('dubdrop');
var thumbdrop = require('thumbdrop');

function handleThumb (err, $img) {
    var $example = document.querySelector('body');
    $example.appendChild($img);
}

var exampleInput = dubdrop('#file-input', {
    'tasks': [
        thumbdrop(handleThumb)
    ]
});
```

## Contributing

Running example:

```
npm start
```
