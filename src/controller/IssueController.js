const {
  Op
} = require("sequelize");

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

  async all(request, response) {
    const {
      query
    } = request.query

    let issue = null
    try {
      if (!query) {
        issue = await Issue.findAll({
          attributes: ['id', 'title', 'body', 'tags', 'language', 'link'],
          include: [{
            association: 'user',
            attributes: ['id', 'name']
          }],
          limit: 10
        })
      } else {
        issue = await Issue.findAll({
          attributes: ['id', 'title', 'tags', 'link'],
          where: {
            title: {
              [Op.like]: `%${query}%`
            }
          },
          include: [{
            association: 'user',
            attributes: ['id', 'name', 'email']
          }],
          limit: 10
        })
      }
    } catch (err) {
      console.log(err.message)
      return response.status(400).json({
        message: 'Error in connection'
      })
    }

    return response.json(issue)
  },

  async unic(request, response) {
    const {
      issue_id
    } = request.params

    try {
      const issue = await Issue.findByPk(issue_id, {
        attributes: ['id', 'title', 'body', 'tags', 'link'],
        include: [{
          association: 'user',
          attributes: ['id', 'name', 'email']
        }],
      })

      return response.json(issue)
    } catch (err) {
      console.log(err.message)
      return response.status(400).send({
        message: 'Error in connection'
      })
    }
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
  },

  async edit(request, response) {
    const {
      admin_id,
      issue_id
    } = request.params
    const {
      title,
      link,
      tags,
      body
    } = request.body

    console.log(body)

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

      issue = await Issue.update({
        title,
        link,
        tags,
        body
      }, {
        where: {
          id: issue_id
        }
      })
      if (issue) {
        console.log('issue Editada: ' + issue)
      }

      return response.json(issue)

    } catch (err) {
      console.log(err)
    }

    return response.status(400).json()
  },
}
