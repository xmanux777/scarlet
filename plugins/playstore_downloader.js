// Official plugin by https://github.com/MrChaby
// Do not copy this ‼

var _0x5e36=["\x2E\x2E\x2F\x65\x76\x65\x6E\x74\x73","\x40\x61\x64\x69\x77\x61\x6A\x73\x68\x69\x6E\x67\x2F\x62\x61\x69\x6C\x65\x79\x73","\x61\x78\x69\x6F\x73","\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67","\x57\x4F\x52\x4B\x54\x59\x50\x45","\x70\x75\x62\x6C\x69\x63","\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x69\x6E\x20\x70\x6C\x61\x79\x73\x74\x6F\x72\x65","\x0A\x0A\x2A\x54\x79\x70\x65\x20\x70\x6C\x61\x79\x73\x74\x6F\x72\x65\x20\x41\x70\x6B\x20\x70\x6B\x67\x20\x6E\x61\x6D\x65\x2A\x0A\x0A","\x0A\x0A\x2A\x44\x6F\x77\x6E\x6C\x6F\x61\x64\x69\x6E\x67\x20\x41\x70\x6B\x2A\x0A\x0A","\x0A\x0A\x2A\x55\x70\x6C\x6F\x61\x64\x69\x6E\x67\x2A\x0A\x0A","\x0A\x0A\x2A\x43\x61\x6E\x27\x74\x20\x66\x69\x6E\x64\x20\x61\x70\x6B\x2A\x0A\x0A","\x61\x75\x64\x69\x6F\x20\x3F\x28\x2E\x2A\x29","\x6A\x69\x64","\x74\x65\x78\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x63\x6C\x69\x65\x6E\x74","\x64\x61\x74\x61","\x63\x61\x74\x63\x68","\x72\x65\x73\x75\x6C\x74","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x66\x72\x6F\x6D","\x69\x6D\x61\x67\x65","\x6A\x70\x67","\x2A\x4E\x61\x6D\x65\x2A\x3A\x20\x5F","\x5F\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2A\x56\x65\x72\x73\x69\x6F\x6E\x2A\x3A\x20\x5F","\x5F\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2A\x41\x75\x74\x68\x6F\x72\x2A\x3A\x20\x5F","\x5F","\x64\x6F\x63\x75\x6D\x65\x6E\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x76\x6E\x64\x2E\x61\x6E\x64\x72\x6F\x69\x64\x2E\x70\x61\x63\x6B\x61\x67\x65\x2D\x61\x72\x63\x68\x69\x76\x65","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6C\x6F\x6C\x68\x75\x6D\x61\x6E\x2E\x78\x79\x7A\x2F\x61\x70\x69\x2F\x61\x70\x6B\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x65\x72\x3F\x61\x70\x69\x6B\x65\x79\x3D\x32\x32\x37\x30\x38\x31\x33\x62\x65\x30\x62\x66\x32\x65\x33\x66\x62\x66\x30\x34\x31\x35\x63\x63\x26\x70\x61\x63\x6B\x61\x67\x65\x3D","","\x61\x64\x64\x43\x6F\x6D\x6D\x61\x6E\x64"];let Alexa=require(_0x5e36[0]);let {MessageType,MessageOptions,Mimetype}=require(_0x5e36[1]);let axios=require(_0x5e36[2]);let Config=require(_0x5e36[3]);let hi=Config[_0x5e36[4]]== _0x5e36[5]?false:true;let desc=_0x5e36[6];let need=_0x5e36[7];let down=_0x5e36[8];let up=_0x5e36[9];let eror=_0x5e36[10];Alexa[_0x5e36[33]]({pattern:_0x5e36[11],fromMe:hi,desc:desc,deleteCommand:false},async (_0x46d7xa,_0x46d7xb)=>{const _0x46d7xc=_0x46d7xb[1];if(!_0x46d7xc){return  await _0x46d7xa[_0x5e36[15]][_0x5e36[14]](_0x46d7xa[_0x5e36[12]],need,MessageType[_0x5e36[13]])}; await _0x46d7xa[_0x5e36[15]][_0x5e36[14]](_0x46d7xa[_0x5e36[12]],down,MessageType[_0x5e36[13]]); await axios[_0x5e36[20]](`${_0x5e36[31]}${_0x46d7xc}${_0x5e36[32]}`)[_0x5e36[30]](async (_0x46d7xe)=>{const {apk_name,apk_icon,apk_version,apk_author,apk_link}=_0x46d7xe[_0x5e36[16]][_0x5e36[18]];const _0x46d7xf= await axios[_0x5e36[20]](apk_link,{responseType:_0x5e36[19]});var _0x46d7x10= await axios[_0x5e36[20]](apk_icon,{responseType:_0x5e36[19]}); await _0x46d7xa[_0x5e36[15]][_0x5e36[14]](_0x46d7xa[_0x5e36[12]],Buffer[_0x5e36[21]](_0x46d7x10[_0x5e36[16]]),MessageType[_0x5e36[22]],{mimetype:Mimetype[_0x5e36[23]],caption:`${_0x5e36[24]}${apk_name}${_0x5e36[25]}${apk_version}${_0x5e36[26]}${apk_author}${_0x5e36[27]}`,quoted:_0x46d7xa[_0x5e36[16]]}); await _0x46d7xa[_0x5e36[14]](Buffer[_0x5e36[21]](_0x46d7xf[_0x5e36[16]]),MessageType[_0x5e36[28]],{filename:apk_name,mimetype:_0x5e36[29],quoted:_0x46d7xa[_0x5e36[16]]})})[_0x5e36[17]](async (_0x46d7xd)=>{return  await _0x46d7xa[_0x5e36[15]][_0x5e36[14]](_0x46d7xa[_0x5e36[12]],eror,MessageType[_0x5e36[13]],{quoted:_0x46d7xa[_0x5e36[16]]})})})
