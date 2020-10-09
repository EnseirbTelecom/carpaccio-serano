var repoName = require('git-repo-name')

class Repository {
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

module.exports(Repository)