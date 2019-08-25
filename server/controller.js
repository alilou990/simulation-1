const getInventory = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_inventory()
        .then((products) => res.status(200).send(products))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
}

const getItem = (req, res) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params
    dbInstance.get_item(id)
        .then((product) => res.status(200).send(product))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
}

const createItem = (req, res) => {
    const dbInstance = req.app.get('db');
    const {name, price, img} = req.body;
    dbInstance.create_item([name, price, img])
        .then(() => res.status(200).send('Item was added!'))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
}

const deleteItem = (req, res) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;
    dbInstance.delete_item(id)
        .then(() => res.status(200).send('Item was deleted!'))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
}

const updateItem = (req, res) => {
    const dbInstance = req.app.get('db')
    const {id} = req.params
    const {name, price, img} = req.body
    dbInstance.update_item([name, price, img, id])
        .then(() => res.status(200).send('Item was updated!'))
}


module.exports = {
    getInventory,
    getItem,
    createItem,
    deleteItem,
    updateItem
}