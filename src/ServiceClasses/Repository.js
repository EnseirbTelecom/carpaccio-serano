const repoName = require('git-repo-name')

class Repository {
  constructor () {
    this.id = repoName.sync()
  }

  static getInstance () {
    if (this.instance === undefined) {
      this.instance = new Repository()
    }
    return this.instance
  }
}

module.exports = Repository
