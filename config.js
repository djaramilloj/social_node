module.exports = {
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
    }
}