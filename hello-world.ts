// import * as log from "https://deno.land/std/log/mod.ts";
import * as log from 'https://deno.land/std/logging/index.ts';

// await log.setup({
//     handlers: {
//       console: new log.handlers.ConsoleHandler("DEBUG"),
//       file: new log.handlers.FileHandler("WARNING", {
//         filename: "./log.txt",
//         // you can change format of output message using any keys in `LogRecord`
//         formatter: "{levelName} {msg}",
//       }),
//     },
//     loggers: {
//       // configure default logger available via short-hand methods above
//       default: {
//         level: "DEBUG",
//         handlers: ["console", "file"],
//       },
//       tasks: {
//         level: "ERROR",
//         handlers: ["console"],
//       },
//     },
//   });

export class HelloWorld {

    public showMessage(): void {
        log.info("SOm info ..........");
        // const myLogger = log.getLogger();
        console.log("Hello World ...");
        log.debug("Hati Ghoda ..........");
    }
}

const hello = new HelloWorld();
hello.showMessage();
