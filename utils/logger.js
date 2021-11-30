import winston from "winston";

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  verbose: 'cyan',
  debug: 'blue',
  silly: 'magenta'
})

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
}


const LoggerUtil = winston.createLogger({
  levels: levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  transports: new winston.transports.Console({
    format: winston.format.simple()
  })
})

export default LoggerUtil;
