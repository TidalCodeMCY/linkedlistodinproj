import '../src/style.css';
import { LinkedList } from './components/classes';

const nameList = new LinkedList;

nameList.print();
nameList.append('red');
nameList.print();
nameList.append('green');
nameList.print();
nameList.prepend('yellow');
nameList.print();

console.log(nameList);

nameList.insert('blue', 2);
nameList.insert('purple', 1);
nameList.insert('grey', 4);
nameList.print();

nameList.remove(2);
nameList.print();

console.log(nameList.headPos());
console.log(nameList.tailPos());
console.log(nameList.atPos(1));

nameList.pop();
nameList.print();
console.log(nameList.contains('blue'));
console.log(nameList.find('blue'));
