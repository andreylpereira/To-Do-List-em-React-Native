import mongoose from 'mongoose';

// adicionado um monitoramento de conexão com o banco de dados. No contexto do projeto talvez não seja necessário já que usa o banco de dados local
// essa abordagem é recomendada para uso em nuvem.

const db = mongoose.connection;
const url = "localhost:27017/doList";

class Database {
    constructor() {
        this.mongo();
    }
    mongo() {
        this.mongoConnection = mongoose.connect(
            `mongodb://${url}`,
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );
        this.handleConnect();
    }
    handleConnect() {
        db.on('connected', () => {
            console.log(`Mongoose default connection is open on ${url}`); 
        });

        db.on('error', err => {
            console.log(`Mongoose default connection has occured \n${err}`);
        });

        db.on('disconnected', () => {
            console.log(`Mongoose default connection is disconnected for ${url}`);
        });

        process.on('SIGINT', () => {
            db.close(() => {
                console.log(
                    'Mongoose default connection is disconnected due to application termination'
                );
                process.exit(0);
            });
        });
    }
}

export default new Database();