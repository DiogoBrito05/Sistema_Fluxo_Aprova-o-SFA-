const conectar = require('../Db/db');

async function criar(req, res) {
  try {

    const { nome, email, senha } = req.body;


    if (!nome) {
      throw new Error("Nome é obrigatório");
    }

    if (nome.length < 3) {
      throw new Error("Nome deve ter pelo menos 3 caracteres");
    }

    if (!email) {
      throw new Error("E-mail é obrigatório");
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      throw new Error("E-mail inválido");
    }

    if (!senha) {
      throw new Error("Senha é obrigatória");
    }

    if (senha.length < 6) {
      throw new Error("Senha deve ter pelo menos 6 caracteres");
    }


    const db = await conectar();


    const [usuarioExistente] = await db.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );

    if (usuarioExistente.length > 0) {
      throw new Error("E-mail já cadastrado");
    }


    await db.execute(
      `
      INSERT INTO usuarios (
        nome,
        email,
        senha,
        criadoEm
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        nome,
        email,
        senha,
        new Date()
      ]
    );

    return res.status(201).json({
      message: 'Usuário criado com sucesso'
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      error: error.message
    });
  }
}

module.exports = {
  criar
};