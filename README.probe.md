## React Native Bundle拆分
https://www.sdk.cn/news/3617

## require 方案

1 使用绝对路径   
优点：简单直接    
缺点：移动文件位置会比较痛苦，需要改动全部引用到的地方

```js
// ReactNativeDemo 表示 package.json 中的 name
import xxx form 'ReactNativeDemo/app/views/xxx'
```

2 使用 providesModule 提供索引模块  
优点：在保持索引模块对外提供的接口不变的情况下，内部的文件移动会比较爽
缺点：维护索引模块需要谨慎

`./shared/imports.js` 文件内容：
```js
/**
* @providesModule Common
**/
export {db} from '../../db.js';
export {validator, isRequired} from '../../validator.js';
export {render} from '../../render';
```

`./source.js` 文件内容：
```js
import {db, validator, isRequired, render} from 'Common'
```

可以 1 2 结合使用，比如：  
方法 1 用在业务相关的文件中  
方法 2 用在基础组件的文件中  
