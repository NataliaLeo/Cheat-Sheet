import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/configTypes";

export function buildPlugins({
	paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
	];
}
