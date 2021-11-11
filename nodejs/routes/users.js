import express from 'express';
import {v4 as uuidv4} from 'uuid';
const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('Hello');
//     console.log('users');
// });
router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');
    res.send('POST ROUTE REACHED');

    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user, id: userId};
    user.push(userWithId);
    res.send(`user with the name ${user.firstName} added to the database!`);
});
router.get('/:id', (req, res) => {
    res.send('THE GET ID ROUTE')
});

export default router;