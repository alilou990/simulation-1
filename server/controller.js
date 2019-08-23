const getInventory = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_inventory()
        .then((products) => res.status(200).send(products))
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


module.exports = {
    getInventory,
    createItem
}