import * as services from './services';
import { Store } from './store'

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);
console.log([
	...mapValuesToArray(services)
])
export const providers = [Store, 
	...mapValuesToArray(services)
];


export * from './app.component';
export * from './app.module';
