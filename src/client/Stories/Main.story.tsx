import Roact from '@rbxts/roact';
import { App } from '../pages/App';

// Main story for Hoarcekat
export = (target: Frame): (() => void) => {
	const app = <App />;
	const mount = Roact.mount(app, target);

	return () => {
		Roact.unmount(mount);
	};
};
