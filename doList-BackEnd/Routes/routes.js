import express from 'express';

import ListaController from '../src/Controllers/ListaController';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: 'doListAPI',
        version: '1.0.0',
    });
});

router.get('/tarefas', ListaController.getTodo);
router.post('/novastarefas', ListaController.createTodo);
router.delete('/tarefas/:id', ListaController.deleteTodo);
router.put('/tarefas/:id', ListaController.updateTodo);

export default router;