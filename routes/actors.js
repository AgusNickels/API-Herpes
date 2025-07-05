import { Router } from 'express';

export const actorRouter = Router();


actorRouter.get('/', (req, res) => {
    res.json({ menssage: 'Listado de Actores'});
})

actorRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({ message: `Encontré el ID ${id} en los Actores`});
})