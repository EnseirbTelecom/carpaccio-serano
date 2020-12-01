const repoName = require('git-repo-name')

class Repository {
  constructor () {
    this.id = repoName.sync()
    this.instance = null
  }

  static getInstance () {
    if (this.instance === null) {
      this.instance = new Repository()
    }
    return this.instance
  }
}

module.exports = Repository
