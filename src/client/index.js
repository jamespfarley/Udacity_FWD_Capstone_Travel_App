// import MAIN function from app javascript
// import { function_name } from './path/to/JS/file'
import { getDestinationData, initSearchBtn } from './js/app'

//import SCSS files

document.onreadystatechange = () => {
    if (document.readyState == 'interactive'){
        //initSearchBtn();
        console.log(`...index.js : ${document.readyState}`);
    }
}

export { getDestinationData } 

