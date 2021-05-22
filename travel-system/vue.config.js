module.exports = {
	devServer: {
		proxy: {
			'/admin': {
				//代理api
				target: 'https://www.tianqiapi.com', // 代理接口(注意只要域名就够了)
				changeOrigin: true, //是否跨域
				ws: true, // proxy websockets
				pathRewrite: {
					//重写路径
					'^/admin': '' //代理路径
				}
			}
		}
	}
};

