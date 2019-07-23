import app from './app';
import {connect} from 'mongoose';

(async()=>{
    try {
    //Conectar ao MongoDB
    const servidorMongoDB = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
    await connect(servidorMongoDB,{useNewUrlParser:true});

    //Iniciar Express
    app.listen(app.get('port'), () => {
        console.log(`Express executando em http://localhost:${app.get('port')} no modo ${app.get('env')}`);
    });
    } catch (error) {
        console.log('Erro:');
        console.log(error);
    }

})();