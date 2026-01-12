import { Config } from "jest";
import dotenv from "dotenv";

dotenv.config({
	quiet: true,
});

const config: Config = {
	verbose: true,
	rootDir: ".",
};

export default config;
