class Github {
	constructor() {
		this.client_id = 'da9f1dc3fd712e68233a'
		this.client_secret = 'c248543327b707fcd4e2e974f9b84592033a0586'
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile   = await profileResponse.json();

		return{
			profile
		}
	}
}