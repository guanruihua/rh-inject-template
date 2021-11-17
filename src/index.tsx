import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { TemplateProvider, inject } from './lib'
// import App from './lib'

class Store {
	name: string = 'ruihuag'
	num: number = 1
	add() {
		this.num++;
	}
	getName(): string {
		return this.name;
	}
	updateName(str: string): void {
		this.name = str;
	}
}
class Store2 {
	name: string = 'ruihuag'
	num2: number = 1
	add() {
		this.num2++;
	}
	getName(): string {
		return this.name;
	}
	updateName(str: string): void {
		this.name = str;
	}
}

const store = new Store();
const store2 = new Store2();


const stores: { [key: string]: any } = {
	mobx: store,
	mobx2: store2
}

class PageB extends React.Component {
	render() {
		return <div>
			PageB
		</div>
	}
}

const PageA: any = inject('mobx', 'mobx2')((props: any) => {
	console.log(props.mobx2)
	const { name = 'default', _a } = props.mobx

	return <div>
		PageAA{name}<br />
		{props.mobx.num}<br />
		mobx2:{props.mobx2.num2}
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
			{this.props.mobx.num}
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

function App(props: any) {
	return <TemplateProvider stores={stores}>
		<PageA />
		<PageB />
		<PageC />
	</TemplateProvider>
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
