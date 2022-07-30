// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Family_keepHeadAwake5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Family_keepHeadAwake5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Family_keepHeadAwake5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc2,
    Thieves_robTheTime0_54: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  
  
  const [v331, v334, v344, v347, v348, v356, v367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v371 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:47:10:application call to [unknown function] (defined at: ./index.rsh:47:10:function exp)', 'at ./index.rsh:43:72:application call to "runFamily_keepHeadAwake0_54" (defined at: ./index.rsh:46:9:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'in',
    who: 'Family_keepHeadAwake'
    });
  const v373 = stdlib.gt(v348, stdlib.checkedBigNumberify('./index.rsh:48:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v373, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:10:application call to [unknown function] (defined at: ./index.rsh:47:10:function exp)', 'at ./index.rsh:47:10:application call to [unknown function] (defined at: ./index.rsh:47:10:function exp)', 'at ./index.rsh:43:72:application call to "runFamily_keepHeadAwake0_54" (defined at: ./index.rsh:46:9:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'Time is up',
    who: 'Family_keepHeadAwake'
    });
  const v377 = ['Family_keepHeadAwake0_54', v371];
  
  const txn1 = await (ctc.sendrecv({
    args: [v331, v334, v344, v347, v348, v356, v367, v377],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v334, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v394], secs: v396, time: v395, didSend: v213, from: v393 } = txn1;
      
      switch (v394[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v397 = v394[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Family_keepHeadAwake"
            });
          const v404 = stdlib.add(v356, v334);
          sim_r.txns.push({
            amt: v334,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v406 = true;
          const v407 = await txn1.getOutput('Family_keepHeadAwake', 'v406', ctc4, v406);
          
          const v412 = stdlib.add(v348, stdlib.checkedBigNumberify('./index.rsh:53:25:decimal', stdlib.UInt_max, '1'));
          const v414 = stdlib.gt(v412, stdlib.checkedBigNumberify('./index.rsh:53:41:decimal', stdlib.UInt_max, '0'));
          const v753 = v347;
          const v754 = v412;
          const v756 = v404;
          if (v414) {
            const v757 = stdlib.add(v395, v344);
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v430 = v394[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v394], secs: v396, time: v395, didSend: v213, from: v393 } = txn1;
  switch (v394[0]) {
    case 'Family_keepHeadAwake0_54': {
      const v397 = v394[1];
      undefined /* setApiDetails */;
      const v404 = stdlib.add(v356, v334);
      ;
      const v406 = true;
      const v407 = await txn1.getOutput('Family_keepHeadAwake', 'v406', ctc4, v406);
      if (v213) {
        stdlib.protect(ctc5, await interact.out(v397, v407), {
          at: './index.rsh:46:10:application',
          fs: ['at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:52:10:application call to "k" (defined at: ./index.rsh:51:11:function exp)', 'at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:11:function exp)'],
          msg: 'out',
          who: 'Family_keepHeadAwake'
          });
        }
      else {
        }
      
      const v412 = stdlib.add(v348, stdlib.checkedBigNumberify('./index.rsh:53:25:decimal', stdlib.UInt_max, '1'));
      const v414 = stdlib.gt(v412, stdlib.checkedBigNumberify('./index.rsh:53:41:decimal', stdlib.UInt_max, '0'));
      const v753 = v347;
      const v754 = v412;
      const v756 = v404;
      if (v414) {
        const v757 = stdlib.add(v395, v344);
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Thieves_robTheTime0_54': {
      const v430 = v394[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Family_timesUp5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Family_timesUp5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Family_timesUp5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v331, v334, v344, v347, v348, v356, v367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v465 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:68:7:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:67:44:application call to [unknown function] (defined at: ./index.rsh:67:44:function exp)'],
    msg: 'in',
    who: 'Family_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v331, v334, v344, v347, v348, v356, v367, v465],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:68:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v467], secs: v469, time: v468, didSend: v268, from: v466 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Family_timesUp"
        });
      ;
      const v470 = null;
      const v471 = await txn1.getOutput('Family_timesUp', 'v470', ctc3, v470);
      
      const v475 = stdlib.gt(v348, stdlib.checkedBigNumberify('./index.rsh:70:30:decimal', stdlib.UInt_max, '0'));
      const v785 = v347;
      const v786 = v348;
      const v788 = v356;
      if (v475) {
        const v789 = stdlib.add(v468, v344);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v467], secs: v469, time: v468, didSend: v268, from: v466 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v470 = null;
  const v471 = await txn1.getOutput('Family_timesUp', 'v470', ctc3, v470);
  stdlib.protect(ctc3, await interact.out(v467, v471), {
    at: './index.rsh:68:7:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:69:8:application call to "k" (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:67:44:application call to [unknown function] (defined at: ./index.rsh:67:44:function exp)'],
    msg: 'out',
    who: 'Family_timesUp'
    });
  
  const v475 = stdlib.gt(v348, stdlib.checkedBigNumberify('./index.rsh:70:30:decimal', stdlib.UInt_max, '0'));
  const v785 = v347;
  const v786 = v348;
  const v788 = v356;
  if (v475) {
    const v789 = stdlib.add(v468, v344);
    return;
    }
  else {
    return;
    }
  
  
  };
export async function HeadOfFamily(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for HeadOfFamily expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for HeadOfFamily expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc1,
    Thieves_robTheTime0_54: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Object({
    thief1: ctc5,
    thief2: ctc5
    });
  
  
  const v326 = stdlib.protect(ctc0, interact.boughtTime, 'for HeadOfFamily\'s interact field boughtTime');
  const v327 = stdlib.protect(ctc0, interact.initialStakes, 'for HeadOfFamily\'s interact field initialStakes');
  const v328 = stdlib.protect(ctc0, interact.wakeUpFee, 'for HeadOfFamily\'s interact field wakeUpFee');
  
  const txn1 = await (ctc.sendrecv({
    args: [v327, v326, v328],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v332, v333, v334], secs: v336, time: v335, didSend: v31, from: v331 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v332, v333, v334], secs: v336, time: v335, didSend: v31, from: v331 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v331, v332, v333, v334, v335],
    evt_cnt: 0,
    funcNum: 1,
    lct: v335,
    onlyIf: true,
    out_tys: [],
    pay: [v332, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v339, time: v338, didSend: v38, from: v337 } = txn2;
      
      sim_r.txns.push({
        amt: v332,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v344 = stdlib.add(v335, v333);
      const v346 = true;
      const v347 = stdlib.checkedBigNumberify('./index.rsh:43:96:decimal', stdlib.UInt_max, '0');
      const v348 = v333;
      const v349 = v338;
      const v356 = v332;
      
      if (await (async () => {
        
        return v346;})()) {
        const v367 = stdlib.add(v349, v344);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v339, time: v338, didSend: v38, from: v337 } = txn2;
  ;
  const v342 = stdlib.addressEq(v331, v337);
  stdlib.assert(v342, {
    at: './index.rsh:36:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'HeadOfFamily'
    });
  const v344 = stdlib.add(v335, v333);
  let v346 = true;
  let v347 = stdlib.checkedBigNumberify('./index.rsh:43:96:decimal', stdlib.UInt_max, '0');
  let v348 = v333;
  let v349 = v338;
  let v356 = v332;
  
  while (await (async () => {
    
    return v346;})()) {
    const v367 = stdlib.add(v349, v344);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: ['time', v367],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v467], secs: v469, time: v468, didSend: v268, from: v466 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v470 = null;
      await txn4.getOutput('Family_timesUp', 'v470', ctc4, v470);
      const v475 = stdlib.gt(v348, stdlib.checkedBigNumberify('./index.rsh:70:30:decimal', stdlib.UInt_max, '0'));
      const cv346 = v475;
      const cv347 = v347;
      const cv348 = v348;
      const cv349 = v468;
      const cv356 = v356;
      
      v346 = cv346;
      v347 = cv347;
      v348 = cv348;
      v349 = cv349;
      v356 = cv356;
      
      continue;
      }
    else {
      const {data: [v394], secs: v396, time: v395, didSend: v213, from: v393 } = txn3;
      switch (v394[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v397 = v394[1];
          undefined /* setApiDetails */;
          const v404 = stdlib.add(v356, v334);
          ;
          const v406 = true;
          await txn3.getOutput('Family_keepHeadAwake', 'v406', ctc3, v406);
          const v412 = stdlib.add(v348, stdlib.checkedBigNumberify('./index.rsh:53:25:decimal', stdlib.UInt_max, '1'));
          const v414 = stdlib.gt(v412, stdlib.checkedBigNumberify('./index.rsh:53:41:decimal', stdlib.UInt_max, '0'));
          const cv346 = v414;
          const cv347 = v347;
          const cv348 = v412;
          const cv349 = v395;
          const cv356 = v404;
          
          v346 = cv346;
          v347 = cv347;
          v348 = cv348;
          v349 = cv349;
          v356 = cv356;
          
          continue;
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v430 = v394[1];
          undefined /* setApiDetails */;
          ;
          const v451 = true;
          await txn3.getOutput('Thieves_robTheTime', 'v451', ctc3, v451);
          stdlib.protect(ctc4, await interact.sendThief(v393), {
            at: './index.rsh:64:36:application',
            fs: ['at ./index.rsh:64:36:application call to [unknown function] (defined at: ./index.rsh:64:36:function exp)', 'at ./index.rsh:64:36:application call to "liftedInteract" (defined at: ./index.rsh:64:36:application)', 'at ./index.rsh:62:13:application call to [unknown function] (defined at: ./index.rsh:62:13:function exp)'],
            msg: 'sendThief',
            who: 'HeadOfFamily'
            });
          
          const v458 = stdlib.sub(v348, stdlib.checkedBigNumberify('./index.rsh:65:28:decimal', stdlib.UInt_max, '1'));
          const v460 = stdlib.gt(v458, stdlib.checkedBigNumberify('./index.rsh:65:45:decimal', stdlib.UInt_max, '0'));
          const v461 = stdlib.add(v347, stdlib.checkedBigNumberify('./index.rsh:65:72:decimal', stdlib.UInt_max, '1'));
          const cv346 = v460;
          const cv347 = v461;
          const cv348 = v458;
          const cv349 = v395;
          const cv356 = v356;
          
          v346 = cv346;
          v347 = cv347;
          v348 = cv348;
          v349 = cv349;
          v356 = cv356;
          
          continue;
          break;
          }
        }}
    
    }
  const v480 = stdlib.protect(ctc6, await interact.getThieves(), {
    at: './index.rsh:76:53:application',
    fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
    msg: 'getThieves',
    who: 'HeadOfFamily'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v331, v356, v480],
    evt_cnt: 1,
    funcNum: 3,
    lct: v349,
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v484], secs: v486, time: v485, didSend: v288, from: v483 } = txn3;
      
      ;
      const v496 = stdlib.div(v356, stdlib.checkedBigNumberify('./index.rsh:85:26:decimal', stdlib.UInt_max, '2'));
      const v497 = v484.thief1;
      const v501 = stdlib.sub(v356, v496);
      sim_r.txns.push({
        kind: 'from',
        to: v497,
        tok: undefined /* Nothing */
        });
      const v503 = v484.thief2;
      sim_r.txns.push({
        kind: 'from',
        to: v503,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v484], secs: v486, time: v485, didSend: v288, from: v483 } = txn3;
  ;
  const v487 = stdlib.addressEq(v331, v483);
  stdlib.assert(v487, {
    at: './index.rsh:79:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'HeadOfFamily'
    });
  const v496 = stdlib.div(v356, stdlib.checkedBigNumberify('./index.rsh:85:26:decimal', stdlib.UInt_max, '2'));
  const v497 = v484.thief1;
  const v501 = stdlib.sub(v356, v496);
  ;
  const v503 = v484.thief2;
  ;
  return;
  
  
  
  
  
  
  };
export async function _Thieves_robTheTime5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Thieves_robTheTime5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Thieves_robTheTime5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc2,
    Thieves_robTheTime0_54: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  
  
  const [v331, v334, v344, v347, v348, v356, v367] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v381 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:43:72:application call to "runThieves_robTheTime0_54" (defined at: ./index.rsh:56:11:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'in',
    who: 'Thieves_robTheTime'
    });
  const v383 = stdlib.gt(v348, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v383, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:43:72:application call to "runThieves_robTheTime0_54" (defined at: ./index.rsh:56:11:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'Add time should be greter than zero',
    who: 'Thieves_robTheTime'
    });
  const v385 = stdlib.lt(v347, stdlib.checkedBigNumberify('./index.rsh:59:30:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v385, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:59:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:43:72:application call to "runThieves_robTheTime0_54" (defined at: ./index.rsh:56:11:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'Thieves should not be greater than 2',
    who: 'Thieves_robTheTime'
    });
  const v389 = ['Thieves_robTheTime0_54', v381];
  
  const txn1 = await (ctc.sendrecv({
    args: [v331, v334, v344, v347, v348, v356, v367, v389],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v394], secs: v396, time: v395, didSend: v213, from: v393 } = txn1;
      
      switch (v394[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v397 = v394[1];
          
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v430 = v394[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Thieves_robTheTime"
            });
          ;
          const v451 = true;
          const v452 = await txn1.getOutput('Thieves_robTheTime', 'v451', ctc4, v451);
          
          const v458 = stdlib.sub(v348, stdlib.checkedBigNumberify('./index.rsh:65:28:decimal', stdlib.UInt_max, '1'));
          const v460 = stdlib.gt(v458, stdlib.checkedBigNumberify('./index.rsh:65:45:decimal', stdlib.UInt_max, '0'));
          const v461 = stdlib.add(v347, stdlib.checkedBigNumberify('./index.rsh:65:72:decimal', stdlib.UInt_max, '1'));
          const v817 = v461;
          const v818 = v458;
          const v820 = v356;
          if (v460) {
            const v821 = stdlib.add(v395, v344);
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v394], secs: v396, time: v395, didSend: v213, from: v393 } = txn1;
  switch (v394[0]) {
    case 'Family_keepHeadAwake0_54': {
      const v397 = v394[1];
      return;
      break;
      }
    case 'Thieves_robTheTime0_54': {
      const v430 = v394[1];
      undefined /* setApiDetails */;
      ;
      const v451 = true;
      const v452 = await txn1.getOutput('Thieves_robTheTime', 'v451', ctc4, v451);
      if (v213) {
        stdlib.protect(ctc5, await interact.out(v430, v452), {
          at: './index.rsh:56:12:application',
          fs: ['at ./index.rsh:56:12:application call to [unknown function] (defined at: ./index.rsh:56:12:function exp)', 'at ./index.rsh:63:12:application call to "k" (defined at: ./index.rsh:62:13:function exp)', 'at ./index.rsh:62:13:application call to [unknown function] (defined at: ./index.rsh:62:13:function exp)'],
          msg: 'out',
          who: 'Thieves_robTheTime'
          });
        }
      else {
        }
      
      const v458 = stdlib.sub(v348, stdlib.checkedBigNumberify('./index.rsh:65:28:decimal', stdlib.UInt_max, '1'));
      const v460 = stdlib.gt(v458, stdlib.checkedBigNumberify('./index.rsh:65:45:decimal', stdlib.UInt_max, '0'));
      const v461 = stdlib.add(v347, stdlib.checkedBigNumberify('./index.rsh:65:72:decimal', stdlib.UInt_max, '1'));
      const v817 = v461;
      const v818 = v458;
      const v820 = v356;
      if (v460) {
        const v821 = stdlib.add(v395, v344);
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Family_keepHeadAwake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Family_keepHeadAwake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Family_keepHeadAwake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Family_keepHeadAwake5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Family_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Family_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Family_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Family_timesUp5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Thieves_robTheTime(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Thieves_robTheTime expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Thieves_robTheTime expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Thieves_robTheTime5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Family_keepHeadAwake()byte`, `Family_timesUp()byte[0]`, `Thieves_robTheTime()byte`],
    pure: [],
    sigs: [`Family_keepHeadAwake()byte`, `Family_timesUp()byte[0]`, `Thieves_robTheTime()byte`]
    },
  appApproval: `BiAOAAEFIAM4KDAI2Kv0tAPBtPbpD0hAAiYDAQAAAQEiNQAxGEEDXClkSSJbNQEhCFs1AjYaABdJQQA8IjUEIzUGSSEJDEAAHUkhCgxAAA4hChJEKTX/KDT/UEIAoiEJEkQpQgA2gcTpwpgDEkQpNf8qNP9QQgCINhoCFzUENhoDNhoBF0khBAxAAYxJgQQMQAEfSSQMQABmJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDIQVbNf9JNQU1/oAEaJJkYzT+ULAyBjQDIQtbD0SACAAAAAAAAAHWsCk1BzQDVwAgNAMlWzQDIQZbNP8iDTQDIQdbNP8yBjQDIQxbQgHVSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEGWzX9IQdbNfwhBVs1+yEMWzX6STUFNfmABK571AY0+VCwMgY0AyELWwxENPkiVUAAMjT+iAJJgAkAAAAAAAABlgGwKjUHNPsjCDX4NP80/jT9NPgiDTT8NPgyBjT6NP4IQgFOgAkAAAAAAAABwwGwKjUHNPsjCTX4NP80/jT9NPgiDTT8Iwg0+DIGNPpCASJIIQQ0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQU1/oAEIsSUtzT+ULA0A1cAIDEAEkQ0/yENCjX9sSKyATT9sggjshA0/lcAILIHs7EisgE0/zT9CbIII7IQNP5XICCyB7NCAR1JIwxAAFQjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEGWzX9gASai5F0sDT+iAFQNP8xABJENP80AyEHWzQDIQVbNP0IIyI0/TIGNP5CAGJIgaCNBogBKCI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hCFs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AkIAfDX/Nf41/TX8Nfs1+jX5Nfg0+0EAMzT+NPoINfc0+DT5FlA0+hZQNPwWUDT9FlA0/xZQNPcWUChLAVcAUGdIJDUBMgY1AkIANDT4NP8WUChLAVcAKGdIIQQ1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhDTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v332",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v333",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v332",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v333",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_thief1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_thief2",
                    "type": "address"
                  }
                ],
                "internalType": "struct T10",
                "name": "v484",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Family_keepHeadAwake0_54",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Thieves_robTheTime0_54",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v394",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v467",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v406",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v451",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v470",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Family_keepHeadAwake",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Family_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Thieves_robTheTime",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_thief1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_thief2",
                    "type": "address"
                  }
                ],
                "internalType": "struct T10",
                "name": "v484",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Family_keepHeadAwake0_54",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Thieves_robTheTime0_54",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v394",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v467",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200191438038062001914833981016040819052620000269162000285565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200017e565b620000d16040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b33815260208083018051518284015280518201516040808501919091529051810151606084015243608084018190526001600081905555516200014f9183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b6040516020818303038152906040526002908051906020019062000175929190620001a8565b50505062000359565b81620001a45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b6906200031c565b90600052602060002090601f016020900481019282620001da576000855562000225565b82601f10620001f557805160ff191683800117855562000225565b8280016001018555821562000225579182015b828111156200022557825182559160200191906001019062000208565b506200023392915062000237565b5090565b5b8082111562000233576000815560010162000238565b604051606081016001600160401b03811182821017156200027f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029957600080fd5b604080519081016001600160401b0381118282101715620002ca57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002e457600080fd5b620002ee6200024e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200033157607f821691505b602082108114156200035357634e487b7160e01b600052602260045260246000fd5b50919050565b6115ab80620003696000396000f3fe60806040526004361061008f5760003560e01c8063a6b45d4611610056578063a6b45d461461010f578063ab53f2c614610122578063ad9fa3d814610145578063ae23d73d14610158578063c3bdadcd1461016057005b806308d57599146100985780631e93b0f1146100b55780632c10a159146100d457806336054e53146100e757806383230757146100fa57005b3661009657005b005b6100a0610168565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506003545b6040519081526020016100ac565b6100966100e236600461100b565b6101a6565b6100966100f536600461102e565b6101df565b34801561010657600080fd5b506001546100c6565b61009661011d366004611040565b610214565b34801561012e57600080fd5b50610137610249565b6040516100ac929190611052565b61009661015336600461100b565b6102e6565b6100a061031b565b6100a0610360565b6000610172610e67565b602081810151516000908190526040805160608101825282815292830182905282015261019f82826103a0565b5192915050565b60408051606081018252600080825260208201819052918101919091526101db6101d536849003840184611142565b826106dd565b5050565b60408051606081018252600080825260208201819052918101919091526101db61020e36849003840184611178565b826103a0565b60408051606081018252600080825260208201819052918101919091526101db61024336849003840184611243565b8261089d565b60006060600054600280805461025e906112bd565b80601f016020809104026020016040519081016040528092919081815260200182805461028a906112bd565b80156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526101db610315368490038401846112f2565b82610ac1565b6000610325610e67565b60208181015151600190526040805160608101825260008082529281018390529081019190915261035682826103a0565b6040015192915050565b600061036a610ea5565b602081810151600090819052604080516060810182528281529283018290528201526103968282610ac1565b6020015192915050565b6103b06005600054146012610ca9565b81516103cb9015806103c457508251600154145b6013610ca9565b6000808055600280546103dd906112bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610409906112bd565b80156104565780601f1061042b57610100808354040283529160200191610456565b820191906000526020600020905b81548152906001019060200180831161043957829003601f168201915b505050505080602001905181019061046e919061134a565b905061048d604051806040016040528060008152602001600081525090565b61049e8260c0015143106014610ca9565b7f4208286ebb06b5ded256694c66572f0ecc8422f937c57e9c5c3c3930244f3db833856040516104cf9291906113e5565b60405180910390a160006020850151515160018111156104f1576104f16110af565b14156105d957610508826020015134146010610ca9565b604051600181527fc8faafcf54f014ebfcdae9a661c5b1de8a1056ae579b99da5296c8feb484cefe9060200160405180910390a1600180845260808301516105509190611463565b815261055a610ecf565b825181516001600160a01b039091169052602080840180518351830152604080860151845182015284518385018051911515909152606080880151825190950194909452855181519092019190915251439201919091525160a08401516105c19190611463565b6020820151608001526105d381610cce565b506106d7565b60016020850151515160018111156105f3576105f36110af565b14156106d75761060534156011610ca9565b604051600181527ffe6ae64f248f109c03778a72cd62127f272002a2e378e8abc168937db66c60789060200160405180910390a16001604084018190526080830151610651919061147b565b602082015261065e610ecf565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101528281015190820151901515905260608301516106a490600190611463565b6020808301805182019290925283015181516040015280514360609091015260a08401519051608001526105d381610cce565b50505050565b6106ed600160005414600a610ca9565b815161070890158061070157508251600154145b600b610ca9565b60008080556002805461071a906112bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610746906112bd565b80156107935780601f1061076857610100808354040283529160200191610793565b820191906000526020600020905b81548152906001019060200180831161077657829003601f168201915b50505050508060200190518101906107ab9190611492565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610807816020015134146008610ca9565b805161081f906001600160a01b031633146009610ca9565b610827610ecf565b815181516001600160a01b0390911690526060820151815160200152604082015160808301516108579190611463565b815160409081019190915260208083018051600190528051600090830152848301518151909301929092528151436060909101528301519051608001526106d781610cce565b6108ad600360005414600e610ca9565b81516108c89015806108c157508251600154145b600f610ca9565b6000808055600280546108da906112bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610906906112bd565b80156109535780601f1061092857610100808354040283529160200191610953565b820191906000526020600020905b81548152906001019060200180831161093657829003601f168201915b505050505080602001905181019061096b9190611519565b90506109836040518060200160405280600081525090565b604080513381528551602080830191909152808701515180516001600160a01b039081168486015291015116606082015290517f7a795ca12ed6a7000cb93ed9c6e7ea8da0bf23c85134e134d824a710bc906daa9181900360800190a16109ec3415600c610ca9565b8151610a04906001600160a01b03163314600d610ca9565b60028260200151610a159190611553565b808252602085015151516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610a54573d6000803e3d6000fd5b50836020015160000151602001516001600160a01b03166108fc82600001518460200151610a82919061147b565b6040518115909202916000818181858888f19350505050158015610aaa573d6000803e3d6000fd5b50600080805560018190556106d790600290610f1d565b610ad16005600054146016610ca9565b8151610aec901580610ae557508251600154145b6017610ca9565b600080805560028054610afe906112bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2a906112bd565b8015610b775780601f10610b4c57610100808354040283529160200191610b77565b820191906000526020600020905b815481529060010190602001808311610b5a57829003601f168201915b5050505050806020019051810190610b8f919061134a565b9050610ba38160c001514310156018610ca9565b6040805133815284516020808301919091528501515115158183015290517f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213659181900360600190a1610bf734156015610ca9565b604051600081527e9eeeb4859d9fb25404fad1d32371d5607587b67b9a49b68f61ccf1db0563499060200160405180910390a160006020830152610c39610ecf565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152608080850180518486018051911515909152606080880151825190960195909552905181519093019290925281514393019290925260a08401519051909101526106d781610cce565b816101db5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515115610e1457815160400151602083015160600151610d019190611463565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b031681528251602090810151818301528351604090810151818401528185018051830151606085015280518201516080808601919091529051015160a0840152835160c084015260056000554360015551610df09183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906106d7929190610f5a565b604080518082018252600080825260208083018281528651516001600160a01b03168085528783015160800151825260039093554360015584519182019290925290519281019290925290606001610df0565b604051806040016040528060008152602001610ea060408051608081018252600060208201818152928201819052606082015290815290565b905290565b604051806040016040528060008152602001610ea060405180602001604052806000151581525090565b6040805160a080820183526000828401818152606080850183905260808086018490529185528551938401865282845260208481018490529584018390528301829052820152909182015290565b508054610f29906112bd565b6000825580601f10610f39575050565b601f016020900490600052602060002090810190610f579190610fde565b50565b828054610f66906112bd565b90600052602060002090601f016020900481019282610f885760008555610fce565b82601f10610fa157805160ff1916838001178555610fce565b82800160010185558215610fce579182015b82811115610fce578251825591602001919060010190610fb3565b50610fda929150610fde565b5090565b5b80821115610fda5760008155600101610fdf565b60006040828403121561100557600080fd5b50919050565b60006040828403121561101d57600080fd5b6110278383610ff3565b9392505050565b60006080828403121561100557600080fd5b60006060828403121561100557600080fd5b82815260006020604081840152835180604085015260005b818110156110865785810183015185820160600152820161106a565b81811115611098576000606083870101525b50601f01601f191692909201606001949350505050565b634e487b7160e01b600052602160045260246000fd5b6040805190810167ffffffffffffffff811182821017156110f657634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156110f657634e487b7160e01b600052604160045260246000fd5b8035801515811461113d57600080fd5b919050565b60006040828403121561115457600080fd5b61115c6110c5565b8235815261116c6020840161112d565b60208201529392505050565b6000818303608081121561118b57600080fd5b6111936110c5565b833581526060601f19830112156111a957600080fd5b6111b16110fc565b91506040516060810181811067ffffffffffffffff821117156111e457634e487b7160e01b600052604160045260246000fd5b6040526020850135600281106111f957600080fd5b81526112076040860161112d565b60208201526112186060860161112d565b6040820152825260208101919091529392505050565b6001600160a01b0381168114610f5757600080fd5b6000818303606081121561125657600080fd5b61125e6110c5565b833581526040601f198301121561127457600080fd5b61127c6110fc565b91506112866110c5565b60208501356112948161122e565b815260408501356112a48161122e565b6020828101919091529083528101919091529392505050565b600181811c908216806112d157607f821691505b6020821081141561100557634e487b7160e01b600052602260045260246000fd5b6000818303604081121561130557600080fd5b61130d6110c5565b833581526020601f198301121561132357600080fd5b61132b6110fc565b91506113396020850161112d565b825260208101919091529392505050565b600060e0828403121561135c57600080fd5b60405160e0810181811067ffffffffffffffff8211171561138d57634e487b7160e01b600052604160045260246000fd5b604052825161139b8161122e565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906002811061142657634e487b7160e01b600052602160045260246000fd5b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156114765761147661144d565b500190565b60008282101561148d5761148d61144d565b500390565b600060a082840312156114a457600080fd5b60405160a0810181811067ffffffffffffffff821117156114d557634e487b7160e01b600052604160045260246000fd5b60405282516114e38161122e565b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b60006040828403121561152b57600080fd5b6115336110c5565b825161153e8161122e565b81526020928301519281019290925250919050565b60008261157057634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220f200c6695c32bb8d35edbdb2d16e0b63a4a838d6e3f99148eda879cfe160ce0664736f6c634300080c0033`,
  BytecodeLen: 6420,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:89:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:43:72:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Family_keepHeadAwake": Family_keepHeadAwake,
  "Family_timesUp": Family_timesUp,
  "HeadOfFamily": HeadOfFamily,
  "Thieves_robTheTime": Thieves_robTheTime
  };
export const _APIs = {
  Family: {
    keepHeadAwake: Family_keepHeadAwake,
    timesUp: Family_timesUp
    },
  Thieves: {
    robTheTime: Thieves_robTheTime
    }
  };
