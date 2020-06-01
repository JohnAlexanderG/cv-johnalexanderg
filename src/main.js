import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// name: 'Jhon Alexander Gil Beltrán',
		shortName: 'John Alexander G',
		email: 'johnalexand3rg@gmail.com',
		phone: '+57 314 255 5359',
		position: 'Desarrollador Front-end'
	}
});

window.app = app;

export default app;