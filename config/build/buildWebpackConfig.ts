import webpack from "webpack";
import { BuildOptions } from "./types/configTypes";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { mode, paths, isDev } = options;
	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: "[name].[contenthash].js",
			path: paths.build,
			clean: true,
		},
		module: {
			rules: buildLoaders(),
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"], //при импорте можно не указывать расширения
		},
		plugins: buildPlugins(options),
		devtool: isDev ? "inline-source-map" : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
