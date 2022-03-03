import * as React from 'react'
import { TemplateProvider, inject } from '../lib'
import store1 from './store1'
import store2 from './store2'
import store3 from './store3'




const stores: { [key: string]: any } = {
	mobx: store1,
	mobx2: store2,
	mobx3: store3
}

@inject('mobx')
class PageB extends React.Component {
	render() {
		const { mobx = {} } = this.props as any
		console.log(mobx.storeName);
		return <div>
			<div className="">PageB</div>
			mobx:{mobx.num}<br />
			<div>storeName: {mobx.storeName}</div>
			<button onClick={() => { mobx.add(); }}>store add 1</button>
		</div>
	}
}

const PageA: any = inject('mobx', 'mobx2')((props: any) => {
	// console.log(props.mobx2)
	const { name = 'default', _a } = props.mobx

	return <div>
		PageAA{name}<br />
		mobx:{props.mobx.num}<br />
		mobx2:{props.mobx2.num2}<br />
		<button onClick={() => {
			// props.mobx.updateName('jfkjsadfkjsfk');
			props.mobx.add();
			props.mobx2.add();

			// console.log('obj', props.mobx);
			// props.mobx.getName();
		}}>log</button>
	</div>
});

@inject('mobx')
class PageC extends React.Component<any, any> {
	render() {
		const { mobx = {} } = this.props
		let { name = 'default' } = mobx

		return <div>
			PageAA{name}<br />
			mobx:{this.props.mobx.num}<br />
			{this.props.mobx.num}<br />
			<button onClick={() => {
				// console.log('props', this.props);
				// this.props.mobx.updateName('jfkjsadfkjsfk');
				this.props.mobx.add();
				// console.log('obj', obj);
				// props.mobx.getName();
			}}>log</button>
		</div>
	}
}

export default function App(props: any) {
	return <TemplateProvider stores={stores}>
		<hr />
		<PageA />
		<hr />
		<PageB />
		<hr />
		<PageC />
		<hr />
	</TemplateProvider>
}

