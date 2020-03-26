var fs = require("fs")
var polyline = require('polyline')
var dat = polyline.decode('l|lxBhcjkGIh@|GHDYLo@BC@A@?DAn@?~ALrI|APDLFXRLLFJHPFTBN?LE\\?XDVFNgArBm@dAQ^G\\V`@dBnC^l@dA`BVZLBpBpA|A`AjDrBlC?@bC@dC@bC@dC@dC@fCBjC@nC@dCbH?|FEpHC?nAbHFbEFCnEKlEDF?FChB?zC?PA\\?F?b@|CVfDVlAJf@FX@[vFpCRrCVpCR_@tF_@rFc@zF?FAFAF[`EAPEb@YtEAFAJOrBAXYXMCGJ')
//dat = dat.concat(polyline.decode('llh}BhdggG?LBf@?B@t@?\\?P@HFTPh@L`@Vh@'))

//dat = dat.concat(polyline.decode('dnh}BzdggGUAa@OBt@@hBH^^jAVh@k@f@i@b@iCfBm@X_A\\qBn@y@^k@VI]Gm@I{@wEt@eAJw@BAwD@vDv@CdAKvEu@PhBH\\i@P[TGJUd@GZEr@CxBIfAGZGPwATgBXc@FgBXBFFVNdA`@tCh@lDNpAL|AJ~A@l@EbAIt@m@tB{@bDm@pBK`@w@vB]v@QMOOMYOWGACAB@F@HJJVFLNNPLQd@a@~@Wr@Qp@UpAk@tECfABgAj@uETqAPq@Vs@pA}C`AqCZcAr@mC`AiDLo@HmA?g@GiAI_BQuAo@mE[_C[sBGQiAcBo@y@YCqAHBmALiCgBO[GeAWBdAPlDDd@ZIf@Gn@?f@?BmAFuAFgADyCEcBQgBO_A_@cAg@cAcAwA_AsAe@{@[g@Si@@e@Ha@v@wD@g@G_@cBgCUi@C_@@KVm@j@y@dAmA`A_AhA{@v@w@Ze@dA}BvDsIl@eAf@o@l@c@jAe@~AYbAQ`@M`@WXYXe@Lm@B[Ak@Ki@Wo@wAuBk@}@]y@_@}AKgAEeC?cC@gDK{Ai@_C_AoDQgAGq@?y@HcAD[]e@g@q@}AkBg@e@aBgAwDuBy@c@KMIOK[QaCCe@I]}ByBcA{@]WsAu@cA[iBe@_Do@eB]mALkA@cAAu@Aa@R'))

