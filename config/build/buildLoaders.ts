import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(): webpack.RuleSetRule[] {
	const cssLoader = {
		test: /\.css$/i,
		use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
	};

	//если не используем тайпскрипт - нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [typescriptLoader, cssLoader];
}
