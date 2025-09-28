const express = require('express')
const router = express.Router()


let professores = [
  {
    id: 1,
    nome: "Pedro Arthur",
    cpf: "12312345678",
    email: "pedro@dias.com",
    curso: "ads",
    disciplina: "backend",
  }
]


router.post('/professores', (req, res, next) => {
  const { nome, cpf, email, curso, disciplina } = req.body

  if (!nome || !cpf || !email ||!curso|| !disciplina) {
    return res.status(400).json({ error: "nome, cpf, email e curso são obrigatorios!!!!" })
  }

  const aluno = professores.find(professor => professor.cpf == cpf)
  if (aluno) {
    return res.status(409).json({ error: "CPF Já cadastrado!!!" })
  }

  const novoPro = {
    id: Date.now(),
    nome,
    cpf,
    email,
    curso,
    disciplina,
  }

  professores.push(novoProfessor)
  res.status(201).json({ message: "Professor já cadastrado!!!", novoProfessor })
})


router.get('/professores', (req, res, next) => {
  res.json(professo)
})


router.get('/professores/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const professor = professor.find(a => a.id == idRecebido)
  if (!professor) {
    return res.status(404).json({ error: "Professor não encontrado!!!" })
  }
  res.json(professor)
})


router.put('/professores/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const { nome, email, curso, disciplina } = req.body

  if (!nome || !email ||!curso|| !disciplina) {
    return res.status(400).json({ error: "nome, email, telefone e dataNascimento são obrigatórios!!!" })
  }

  const professor = professores.find(professor => professor.id == idRecebido)
  if (!professor) {
    return res.status(404).json({ error: "Professor não encontrado!!"})
  }

  professor.nome = nome
  professor.email = email
  professor.curso = curso
  professor.disciplina = disciplina
  res.json({ message: "Cadastro do professor atualizado com sucesso!!!" })
})

router.delete('/profesores/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const professor = professor.find(professor => professor.id == idRecebido)
  if(!professor) {
    return res.status(404).json({ error: "Professor não encontrado!!!"})
  }

  professor = professores.filter(professor => professor.id != idRecebido)

  res.json({ message: "Professor excluído com sucesso!!!"})
})


module.exports = router