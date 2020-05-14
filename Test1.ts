import * as log from "https://deno.land/std/log/mod.ts";
await new Promise((resolve) => setTimeout(resolve, 0));

export class Test1 {

    public show() {
        log.debug("Hello world");
        log.info("Hello world");
        log.warning("Hello world");
        log.error("Hello world");
        log.critical("500 Internal server error");
        console.log("Hello ....")
    }

}

const test = new Test1();
test.show();