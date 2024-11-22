import { createRoot } from 'react-dom/client';
import DeltaApp from '../DeltaApp/DeltaApp';

class DetlaRoot extends HTMLElement {
	inner = this.attachShadow({ mode: 'closed' });
	constructor() {
		super();
	}

	connectedCallback() {
		const root = createRoot(this.inner);
		root.render(<DeltaApp />);
	}
}

window.customElements.define('delta-root', DetlaRoot);
