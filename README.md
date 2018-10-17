Zlj-portal application, a simple example of portal.

## Usage

1. Add dependency
```bash
$ maka add zlj-portal
```

2. Modify the code

*Embedded use*
```javascript
const view = {
    component: 'div',
    children: [{
        component: 'AppLoader',
        appName: 'zlj-portal'
    }]
}
```
*Navigate use*
```javascript
import {navigate} from 'maka'
...
btnClick = () => {
    navigate.redirect('zlj-portal')
}
...
```

## Download and run

1. Download
2. Decompress
3. Enter decompress directory
4. Run
```bash
$ yarn start
```

## License

MIT

