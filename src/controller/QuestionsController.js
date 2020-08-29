/* eslint-disable camelcase */
const User = require('../model/User');
const Questions = require('../model/Questions');

module.exports = {
  // "LISTAR Questions"
  async index(req, res) {
    const {
      user_logado,
    } = req.params;

    const user = await User.findByPk(user_logado, {
      include: {
        association: 'questions',
        through: {
          attributes: [],
        },
      },
    });

    return res.json(user.questions);
  },

  // "SET QUESTIONS"
  async store(req, res) {
    const {
      user_logado,
    } = req.params;
    const {
      experience,
      tool,
      use_case,
      interests,
    } = req.body;

    let user = null;

    // "VERIFICAÇÃO"
    user = await User.findByPk(user_logado);
    if (!user) {
      return res.status(400).json({
        error: 'Account not found',
      });
    }

    if (!(Number(user_logado) === Number(req.userID))) {
      return res.status(400).send({
        error: 'Only can reply your questions!',
      });
    }

    // "CRIAÇÃO"
    let questions = null;
    try {
      questions = await Questions.create({
        experience,
        tool,
        use_case,
        interests,
      });

      await user.addQuestions(questions);

      if (questions) {
        const userForUpdate = user.id;
        await User.update({
          completed: true,
        }, {
          where: {
            id: userForUpdate,
          },
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: 'Sorry Could not be replied!',
      });
    }

    // "RETORNO"
    const {
      id,
      email,
    } = user;

    return res.json({
      user: {
        id,
        email,
      },
      questions,
    });
  },

};
