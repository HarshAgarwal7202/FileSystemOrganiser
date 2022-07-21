function organizeFn(dirpath){
    // console.log("organize command implemented for",dirpath);
    let destPath;
    if(dirpath==undefined){

        destPath=process.cwd();
        return;
    }else{
        let doesExist=fs.existsSync(dirpath);
        if(doesExist){
            destPath=path.join(dirpath,"organized_files");
            if(fs.existsSync(destPath)==false){
            fs.mkdirSync(destPath);
            }
        }
        else{
            console.log("kindly enter the correct path");
            return;
        }
    }
    organizeHelpr(dirpath,destPath);
}
function organizeHelpr(src,dest){
    let childName=fs.readdirSync(src);
    // console.log(childName);
    for(let i=0;i<childName.length;i++){
        let childAdrresses=path.join(src,childName[i]);
        let isFile=fs.lstatSync(childAdrresses).isFile();
        if(isFile){
            // console.log(childName[i]);
            let category=getcategory(childName[i]);
            console.log(childName[i],"belog to",category);
            sendFiles(childAdrresses,dest,category);
            
        }
    }
}
function getcategory(name){
    let ext=path.extname(name);
    // console.log(ext);
    ext=ext.slice(1);
    for(let type in types){
        let cTypeArray=types[type];
        for(let i=0;i<cTypeArray.length;i++){
            if(ext==cTypeArray[i]){
                return type;
            }
        }
        
    }
    return "others";
}
function sendFiles(srcFilePath,dest,category){
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName=path.basename(srcFilePath);
    let desFilePath=path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,desFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName,"copies to ",category);
}
module.exports={
    orgKey:organizeFn
}