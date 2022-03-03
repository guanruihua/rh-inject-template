class Store {
	storeName: string = 'store1'
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

export default new Store()