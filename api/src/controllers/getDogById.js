
const { getAllDogs } = require('./getAllDogs');


async function getDogById(req, res) {
    try {
        const { id } = req.params;
        const allDogs = await getAllDogs();
        console.log(id);
        // console.log(allDogs);

        const findDog = await allDogs.find((dog) => dog.id === id || dog.id === Number(id));
        if (findDog.length <= 0) throw new Error('Your little friend was not found');

        // console.log(findDog);
        return res.status(200).json(findDog);
    } catch (error) {
        return res.status(404).send(error.message);
    }

};

// Los controladores manejan toda la logica de las rutas

module.exports = getDogById;