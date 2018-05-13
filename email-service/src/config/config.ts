const config:any  = {         
    email:{
        'service':'Gmail',
        'userEmail':'gparedes@gmail.com',
        'userPass':'p4ssw0rd',
        host:'localhost',
    },
    ports : 4003,
    rabbit:{
        host: `amqp://${process.env.RABBITMQ_DEFAULT_USER || 'admin'}:${process.env.RABBITMQ_DEFAULT_PASS || 'mypass'}@${process.env.RABBIT || 'localhost'}`        
    }
};

export default config;
