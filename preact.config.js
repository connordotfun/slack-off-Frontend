import { resolve } from "path";
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default function(config, env, helpers) {
    // Switch css-loader for typings-for-css-modules-loader, which is a wrapper
    // that automatically generates .d.ts files for loaded CSS
    helpers.getLoadersByName(config, "css-loader").forEach(({ loader }) => {
        loader.loader = "typings-for-css-modules-loader";
        loader.options = Object.assign(loader.options, {
            camelCase: true,
            banner:
                "// This file is automatically generated from your CSS. Any edits will be overwritten.",
            namedExport: true,
            silent: true
        });
    });

    config.module.loaders.push({
        test: /\.[tj]sx?$/,
        loader: "ts-loader"
    });

    // Use any `index` file, not just index.js
    config.resolve.alias["preact-cli-entrypoint"] = resolve(
        process.cwd(),
        "src",
        "index"
    );

    const uglifyJsPlugin = helpers.getPluginsByName(config, 'UglifyJsPlugin')[0];
	if (uglifyJsPlugin) {
		const { index } = uglifyJsPlugin;
		// console.info(`helpers.getPluginsByName(config, 'UglifyJsPlugin'): ${JSON.stringify(helpers.getPluginsByName(config, 'UglifyJsPlugin'))}`);
		// console.info(`index: ${index}`);
		// console.info(`before config.plugins: ${JSON.stringify(config.plugins[index])}`);
		// console.info(`before config.plugins.length: ${JSON.stringify(config.plugins.length)}`);
		config.plugins.splice(index, 1, new UglifyJsPlugin());
		// console.info(`after config.plugins: ${JSON.stringify(config.plugins[index])}`);
		// console.info(`after config.plugins.length: ${JSON.stringify(config.plugins.length)}`);
	}

    return config;
}
