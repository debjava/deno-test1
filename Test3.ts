// import {logger} from "./dep.ts";
// import * from ".dep.ts";

import { log } from "./dep.ts";
await new Promise((resolve) => setTimeout(resolve, 0));

export class Test3 {

    public show() {
        log.debug("Hello world");
        log.info("Hello world");
        log.warning("Hello world");
        log.error("Hello world");
        log.critical("500 Internal server error");
        console.log("Hello ....")
    }

}

const test = new Test3();
test.show();