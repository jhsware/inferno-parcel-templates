import { render } from 'inferno';
import { appFactory } from './App';

render(appFactory(), document.getElementById('app'))
