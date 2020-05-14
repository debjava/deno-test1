import * as log from "https://deno.land/std/log/mod.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },
  loggers: {
    // configure default logger available via short-hand methods above
    default: {
      level: "DEBUG",
      handlers: ["console"],
    }
  },
});

const logger = log.getLogger()

export class Test2 {

    public show() {
        logger.debug("Hello world");
        logger.info("Hello world");
        logger.warning("Hello world");
        logger.error("Hello world");
        logger.critical("500 Internal server error");
        console.log("Hello ....")
    }

}

const test = new Test2();
test.show();