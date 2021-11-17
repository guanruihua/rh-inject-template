import React from "react";

const MobxProviderContext: any = React.createContext({})

export const TemplateProvider = (props: any) => {

	return (<MobxProviderContext.Provider value={props.stores}>
		{props.children}
	</MobxProviderContext.Provider>)
}


export function inject(...storeNames: string[]): any {
	return function (TclassComponent: any): any {
		return function (props: any) {

			const selectStores: any = React.useContext(MobxProviderContext)
			const mprops: { [key: string]: any } = {}
			storeNames.forEach((tmpName: string): void => {
				mprops[tmpName] = {};
				let obj: any = selectStores[tmpName]
				for (let key in obj) {
					if (obj[key] instanceof Function) {
						mprops[tmpName][key] = obj[key]
					} else {
						const [val, setVal] = React.useState(obj[key])
						Object.defineProperty(mprops[tmpName], key, {
							enumerable: true,
							configurable: true,
							set: function (newVal: any) {
								setVal(newVal)
							},
							get: function () {
								return val
							}
						})
					}
				}
			})

			return <TclassComponent {...mprops} />
		}
	}
}