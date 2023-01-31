interface Environment {
	NODE_ENV: unknown;
	IS_GUTENBERG_PLUGIN?: boolean;
}
interface Process {
	env: Environment;
}
declare var process: Process;