dat.forEach(element => {
   console.log(element) 
   var a = element[0]
   element[0] = element[1]
   element[1] = a
});
var geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": dat
        }
      }
    ]
  }

  fs.writeFile('rota.geojson', JSON.stringify(geojson), (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
})
/*
dat = polyline.decode('dnh}BzdggGUAa@O')

dat = dat.concat(polyline.decode('llh}BhdggG?LBf@?B@t@?\\?P@HFTPh@L`@Vh@'))

dat = dat.concat(polyline.decode('tnh}B~mggGk@f@URSNe@\\WNcAt@GBMF_@PUJi@PSHC@w@Ta@Le@TSHk@VMD[JMJMHABEFKRIPCJERARAZ?LAz@A`@?LE|@CHAJENGP'))
dat = dat.concat(polyline.decode('~xg}BlehgGwATa@FeAPK@WDgBX'))
dat = dat.concat(polyline.decode('rng}B~ghgG]i@k@y@CEYa@MMCCCAA?GAK?a@Do@BQ?'))
dat = dat.concat(polyline.decode('zfg}BfchgGTXBB?B?@?@?@?@ABABGDIHQPOJIDC@C@SBK@MBOBO@W?uAHe@FU@QBW?S@a@CC?'))
dat = dat.concat(polyline.decode('nzf}BvghgGSAY?OCMCUGKEYM'))
dat = dat.concat(polyline.decode('fvf}BpfhgGXLJDTFLBNB'))
dat = dat.concat(polyline.decode('`yf}BtghgGENKTSb@U`@OTA@SZKP'))
dat = dat.concat(polyline.decode('ruf}BfmhgGKRMTINELS\\MV'))
dat = dat.concat(polyline.decode('fsf}BdqhgGEDm@fA[h@[d@UTUPOJQJw@h@w@\\c@NQHM@G@'))
dat = dat.concat(polyline.decode('pgf}Bh{hgGGAE?G@MBI@WHSHODeAd@aA`@SFWJc@Li@N]Ja@JQDMDOHIHGFIH[^]`@'))
dat = dat.concat(polyline.decode('~ue}BndigG_@`@WZMLKHSN'))
dat = dat.concat(polyline.decode('xre}BtgigGEHIJQPY\\UTSXOXM\\O\\AHCHAJ'))
dat = dat.concat(polyline.decode('|me}B`oigG?@?J@^@N?H@FBFDFLN\\\\PRDFBD@F@F?FB\\BZB^AVAXGb@CVAL@H?HBF@FBFDJFNBLBRBTBVHj@B^@L?HAFCFCJCLAJAJ?J?B?FBTBr@BTDXDP@HBFJVJTHRBHBP@H?H?HAJ?B?FEN'))
dat = dat.concat(polyline.decode('|se}BvpjgGDO?G?C@K?I?IAICQCIISKUKWCGAIEQEYCUCs@CU?G?C?K@K@KBMBKBG@G?IAMC_@Ik@CWCUCSCMGOEKCGAGCG?IAI@MBWFc@@Y@WC_@C[C]?GAGAGCEEGQS]]MOEGCGAG?IAOA_@?K@MBI@IN]L]NYRYTUX]PQHKDI'))
dat = dat.concat(polyline.decode('xre}BtgigGROJILMV[|@cAZ_@HIFGHINILEPE`@K\\Kh@Ob@MVKRG'))
dat = dat.concat(polyline.decode('~_f}Bp~hgGFJHJNRJN'))
dat = dat.concat(polyline.decode('laf}Bl`igGKOOSIKGK'))
dat = dat.concat(polyline.decode('~_f}Bp~hgG`Aa@dAe@NERIVIHALCFAD?F@'))
dat = dat.concat(polyline.decode('pgf}Bh{hgG@OD[Fq@Fs@BYD[JiAHg@DSDSL[N]PYLQ\\e@NOTWLOBCd@c@b@c@LMLIDCDCJEHAFCFAFAFAFCDA'))
dat = dat.concat(polyline.decode('~sf}B~ehgGFGFG'))
dat = dat.concat(polyline.decode('ntf}BnehgG@SCc@Am@AU?OAk@?S?O?Q@I?EHMJM'))
dat = dat.concat(polyline.decode('~tf}Bt|ggGBCNQLKNULQHUHYJYH]n@eC@IBKBQBSBS@I?K?KAK?GAU?I'))
dat = dat.concat(polyline.decode('hzf}BvmggGEc@E_@CWCSEUGYIWGQOc@Ws@Se@ISg@cAEKMW'))
dat = dat.concat(polyline.decode('rtf}Br_ggGCG]e@OOOMSKMEMEAAUK_@SEGSSOKQKKEIASCO?Y?Y@[@eADS?KA'))
dat = dat.concat(polyline.decode('|ef}BtyfgGIIGICE?CAE?C@E@IBMHYPo@Ts@BGDIFINMJ_@FWDWBOJm@Hg@MSWm@U}@CGCG'))
dat = dat.concat(polyline.decode('pgf}B`hfgGBFBFT|@Vl@LR'))
dat = dat.concat(polyline.decode('tif}BplfgGF[F_@Fa@DO@K@M?e@@_AAq@?AAQCQO}@Ik@?k@?A?]?GBYDg@Ho@Fc@'))
dat = dat.concat(polyline.decode('rjf}BvwegGGb@In@Ef@CX?F?\\?@?j@Hj@N|@BP@P?@@p@A~@?d@ALAJENG`@G^'))
dat = dat.concat(polyline.decode('|if}BtkfgGRFBB@@@@@B?B?D?FAHCLABIZMZKVGRABGJQ`@'))
dat = dat.concat(polyline.decode('jhf}BlrfgGPFNFf@Ld@HTDB?JDPDPDNBL@R?VCZENAH?D@LBPFVLLDJ@B?@?B?JCLEHEJIj@k@ZWb@]HGn@e@'))
dat = dat.concat(polyline.decode('|{f}B`pfgG?G?E@EHSLYRYV_@Zc@h@i@d@e@ZY`@[f@_@d@c@PSPWHMHONYTk@Tg@j@oAz@sBz@mBRa@@CHQLWRWPUTY^YLIPIRKPGRGTGTETE\\Ed@I\\GVGHEJGTOLKJMLQJSDUFWB[AY?QACAIAMEMIUMYo@_Ag@u@W_@S]KSQe@Om@Oo@Kw@?OCa@AcB?u@?mA?E@kB?q@?CG_AC[GYa@eB[mAW_AAGIYIc@Gc@Ea@AOAU@c@Bc@D_@D['))
dat = dat.concat(polyline.decode('lsg}BbtcgG]e@a@i@EGY[[a@UYQSQQUSo@e@q@a@IE_@UyA{@s@]k@YMIIIACCEEIEKEOCUC]Eq@C[?CCa@COEMSUg@c@IIw@u@Y[i@_@AA[U_@UOKEA]Q[Kg@Og@OaAUWGA?]IgB]}AYGC'))
dat = dat.concat(polyline.decode('bif}BbqbgGeAJG@Y@q@?W?k@A[CK?E?G@E?GBSN'))
dat = dat.concat(polyline.decode(''))


dat.forEach(element => {
   console.log(element) 
   var a = element[0]
   element[0] = element[1]
   element[1] = a
});
geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": dat
        }
      }
    ]
  }

  fs.writeFile('rota2.geojson', JSON.stringify(geojson), (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
})

dat = polyline.decode('dnh}BzdggGUAa@O')

dat = dat.concat(polyline.decode('llh}BhdggG?LBf@?B@t@?\\?P@HFTPh@L`@Vh@'))
dat = dat.concat(polyline.decode('tnh}B~mggGk@f@URSNe@\\WNcAt@GBMF_@PUJi@PSHC@w@Ta@Le@TSHk@V'))
dat = dat.concat(polyline.decode('n}g}BrxggGI]CUCWE[C_@'))
dat = dat.concat(polyline.decode('r|g}BjtggGyAT}B^'))
dat = dat.concat(polyline.decode('zug}B`vggGg@F]Bg@BO?'))
dat = dat.concat(polyline.decode('|qg}BpvggGAeD?Q'))
dat = dat.concat(polyline.decode('zqg}BxpggGAG'))
dat = dat.concat(polyline.decode('xqg}BppggG@X@dD'))
dat = dat.concat(polyline.decode('|qg}BpvggGN?f@C\\Cf@G|B_@xAU'))
dat = dat.concat(polyline.decode('r|g}BjtggGB^DZBVBTBL'))
dat = dat.concat(polyline.decode('h}g}BbxggGDN'))
dat = dat.concat(polyline.decode('n}g}BrxggGMD[JMJMHABEFKRIPCJERARAL'))
dat = dat.concat(polyline.decode('|yg}Bn}ggG?L?LAz@A`@?LE|@CHAJENGP'))
dat = dat.concat(polyline.decode('~xg}BlehgGwATa@FeAPK@WDgBX'))
dat = dat.concat(polyline.decode('rng}B~ghgGBFBHBLDXHj@F^BPF^LbA@HPbALx@Fd@Fh@Ff@Hl@Bn@Dn@Dn@@X?R?REn@C\\EVGVK\\Of@IV[jA_@vASt@Yz@AFIX]bACF'))
dat = dat.concat(polyline.decode('plg}BzrigGUj@]v@'))
dat = dat.concat(polyline.decode('|jg}B~uigGQMIGEGCECGEI?ACGACEGCCEAA?CA'))
dat = dat.concat(polyline.decode('phg}BjsigGB@@?D@BBDF@BBF?@DHBFBDDFHFPL'))
dat = dat.concat(polyline.decode('|jg}B~uigGQd@Q`@O\\MXIXIVGXETGVCTCLGb@E\\UbBGn@A`@Ad@'))
dat = dat.concat(polyline.decode('xeg}BzgjgG@e@@a@Fo@TcBD]Fc@BMBUFWDUFYHWHYLYN]Pa@Pe@\\w@Xs@\\cAHY@GX{@Ru@^wAZkAHWNg@J]FWDWB]Do@?S?SAYEo@Eo@Co@Im@Gg@Gi@Ge@My@QcAAIMcAG_@CQG_@Ik@EYCMCICG]i@k@y@CEYa@MMCCCAA?GAK?a@Do@B'))
dat = dat.concat(polyline.decode('lgg}BfchgG?e@Bg@?I@Q'))
dat = dat.concat(polyline.decode('rgg}B|_hgG@GBq@Ds@'))
dat = dat.concat(polyline.decode('~gg}Bn|ggGiAG]GGA'))
dat = dat.concat(polyline.decode('ndg}B|{ggGSE]Kg@K'))
dat = dat.concat(polyline.decode('tag}B~zggG@j@@X'))
dat = dat.concat(polyline.decode('xag}Bd}ggGBf@F|ABV@N@TBN'))
dat = dat.concat(polyline.decode('pbg}BxchgG[Bw@?C`@IjA'))
dat = dat.concat(polyline.decode('n_g}BjghgGe@FU@QBW?S@a@CC?'))
dat = dat.concat(polyline.decode('nzf}BvghgGSAY?OCMCUGKEYM'))
dat = dat.concat(polyline.decode('fvf}BpfhgGXLJDTFLBNB'))
dat = dat.concat(polyline.decode('`yf}BtghgGENKTSb@U`@OTA@SZKP'))
dat = dat.concat(polyline.decode('ruf}BfmhgGKRMTINELS\\MV'))
dat = dat.concat(polyline.decode('fsf}BdqhgGEDm@fA[h@[d@UTUPOJQJw@h@w@\\c@NQHM@G@'))
dat = dat.concat(polyline.decode('pgf}Bh{hgGGAE?G@MBI@WHSHODeAd@aA`@SFWJc@Li@N]Ja@JQDMDOHIHGFIH[^]`@'))
dat = dat.concat(polyline.decode('~ue}BndigG_@`@WZMLKHSN'))
dat = dat.concat(polyline.decode('xre}BtgigGEHIJQPY\\UTSXOXM\\O\\AHCHAJ'))
dat = dat.concat(polyline.decode('|me}B`oigG?@?J@^@N?H@FBFDFLN\\\\PRDFBD@F@F?FB\\BZB^AVAXGb@CVAL@H?HBF@FBFDJFNBLBRBTBVHj@B^@L?HAFCFCJCLAJAJ?J?B?FBTBr@BTDXDP@HBFJVJTHRBHBP@H?H?HAJ?B?FEN'))
dat = dat.concat(polyline.decode('|se}BvpjgGDO?G?C@K?I?IAICQCIISKUKWCGAIEQEYCUCs@CU?G?C?K@K@KBMBKBG@G?IAMC_@Ik@CWCUCSCMGOEKCGAGCG?IAI@MBWFc@@Y@WC_@C[C]?GAGAGCEEGQS]]MOEGCGAG?IAOA_@?K@MBI@IN]L]NYRYTUX]PQHKDI'))
dat = dat.concat(polyline.decode('xre}BtgigGROJILMV[|@cAZ_@HIFGHINILEPE`@K\\Kh@Ob@MVKRG'))
dat = dat.concat(polyline.decode('~_f}Bp~hgGFJHJNRJN'))
dat = dat.concat(polyline.decode('laf}Bl`igGKOOSIKGK'))
dat = dat.concat(polyline.decode('~_f}Bp~hgG`Aa@dAe@NERIVIHALCFAD?F@'))
dat = dat.concat(polyline.decode('pgf}Bh{hgG@OD[Fq@Fs@BYD[JiAHg@DSDSL[N]PYLQ\\e@NOTWLOBCd@c@b@c@LMLIDCDCJEHAFCFAFAFAFCDA'))
dat = dat.concat(polyline.decode('~sf}B~ehgGFGFG'))
dat = dat.concat(polyline.decode('ntf}BnehgG@SCc@Am@AU?OAk@?S?O?Q@I?EHMJM'))
dat = dat.concat(polyline.decode('~tf}Bt|ggGBCNQLKNULQHUHYJYH]n@eC@IBKBQBSBS@I?K?KAK?GAU?I'))
dat = dat.concat(polyline.decode('hzf}BvmggGEc@E_@CWCSEUGYIWGQOc@Ws@Se@ISg@cAEKMW'))
dat = dat.concat(polyline.decode('rtf}Br_ggGCG]e@OOOMSKMEMEAAUK_@SEGSSOKQKKEIASCO?Y?Y@[@eADS?KA'))
dat = dat.concat(polyline.decode('|ef}BtyfgGIIGICE?CAE?C@E@IBMHYPo@Ts@BGDIFINMJ_@FWDWBOJm@Hg@MSWm@U}@CGCG'))
dat = dat.concat(polyline.decode('pgf}B`hfgGBFBFT|@Vl@LR'))
dat = dat.concat(polyline.decode('tif}BplfgGF[F_@Fa@DO@K@M?e@@_AAq@?AAQCQO}@Ik@?k@?A?]?GBYDg@Ho@Fc@'))
dat = dat.concat(polyline.decode('rjf}BvwegGGb@In@Ef@CX?F?\\?@?j@Hj@N|@BP@P?@@p@A~@?d@ALAJENG`@G^'))
dat = dat.concat(polyline.decode('|if}BtkfgGRFBB@@@@@B?B?D?FAHCLABIZMZKVGRABGJQ`@'))
dat = dat.concat(polyline.decode('jhf}BlrfgGPFNFf@Ld@HTDB?JDPDPDNBL@R?VCZENAH?D@LBPFVLLDJ@B?@?B?JCLEHEJIj@k@ZWb@]HGn@e@'))
dat = dat.concat(polyline.decode('|{f}B`pfgG?G?E@EHSLYRYV_@Zc@h@i@d@e@ZY`@[f@_@d@c@PSPWHMHONYTk@Tg@j@oAz@sBz@mBRa@@CHQLWRWPUTY^YLIPIRKPGRGTGTETE\\Ed@I\\GVGHEJGTOLKJMLQJSDUFWB[AY?QACAIAMEMIUMYo@_Ag@u@W_@S]KSQe@Om@Oo@Kw@?OCa@AcB?u@?mA?E@kB?q@?CG_AC[GYa@eB[mAW_AAGIYIc@Gc@Ea@AOAU@c@Bc@D_@D['))
dat = dat.concat(polyline.decode('lsg}BbtcgG]e@a@i@EGY[[a@UYQSQQUSo@e@q@a@IE_@UyA{@s@]k@YMIIIACCEEIEKEOCUC]Eq@C[?CCa@COEMSUg@c@IIw@u@Y[i@_@AA[U_@UOKEA]Q[Kg@Og@OaAUWGA?]IgB]}AYGC'))
dat = dat.concat(polyline.decode('bif}BbqbgGeAJG@Y@q@?W?k@A[CK?E?G@E?GBSN'))
dat = dat.concat(polyline.decode(''))



dat.forEach(element => {
   console.log(element) 
   var a = element[0]
   element[0] = element[1]
   element[1] = a
});
geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": dat
        }
      }
    ]
  }

  fs.writeFile('rota3.geojson', JSON.stringify(geojson), (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
})*/