import { DataSource } from "typeorm";


const dataSource = new DataSource({
    type:"sqlite",
    database:"mydatabase.sqlite",
    logging:["query", "error"],
    entities:[]
})

let initialized = false;
const initializeDatabase = async () => {
    if( !initialized ) {
        await dataSource.initialize();
        initialized = true;
        console.log("Connexion à la base de donnée réussie")
    }
}

export { dataSource, initializeDatabase }