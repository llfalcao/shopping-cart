import logo from '../images/carina.png';
import student from '../images/book.svg';
import home from '../images/home.svg';
import pro from '../images/pro.svg';

const products = [
  {
    id: '0',
    image: logo,
    icon: student,
    name: 'CarinaOS Student',
    fullName: 'CarinaOS Student Edition',
    price: '19.99',
  },
  {
    id: '1',
    image: logo,
    icon: home,
    name: 'CarinaOS Home',
    fullName: 'CarinaOS Home Edition',
    price: 49.99,
  },
  {
    id: '2',
    image: logo,
    icon: pro,
    name: 'CarinaOS Pro',
    fullName: 'CarinaOS Professional Edition',
    price: 99.99,
  },
];

export default products;
