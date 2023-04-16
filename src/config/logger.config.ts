import { createLogger, format, transports } from "winston";
const { combine, printf, timestamp } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const infoLogger = createLogger({
  level: "info",
  format: combine(timestamp(), myFormat),
  transports: [new transports.Console()],
});
