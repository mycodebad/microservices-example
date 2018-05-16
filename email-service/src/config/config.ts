const config:any  = {         
    email:{
        'service':'Gmail',
        'userEmail':'example@domain.com',
        'userPass':'123456',
        host:'localhost',
    },
    ports : 4003,
    rabbit:{
        host: `amqp://${process.env.RABBITMQ_DEFAULT_USER || 'admin'}:${process.env.RABBITMQ_DEFAULT_PASS || 'mypass'}@${process.env.RABBIT || 'localhost'}`        
    }
};

export default config;
