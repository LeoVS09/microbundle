import './one.module.css';
import './two.css';

export default function() {
	const el = document.createElement('div');
	el.className = 'testing-module testing-css';
	return el;
}
