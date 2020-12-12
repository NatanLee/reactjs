//если подключаемый элемент имеет default, {} не нужно
//import Human from './user';
import {Human} from './user';
//import 'css/user.css';

const h = new Human('Luke', 'Skywalker');
alert(h.sayHi());