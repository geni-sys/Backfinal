const Issue = require('../model/Issue')
const User = require('../model/User')

module.exports = {
  async index(request, response) {
    const {
      owner_id
    } = request.params

    let user = null

    try {
      user = await User.findByPk(owner_id, {
        include: {
          association: 'issues'
        }
      })
    } catch (err) {
      console.log(err)
    }

    return response.json(user.issues)
  },

  async store(request, response) {
    const {
      owner_id
    } = request.params
    const {
      title,
      body,
      tags,
      link,
      language
    } = request.body

    let issue = null
    try {
      const user = await User.findByPk(owner_id)
      if (!user) {
        return response.status(400).json({
          message: 'Only users can create issue'
        })
      }

      issue = await Issue.create({
        owner: owner_id,
        title,
        body,
        tags,
        link,
        language
      })

      return response.json({
        owner: owner_id,
        issue
      })
    } catch (err) {
      console.log(err)
    }

    return response.status(400).json({
      message: 'Dont could be completed'
    })
  },

  async destroy(request, response) {
    const {
      admin_id,
      issue_id
    } = request.params

    try {

      const admin = await User.findByPk(admin_id)
      if (!admin) {
        return response.status(400).json({
          message: '[100] You need > Create an account'
        })
      }
      if (!admin.canny) {
        return response.status(400).json({
          message: 'Only admin can delete an issue. Do a requisition for an admin'
        })
      }
      let issue = Issue.findByPk(issue_id)
      if (!issue) {
        return response.status(400).json({
          message: 'Issue does not exists!'
        })
      }

      issue = await Issue.destroy({
        where: {
          id: issue_id
        }
      })
      if (issue) {
        console.log('issue deletada: ' + issue)
      }

      return response.json()

    } catch (err) {
      console.log(err)
    }

    return response.status(400).json()
  }
}
