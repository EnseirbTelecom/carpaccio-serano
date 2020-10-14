const repoName = require('git-repo-name');

export class Repository {
    static instance = null
    
    constructor() {
        this.id = repoName.sync()
    }

    static getInstance() {
        if (this.instance === null) {
            this.instance = new Repository()
        }
        return this.instance
    }
}
