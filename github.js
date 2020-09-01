class Github {
	constructor() {
		this.client_id = 'da9f1dc3fd712e68233a'
		this.client_secret = 'c248543327b707fcd4e2e974f9b84592033a0586'
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile   = await profileResponse.json();

		const repos = await reposResponse.json();

		return{
			profile, 
			repos
		}
	}
}