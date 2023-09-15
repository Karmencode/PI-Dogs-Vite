const { Dog } = require('../db');


async function deleteDog(req, res){ //Funcion para eliminar un pokemon de la base de datos.
    try {
        const { id } = req.params;
        if (id.length <= 4) { /* Me aseguro que no sea un id que provenga desde la API. */
            return res.status(404).send('No se puede eliminar un Pokemon de la API');

        } else { //si el id es mas largo que 4 caracteres...
            const dbDog = await Dog.findByPk(id) //Busco un pokemon por su id de la base de datos.

            if (!dbDog) { ///Si no existe ese pokemon con ese id...
                return res.status(404).send('No se puede eliminar el Perro');
            }

            await dbDog.destroy()
            return res.status(200).send('El Perro fue eliminado exitosamente');
        }

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = deleteDog;