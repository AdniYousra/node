const express= require('express');
const authControllers = require('../controllers/auth')

const router=express.Router();
router.post("./index", authControllers.index);
router.get('/', async (req, res) => {
    const users = await database.query(`
    SELECT
        *
    FROM
        indo
`);

    res.contentType('hbs');

    res.end(`
    ${users.map((user) => {
        return `<p>${user.first_name} ${user.last_name} is ${user.age} years old</p>`;
    }).join('')}
`);
})

router.post('/', async (req, res) => {
    const body = req.body;

    await database.execute(`
    INSERT INTO indo (
        id,
        first,
        last,
        age,


    ) VALUES (
        @id
        @firstName,
        @lastName,
        @age
    )
`, {
        id:body.id,
        firstName: body.first,
        lastName: body.last,
        age: body.age,
    });

    res.end('Added user');
});
module.exports=router;