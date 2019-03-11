var winston = require('winston');

var options = {
    file: {
      level: 'silly',
      filename: 'logs/app.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'silly',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

  const logger = new winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false, 
  });


  logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
      logger.error('error',message);
      
      
    },
  };

  module.exports = logger;