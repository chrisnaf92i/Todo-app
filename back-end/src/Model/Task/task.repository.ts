import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Task from "./task.entieties";

export default class TaskRepository extends Task {
    private static repository: Repository<Task>;

    static async initializeRepository() {
        this.repository = await getRepository(Task);
    }

    static async clearRepository() {
        this.repository.clear();
    }

    static async initializeTask(){
        await this.clearRepository()

        const learnJS = new Task("Développement web", "Apprendre le développement web (html, css, js)", "importance_3", false)
        const cook = new Task("Lasagne", "cuisiner des lasagnes", "importance_1", true)
    
        await this.repository.save([learnJS, cook, learnJS, cook, learnJS])
    }

    static async getTasks() {
        return this.repository.find();
    }

    static async deleteTask(id:string) {
        const task = await this.repository.findOneBy({id});

        if(!task) {
            throw Error ("Utilisateur non trouvée")
        }else {
            return this.repository.remove(task)
        }
    }
    static async setDoneTask(id:string) {
        let task = await this.repository.findOneBy({id});

        if(!task) {
            throw Error ("Utilisateur non trouvée")
        }else {
            
            task = {...task, done:!task.done}

            this.repository.save(task)
        }


    }

    
}