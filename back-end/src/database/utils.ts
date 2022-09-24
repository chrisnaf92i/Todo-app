import { DataSource, EntityTarget } from "typeorm";
import Task from "../Model/Task/task.entieties";


const dataSource = new DataSource({
    type:"sqlite",
    database:"mydatabase.sqlite",
    synchronize:true,
    logging:["query", "error"],
    entities: [Task]
})

let initialized = false;
const getDatabase = async () => {
    if( !initialized ) {
        await dataSource.initialize();
        initialized = true;
        console.log("Connexion à la base de donnée réussie")
    }
    return dataSource;
}

async function getRepository (entity: EntityTarget<any>) {
    return (await getDatabase()).getRepository(entity);
}

export { getDatabase, getRepository }