const express = require('express')
const router = express.Router()


let alunos = [
  {
    id: 1,
    nome: "Alison Naoki",
    cpf: "12312345678",
    email: "alison@naoki.com",
    telefone: "61 99696-0522",
    dataNascimento: "01/05/2005"
  }
]


router.post('/alunos', (req, res, next) => {
  const { nome, cpf, email, telefone, dataNascimento } = req.body

  if (!nome || !cpf || !email ||!telefone|| !dataNascimento) {
    return res.status(400).json({ error: "nome, cpf, email e dataNascimento são obrigatorios!!!!" })
  }

  const aluno = alunos.find(aluno => aluno.cpf == cpf)
  if (aluno) {
    return res.status(409).json({ error: "CPF Já cadastrado!!!" })
  }

  const novoAluno = {
    id: Date.now(),
    nome,
    cpf,
    email,
    telefone,
    dataNascimento
  }

  pessoas.push(novoAluno)
  res.status(201).json({ message: "Aluno já cadastrado!!!", novoAluno })
})


router.get('/alunos', (req, res, next) => {
  res.json(alunos)
})


router.get('/alunos/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const aluno = alunos.find(a => a.id == idRecebido)
  if (!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado!!!" })
  }
  res.json(aluno)
})


router.put('/pessoas/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const { nome, email, telefone, dataNascimento } = req.body

  if (!nome || !email ||!telefone|| !dataNascimento) {
    return res.status(400).json({ error: "nome, email, telefone e dataNascimento são obrigatórios!!!" })
  }

  const aluno = alunos.find(aluno => aluno.id == idRecebido)
  if (!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado!!"})
  }

  aluno.nome = nome
  aluno.email = email
  aluno.telefone = telefone
  aluno.dataNascimento = dataNascimento
  res.json({ message: "Cadastro de aluno atualizado com sucesso!!!" })
})

router.delete('/alunos/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const aluno = alunos.find(aluno => aluno.id == idRecebido)
  if(!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado!!!"})
  }

  alunos = alunos.filter(aluno => aluno.id != idRecebido)

  res.json({ message: "Aluno excluído com sucesso!!!"})
})



module.exports = router