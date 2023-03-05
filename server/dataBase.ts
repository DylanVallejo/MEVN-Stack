import { connect } from 'mongoose';

export const startConnection = async () => {
    // await connect('mongodb://127.0.0.1/mevn-task')
    try {
        // const db  = await connect('mongodb://localhost/mevn-task')
        const db  = await connect('mongodb://127.0.0.1/mevn-task')
        
        console.log(db.connection.name) 
    } catch (error) {
        console.log(error)
    }
    
    
};
