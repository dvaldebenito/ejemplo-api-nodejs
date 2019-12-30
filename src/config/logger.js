const loggerConfiguration = {
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '[%p] - [%h] - [%d{dd-MM-yyyy hh:mm:ss}] - [%c]: %m%'
      }
    }
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'all'
    }
  }
}

const Logger = ({ log4js }) => {
  log4js.configure(loggerConfiguration)
  return {
    log4js
  }
}

export default Logger
