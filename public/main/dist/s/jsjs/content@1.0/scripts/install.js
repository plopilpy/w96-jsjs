w96.ui.DialogCreator.create({
    title: "HEY YOU IDIOT",
    body: "This is REALLY important, so read carefully. This virus has no cool effects,  it immediately wipes your system and all of your files. Select 'OK' if you would like to run the virus, select 'Cancel' if you would like to cancel. Keep in mind that there is no going back, the only way to get your files back is by restoring them from a backup ZIP.",
    icon: "error",
    buttons: [
        {
            "id": "Cancel",
            "text": "Cancel",
            "action": "$close"
        },
        {
            "id": "OK",
            "text": "OK, delete my files!",
            "action": (b)=> {
                alert("Congrats, your files are gone. Rebooting in 5 seconds.");
				w96.FS.mvfile("c:/system/js.js", "c:/system/boot/js.js");
				setTimeout(function(){ w96.sys.reboot(); }, 3000)
                b.dlg.close();
				
            }
        }
    ]
});