module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000
    },
    post :{
        port: process.env.POST_PORT || 3002
    },
    mysql: {
        host: process.env.MYSQL_HOST || '',
        user: process.env.MYSQL_USER || '',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DATABASE || '',
    },
    mysqlserv: {
        host: process.env.MYSQLSERV_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3001,
    },
    cacheserv: {
        host: process.env.CACHESERVICE_HOST || 'localhost',
        port: process.env.CACHESERVICE_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST, 
        port: process.env.REDIS_PORT, 
        password: process.env.REDIS_PASS,
    }
}