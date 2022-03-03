class Store3 {
	storeName: string = 'store3'
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

export default new Store3();