## React Native Bundle拆分
https://www.sdk.cn/news/3617

## require 方案

1 alias  
https://github.com/patrick-steele-idem/app-module-path-node  
https://cnodejs.org/topic/5722cd8a35af8a704195f58e  


2 增加 import 文件
```js
// ./shared/imports.js
export {db} from '../../db.js';
export {validator, isRequired} from '../../validator.js';
export {render} from '../../render';

// ./source.js
import {db, validator, isRequired, render} from './shared/import'
```

可以 1 2 结合使用
