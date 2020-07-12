var orm = require("../config/orm");

class Burger {

    static addBurger(name) {
        let id = -9;
        orm.insertOne(name, (result) => {
            id = result.insertId;
            console.log(id);
        });
        return id;
    }

    static updateName(id, name){
        orm.updateOne(id,name);
    }

    static eaten(id){
        orm.updateOne(id, 1);
    }

    static getAllBurgers(res){
        orm.selectAll((result)=> { res.send(result);} );
    }
}

module.exports = {
    Burger : Burger
}