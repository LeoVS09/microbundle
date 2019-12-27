import oneStyles from './one.module.css';
import './two.css';

export default function() {
	const el = document.createElement('div');
	el.className = `${oneStyles['testing-module']} testing-css`;
	return el;
}
