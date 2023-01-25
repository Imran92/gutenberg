module.exports = {
	launch: {
		devtools: process.env.PUPPETEER_DEVTOOLS === 'true',
		headless: process.env.PUPPETEER_HEADLESS !== 'false',
		slowMo: parseInt( process.env.PUPPETEER_SLOWMO, 10 ) || 0,
		args: [
			'--enable-blink-features=ComputedAccessibilityInfo',
			'--disable-web-security',
			'--bwsi',
			'--deterministic-mode',
			'--disable-back-forward-cache',
			'--disable-background-networking',
			'--disable-domain-reliability',
			'--disable-extensions',
			'--disable-hang-monitor',
			'--disable-machine-cert-request',
			'--disable-oobe-chromevox-hint-timer-for-testing',
			'--disable-oobe-network-screen-skipping-for-testing',
			'--disable-popup-blocking',
			'--disable-pushstate-throttle',
			'--disable-skia-runtime-opts',
			'--disable-timeouts-for-profiling',
			'--disable-v8-idle-tasks',
			'--disable-vsync-for-tests',
			// '--enable-low-end-device-mode',
			'--enable-precise-memory-info',
			'--enable-features=SharedArrayBuffer',
			'--js-flags="--gc_experiment_less_compaction --expose-gc --sampling_heap_profiler_suppress_randomness --predictable --predictable_gc_schedule --single_threaded"',
			'--no-pings',
			'--single-process',
			'--isolation-by-default', // reducedPrecisionTimers?
			'--site-per-process', // reducedPrecisionTimers?
			'--shared-array-buffer-allowed-origins="localhost,localhost:8888,localhost:8889"',
		],
	},
};
