const fs = require('fs-extra');

	try {
		
		let rootDir = process.cwd();

		let base_x_3_0_4 = `${rootDir}/node_modules/base-x`;
		let base_x_mnid = `${rootDir}/node_modules/mnid/node_modules/base-x`;
		let base_x_uport_lite = `${rootDir}/node_modules/uport-lite/node_modules/base-x`;
		let base_x_bs58 = `${rootDir}/node_modules/bs58/node_modules/base-x`;
		
		console.log("Post scripts installation: replacement base-x@3.0.5 with base-x@3.0.4");
		
		fs.removeSync(base_x_mnid);
		
		fs.copySync(base_x_3_0_4, base_x_mnid);
		
		
		fs.removeSync(base_x_uport_lite);		
		
			
		fs.copySync(base_x_3_0_4, base_x_uport_lite);
		
		fs.removeSync(base_x_bs58);
		
	
		fs.copySync(base_x_3_0_4, base_x_bs58);
		
    } catch (error) {
        console.error(error)
    }