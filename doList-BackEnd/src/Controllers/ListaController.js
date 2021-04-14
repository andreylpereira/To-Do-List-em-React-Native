// Arquivo para o CRUD, utilizando suas devidas rotas

import ListaSchema from '../Schema/ListaSchema'; 

class ListaController {

    async getTodo(req, res) {
        try {
            const data = await ListaSchema.find({}, "nome descricao data");
            res.status(200).send(data);
            console.log(data);
        } catch (error) {
            res.status(500).send({ message: 'Falha ao carregar as Tarefas!' + error });
            console.log(error);
        }
    }

    async createTodo(req, res) {
        try {
            const todo = new ListaSchema({
                nome: req.body.nome,
                descricao: req.body.descricao,
                data: req.body.data
            });

            console.log(todo);
            await todo.save();

            res.status(201).send({ message: 'Tarefa cadastrada com sucesso!' });
        } catch (error) {
            res.status(500).send({ message: 'Falha ao cadastrar a Tarefa.' + error });
        }
    }

    async updateTodo(req, res) {
        try {
            const todo = await ListaSchema.findByIdAndUpdate(req.params.id);
            if (!todo) {
                res.status(200).send({ message: "Tarefa não encontrada." });
            }
            Object.assign(todo, req.body);
            await todo.save();
            res.status(200).send(todo);
            console.log(todo);
        } catch (error) {
            res.status(500).send({ message: 'Falha ao atualizar as Tarefas!' + error });
            console.log(error);
        }
    }

    async deleteTodo(req, res) {
        try {
            const todo = await ListaSchema.findByIdAndRemove(id)
            res.status(200).send({ message: 'Tarefa deletada com sucesso!' });
            console.log(todo);
        } catch (error) {
            res.status(500).send({ message: 'Falha ao deletar as Tarefas!' + error });
            console.log(error);
        }
    }
}

export default new ListaController();