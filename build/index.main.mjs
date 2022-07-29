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
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Family_keepHeadAwake4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Family_keepHeadAwake4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Family_keepHeadAwake4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc4,
    Thieves_robTheTime0_54: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v280, v283, v293, v296, v304, v315] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v319 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:36:60:application call to "runFamily_keepHeadAwake0_54" (defined at: ./index.rsh:39:9:function exp)', 'at ./index.rsh:36:60:application call to [unknown function] (defined at: ./index.rsh:36:60:function exp)'],
    msg: 'in',
    who: 'Family_keepHeadAwake'
    });
  const v321 = stdlib.gt(v296, stdlib.checkedBigNumberify('./index.rsh:41:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v321, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:40:10:application call to [unknown function] (defined at: ./index.rsh:40:10:function exp)', 'at ./index.rsh:36:60:application call to "runFamily_keepHeadAwake0_54" (defined at: ./index.rsh:39:9:function exp)', 'at ./index.rsh:36:60:application call to [unknown function] (defined at: ./index.rsh:36:60:function exp)'],
    msg: 'Time is up',
    who: 'Family_keepHeadAwake'
    });
  const v325 = ['Family_keepHeadAwake0_54', v319];
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v283, v293, v296, v304, v315, v325],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v283, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v340], secs: v342, time: v341, didSend: v181, from: v339 } = txn1;
      
      switch (v340[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v343 = v340[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Family_keepHeadAwake"
            });
          const v350 = stdlib.add(v304, v283);
          sim_r.txns.push({
            amt: v283,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v352 = true;
          const v353 = await txn1.getOutput('Family_keepHeadAwake', 'v352', ctc6, v352);
          
          const v358 = stdlib.add(v296, stdlib.checkedBigNumberify('./index.rsh:46:25:decimal', stdlib.UInt_max, '1'));
          const v360 = stdlib.gt(v358, stdlib.checkedBigNumberify('./index.rsh:46:41:decimal', stdlib.UInt_max, '0'));
          const v731 = v358;
          const v733 = v350;
          if (v360) {
            const v734 = stdlib.add(v341, v293);
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v280,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v384 = v340[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v340], secs: v342, time: v341, didSend: v181, from: v339 } = txn1;
  switch (v340[0]) {
    case 'Family_keepHeadAwake0_54': {
      const v343 = v340[1];
      undefined /* setApiDetails */;
      const v350 = stdlib.add(v304, v283);
      ;
      const v352 = true;
      const v353 = await txn1.getOutput('Family_keepHeadAwake', 'v352', ctc6, v352);
      if (v181) {
        stdlib.protect(ctc0, await interact.out(v343, v353), {
          at: './index.rsh:39:10:application',
          fs: ['at ./index.rsh:39:10:application call to [unknown function] (defined at: ./index.rsh:39:10:function exp)', 'at ./index.rsh:45:10:application call to "k" (defined at: ./index.rsh:44:11:function exp)', 'at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:11:function exp)'],
          msg: 'out',
          who: 'Family_keepHeadAwake'
          });
        }
      else {
        }
      
      const v358 = stdlib.add(v296, stdlib.checkedBigNumberify('./index.rsh:46:25:decimal', stdlib.UInt_max, '1'));
      const v360 = stdlib.gt(v358, stdlib.checkedBigNumberify('./index.rsh:46:41:decimal', stdlib.UInt_max, '0'));
      const v731 = v358;
      const v733 = v350;
      if (v360) {
        const v734 = stdlib.add(v341, v293);
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Thieves_robTheTime0_54': {
      const v384 = v340[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Family_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Family_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Family_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v280, v283, v293, v296, v304, v315] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v427 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:82:7:application',
    fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:81:44:application call to [unknown function] (defined at: ./index.rsh:81:44:function exp)'],
    msg: 'in',
    who: 'Family_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v283, v293, v296, v304, v315, v427],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v429], secs: v431, time: v430, didSend: v242, from: v428 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Family_timesUp"
        });
      ;
      const v432 = null;
      const v433 = await txn1.getOutput('Family_timesUp', 'v432', ctc0, v432);
      
      const v437 = stdlib.gt(v296, stdlib.checkedBigNumberify('./index.rsh:84:30:decimal', stdlib.UInt_max, '0'));
      const v746 = v296;
      const v748 = v304;
      if (v437) {
        const v749 = stdlib.add(v430, v293);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v280,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v429], secs: v431, time: v430, didSend: v242, from: v428 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v432 = null;
  const v433 = await txn1.getOutput('Family_timesUp', 'v432', ctc0, v432);
  stdlib.protect(ctc0, await interact.out(v429, v433), {
    at: './index.rsh:82:7:application',
    fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:83:8:application call to "k" (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:81:44:application call to [unknown function] (defined at: ./index.rsh:81:44:function exp)'],
    msg: 'out',
    who: 'Family_timesUp'
    });
  
  const v437 = stdlib.gt(v296, stdlib.checkedBigNumberify('./index.rsh:84:30:decimal', stdlib.UInt_max, '0'));
  const v746 = v296;
  const v748 = v304;
  if (v437) {
    const v749 = stdlib.add(v430, v293);
    return;
    }
  else {
    ;
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc3,
    Thieves_robTheTime0_54: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v275 = stdlib.protect(ctc2, interact.boughtTime, 'for HeadOfFamily\'s interact field boughtTime');
  const v276 = stdlib.protect(ctc2, interact.initialStakes, 'for HeadOfFamily\'s interact field initialStakes');
  const v277 = stdlib.protect(ctc2, interact.wakeUpFee, 'for HeadOfFamily\'s interact field wakeUpFee');
  
  const txn1 = await (ctc.sendrecv({
    args: [v276, v275, v277],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v281, v282, v283], secs: v285, time: v284, didSend: v31, from: v280 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v281, v282, v283], secs: v285, time: v284, didSend: v31, from: v280 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v280, v281, v282, v283, v284],
    evt_cnt: 0,
    funcNum: 1,
    lct: v284,
    onlyIf: true,
    out_tys: [],
    pay: [v281, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v288, time: v287, didSend: v38, from: v286 } = txn2;
      
      sim_r.txns.push({
        amt: v281,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v293 = stdlib.add(v284, v282);
      const v295 = true;
      const v296 = v282;
      const v297 = v287;
      const v304 = v281;
      
      if (await (async () => {
        
        return v295;})()) {
        const v315 = stdlib.add(v297, v293);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v280,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v288, time: v287, didSend: v38, from: v286 } = txn2;
  ;
  const v291 = stdlib.addressEq(v280, v286);
  stdlib.assert(v291, {
    at: './index.rsh:29:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'HeadOfFamily'
    });
  const v293 = stdlib.add(v284, v282);
  let v295 = true;
  let v296 = v282;
  let v297 = v287;
  let v304 = v281;
  
  while (await (async () => {
    
    return v295;})()) {
    const v315 = stdlib.add(v297, v293);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v315],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v429], secs: v431, time: v430, didSend: v242, from: v428 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v432 = null;
      await txn4.getOutput('Family_timesUp', 'v432', ctc0, v432);
      const v437 = stdlib.gt(v296, stdlib.checkedBigNumberify('./index.rsh:84:30:decimal', stdlib.UInt_max, '0'));
      const cv295 = v437;
      const cv296 = v296;
      const cv297 = v430;
      const cv304 = v304;
      
      v295 = cv295;
      v296 = cv296;
      v297 = cv297;
      v304 = cv304;
      
      continue;
      }
    else {
      const {data: [v340], secs: v342, time: v341, didSend: v181, from: v339 } = txn3;
      switch (v340[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v343 = v340[1];
          undefined /* setApiDetails */;
          const v350 = stdlib.add(v304, v283);
          ;
          const v352 = true;
          await txn3.getOutput('Family_keepHeadAwake', 'v352', ctc5, v352);
          const v358 = stdlib.add(v296, stdlib.checkedBigNumberify('./index.rsh:46:25:decimal', stdlib.UInt_max, '1'));
          const v360 = stdlib.gt(v358, stdlib.checkedBigNumberify('./index.rsh:46:41:decimal', stdlib.UInt_max, '0'));
          const cv295 = v360;
          const cv296 = v358;
          const cv297 = v341;
          const cv304 = v350;
          
          v295 = cv295;
          v296 = cv296;
          v297 = cv297;
          v304 = cv304;
          
          continue;
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v384 = v340[1];
          undefined /* setApiDetails */;
          ;
          const v405 = true;
          await txn3.getOutput('Thieves_robTheTime', 'v405', ctc5, v405);
          const v411 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v339), null);
          let v412;
          switch (v411[0]) {
            case 'None': {
              const v413 = v411[1];
              v412 = false;
              
              break;
              }
            case 'Some': {
              const v414 = v411[1];
              v412 = true;
              
              break;
              }
            }
          if (v412) {
            const v421 = stdlib.sub(v296, stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, '1'));
            const v423 = stdlib.gt(v421, stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0'));
            const cv295 = v423;
            const cv296 = v421;
            const cv297 = v341;
            const cv304 = v304;
            
            v295 = cv295;
            v296 = cv296;
            v297 = cv297;
            v304 = cv304;
            
            continue;}
          else {
            await stdlib.mapSet(map0, v339, null);
            const v417 = stdlib.sub(v296, stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, '1'));
            const v419 = stdlib.gt(v417, stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0'));
            const cv295 = v419;
            const cv296 = v417;
            const cv297 = v341;
            const cv304 = v304;
            
            v295 = cv295;
            v296 = cv296;
            v297 = cv297;
            v304 = cv304;
            
            continue;}
          break;
          }
        }}
    
    }
  ;
  return;
  
  
  
  
  };
export async function _Thieves_robTheTime4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Thieves_robTheTime4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Thieves_robTheTime4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc4,
    Thieves_robTheTime0_54: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v280, v283, v293, v296, v304, v315] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v329 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:50:12:application call to [unknown function] (defined at: ./index.rsh:50:12:function exp)', 'at ./index.rsh:36:60:application call to "runThieves_robTheTime0_54" (defined at: ./index.rsh:49:11:function exp)', 'at ./index.rsh:36:60:application call to [unknown function] (defined at: ./index.rsh:36:60:function exp)'],
    msg: 'in',
    who: 'Thieves_robTheTime'
    });
  const v331 = stdlib.gt(v296, stdlib.checkedBigNumberify('./index.rsh:51:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v331, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:51:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:50:12:application call to [unknown function] (defined at: ./index.rsh:50:12:function exp)', 'at ./index.rsh:50:12:application call to [unknown function] (defined at: ./index.rsh:50:12:function exp)', 'at ./index.rsh:36:60:application call to "runThieves_robTheTime0_54" (defined at: ./index.rsh:49:11:function exp)', 'at ./index.rsh:36:60:application call to [unknown function] (defined at: ./index.rsh:36:60:function exp)'],
    msg: 'Add time should be greter than zero',
    who: 'Thieves_robTheTime'
    });
  const v335 = ['Thieves_robTheTime0_54', v329];
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v283, v293, v296, v304, v315, v335],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v340], secs: v342, time: v341, didSend: v181, from: v339 } = txn1;
      
      switch (v340[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v343 = v340[1];
          
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v384 = v340[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Thieves_robTheTime"
            });
          ;
          const v405 = true;
          const v406 = await txn1.getOutput('Thieves_robTheTime', 'v405', ctc6, v405);
          
          const v411 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v339), null);
          let v412;
          switch (v411[0]) {
            case 'None': {
              const v413 = v411[1];
              v412 = false;
              
              break;
              }
            case 'Some': {
              const v414 = v411[1];
              v412 = true;
              
              break;
              }
            }
          if (v412) {
            const v421 = stdlib.sub(v296, stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, '1'));
            const v423 = stdlib.gt(v421, stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0'));
            const v756 = v421;
            const v758 = v304;
            if (v423) {
              const v759 = stdlib.add(v341, v293);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v280,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 0, v339, null);
            const v417 = stdlib.sub(v296, stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, '1'));
            const v419 = stdlib.gt(v417, stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0'));
            const v761 = v417;
            const v763 = v304;
            if (v419) {
              const v764 = stdlib.add(v341, v293);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v280,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v340], secs: v342, time: v341, didSend: v181, from: v339 } = txn1;
  switch (v340[0]) {
    case 'Family_keepHeadAwake0_54': {
      const v343 = v340[1];
      return;
      break;
      }
    case 'Thieves_robTheTime0_54': {
      const v384 = v340[1];
      undefined /* setApiDetails */;
      ;
      const v405 = true;
      const v406 = await txn1.getOutput('Thieves_robTheTime', 'v405', ctc6, v405);
      if (v181) {
        stdlib.protect(ctc0, await interact.out(v384, v406), {
          at: './index.rsh:49:12:application',
          fs: ['at ./index.rsh:49:12:application call to [unknown function] (defined at: ./index.rsh:49:12:function exp)', 'at ./index.rsh:55:12:application call to "k" (defined at: ./index.rsh:54:13:function exp)', 'at ./index.rsh:54:13:application call to [unknown function] (defined at: ./index.rsh:54:13:function exp)'],
          msg: 'out',
          who: 'Thieves_robTheTime'
          });
        }
      else {
        }
      
      const v411 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v339), null);
      let v412;
      switch (v411[0]) {
        case 'None': {
          const v413 = v411[1];
          v412 = false;
          
          break;
          }
        case 'Some': {
          const v414 = v411[1];
          v412 = true;
          
          break;
          }
        }
      if (v412) {
        const v421 = stdlib.sub(v296, stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, '1'));
        const v423 = stdlib.gt(v421, stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0'));
        const v756 = v421;
        const v758 = v304;
        if (v423) {
          const v759 = stdlib.add(v341, v293);
          return;
          }
        else {
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map0, v339, null);
        const v417 = stdlib.sub(v296, stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, '1'));
        const v419 = stdlib.gt(v417, stdlib.checkedBigNumberify('./index.rsh:58:45:decimal', stdlib.UInt_max, '0'));
        const v761 = v417;
        const v763 = v304;
        if (v419) {
          const v764 = stdlib.add(v341, v293);
          return;
          }
        else {
          ;
          return;
          }}
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
  if (step == 4) {return _Family_keepHeadAwake4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Family_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Family_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Family_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Family_timesUp4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Thieves_robTheTime(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Thieves_robTheTime expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Thieves_robTheTime expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Thieves_robTheTime4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Family_keepHeadAwake()byte`, `Family_timesUp()byte[0]`, `Thieves_robTheTime()byte`],
    pure: [],
    sigs: [`Family_keepHeadAwake()byte`, `Family_timesUp()byte[0]`, `Thieves_robTheTime()byte`]
    },
  appApproval: `BiALAAEEMCAoOAjYq/S0A8G09ukPQCYDAQAAAQEiNQAxGEEDHilkSSJbNQEhB1s1AjEZIxJBAAgxACgoZkIC7DYaABdJQQA8IjUEIzUGSSEIDEAAHUkhCQxAAA4hCRJEKTX/KDT/UEIAliEIEkQpQgAvgcTpwpgDEkQpNf8qNP9QQgB8NhoCFzUENhoDNhoBF0mBAwxAAUtJJAxAAGEkEkQkNAESRDQESSISTDQCEhFEKGRJNQMlWzX/STUFNf6ABNTgGC00/lCwMgY0AyEKWw9EgAgAAAAAAAABsLApNQc0A1cAIDQDIQRbNAMhBVs0/yINNP8yBjQDIQZbQgGfSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hBVs1/SVbNfwhBls1+0k1BTX6gAQuRcYBNPpQsDIGNAMhClsMRDT6IlVAADA0/ogCGoAJAAAAAAAAAWABsCo1BzT8Iwg1+TT/NP40/TT5Ig00+TIGNPs0/ghCAR+ACQAAAAAAAAGVAbAqNQcxAIgBzkk1+CJVQAAGIjX5QgAGIzX5QgAANPlBABk0/CMJNfg0/zT+NP00+CINNPgyBjT7QgDZMQAoKmY0/CMJNfg0/zT+NP00+CINNPgyBjT7QgC7SSMMQABTIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+IQVbNf2ABJqLkXSwNP6IAVA0/zEAEkQ0/zQDJVs0AyEGWzT9CCM0/TIGNP5CAGJIgaCNBogBKiI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hB1s1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AkIAcTX/Nf41/TX8Nfs1+jX5NPxBAC80/jT7CDX4NPk0+hZQNPsWUDT9FlA0/xZQNPgWUChLAVcASGdIJDUBMgY1AkIAL7EisgE0/7III7IQNPmyB7NCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
        "internalType": "struct T8",
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
                    "internalType": "enum _enum_T11",
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
                "internalType": "struct T11",
                "name": "v340",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "internalType": "bool",
                "name": "v429",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v352",
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
    "name": "_reach_oe_v405",
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
    "name": "_reach_oe_v432",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
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
        "internalType": "struct T8",
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
                    "internalType": "enum _enum_T11",
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
                "internalType": "struct T11",
                "name": "v340",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "internalType": "bool",
                "name": "v429",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620017f1380380620017f1833981016040819052620000269162000285565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200017e565b620000d16040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b33815260208083018051518284015280518201516040808501919091529051810151606084015243608084018190526001600081905555516200014f9183910181516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080918201519181019190915260a00190565b6040516020818303038152906040526002908051906020019062000175929190620001a8565b50505062000359565b81620001a45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b6906200031c565b90600052602060002090601f016020900481019282620001da576000855562000225565b82601f10620001f557805160ff191683800117855562000225565b8280016001018555821562000225579182015b828111156200022557825182559160200191906001019062000208565b506200023392915062000237565b5090565b5b8082111562000233576000815560010162000238565b604051606081016001600160401b03811182821017156200027f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029957600080fd5b604080519081016001600160401b0381118282101715620002ca57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002e457600080fd5b620002ee6200024e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200033157607f821691505b602082108114156200035357634e487b7160e01b600052602260045260246000fd5b50919050565b61148880620003696000396000f3fe60806040526004361061008f5760003560e01c8063a1bb511611610056578063a1bb511614610129578063a98bf2231461013c578063ab53f2c61461014f578063ae23d73d14610172578063c3bdadcd1461017a57005b806308d57599146100985780631e93b0f1146100b55780632c10a159146100d45780633bc5b7bf146100e7578063832307571461011457005b3661009657005b005b6100a0610182565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506003545b6040519081526020016100ac565b6100966100e2366004610f56565b6101c0565b3480156100f357600080fd5b50610107610102366004610f8e565b6101f9565b6040516100ac9190610fdf565b34801561012057600080fd5b506001546100c6565b610096610137366004611011565b610225565b61009661014a366004610f56565b61025a565b34801561015b57600080fd5b5061016461028f565b6040516100ac929190611023565b6100a061032c565b6100a0610371565b600061018c610daa565b60208181015151600090819052604080516060810182528281529283018290528201526101b982826103b1565b5192915050565b60408051606081018252600080825260208201819052918101919091526101f56101ef36849003840184611129565b826107d1565b5050565b604080516060810182526000808252602082018190529181019190915261021f82610985565b92915050565b60408051606081018252600080825260208201819052918101919091526101f56102543684900384018461115f565b826103b1565b60408051606081018252600080825260208201819052918101919091526101f561028936849003840184611215565b82610a5e565b6000606060005460028080546102a49061126d565b80601f01602080910402602001604051908101604052809291908181526020018280546102d09061126d565b801561031d5780601f106102f25761010080835404028352916020019161031d565b820191906000526020600020905b81548152906001019060200180831161030057829003601f168201915b50505050509050915091509091565b6000610336610daa565b60208181015151600190526040805160608101825260008082529281018390529081019190915261036782826103b1565b6040015192915050565b600061037b610de8565b602081810151600090819052604080516060810182528281529283018290528201526103a78282610a5e565b6020015192915050565b6103c1600460005414600e610c36565b81516103dc9015806103d557508251600154145b600f610c36565b6000808055600280546103ee9061126d565b80601f016020809104026020016040519081016040528092919081815260200182805461041a9061126d565b80156104675780601f1061043c57610100808354040283529160200191610467565b820191906000526020600020905b81548152906001019060200180831161044a57829003601f168201915b505050505080602001905181019061047f91906112a2565b90506104ae60405180608001604052806000815260200160001515815260200160008152602001600081525090565b6104bf8260a0015143106010610c36565b7fe30c1faad84d1c2fbcb49a9d8c9c13ee51d538efe993e4477a23c971fd304b5833856040516104f0929190611333565b60405180910390a1600060208501515151600181111561051257610512610fab565b14156105ec5761052982602001513414600c610c36565b604051600181527fb3feece7a2c581f849733d31b07b79c1740bb17fe90612ce9076d9224a343d9d9060200160405180910390a160018084526060830151610571919061139c565b815261057b610e12565b825181516001600160a01b03909116905260208084018051835183015260408086015184518201528451838501805191151590915285518151909401939093529151439201919091525160808401516105d4919061139c565b6020820151606001526105e681610c5b565b506107cb565b600160208501515151600181111561060657610606610fab565b14156107cb576106183415600d610c36565b604051600181527f34c15c9baa09d5863183d6d775dec0b1e3b84745c9909934b2bb2c567f5ef3dc9060200160405180910390a160016040840152600061065e33610985565b51600181111561067057610670610fab565b141561068257600060208201526106ad565b600161068d33610985565b51600181111561069f5761069f610fab565b14156106ad57600160208201525b80602001511561073457600182606001516106c891906113b4565b60608201526106d5610e12565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608085018051848601805191151590915290518151909401939093528251439201919091526080850151915101526105e681610c5b565b336000908152600460205260409020805462ff00ff19166001908117909155606083015161076291906113b4565b604082015261076f610e12565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015283810180518385018051911515909152905181519093019290925281514391015260808401519051606001526105e681610c5b565b50505050565b6107e1600160005414600a610c36565b81516107fc9015806107f557508251600154145b600b610c36565b60008080556002805461080e9061126d565b80601f016020809104026020016040519081016040528092919081815260200182805461083a9061126d565b80156108875780601f1061085c57610100808354040283529160200191610887565b820191906000526020600020905b81548152906001019060200180831161086a57829003601f168201915b505050505080602001905181019061089f91906113cb565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16108fb816020015134146008610c36565b8051610913906001600160a01b031633146009610c36565b61091b610e12565b815181516001600160a01b03909116905260608201518151602001526040820151608083015161094b919061139c565b815160409081019190915260208083018051600190528483015181518301528051439301929092528301519051606001526107cb81610c5b565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156109d1576109d1610fab565b1415610a4e576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610a1257610a12610fab565b6001811115610a2357610a23610fab565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610a6e6004600054146012610c36565b8151610a89901580610a8257508251600154145b6013610c36565b600080805560028054610a9b9061126d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac79061126d565b8015610b145780601f10610ae957610100808354040283529160200191610b14565b820191906000526020600020905b815481529060010190602001808311610af757829003601f168201915b5050505050806020019051810190610b2c91906112a2565b9050610b408160a001514310156014610c36565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a1610b9434156011610c36565b604051600081527fd91325de34c6f1ab51f8b121ced5af733b86cad0e4bc4a6b9581b1ccc84300ac9060200160405180910390a160006020830152610bd7610e12565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608085018051848601805191151590915290518151909401939093528251439201919091526080840151915101526107cb81610c5b565b816101f55760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515115610d5157816000015160400151826020015160400151610c91919061139c565b81526040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528e51516001600160a01b0316808d528f518a015189528f518e015188528f8a0180518b015187525187015184528e5182526004909a55436001558c51808a019a909a529651898d0152945193880193909352905190860152519084015251828401528451808303909301835260e0909101909352805191926107cb9260029290910190610e68565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610d93573d6000803e3d6000fd5b50600080805560018190556101f590600290610eec565b604051806040016040528060008152602001610de360408051608081018252600060208201818152928201819052606082015290815290565b905290565b604051806040016040528060008152602001610de360405180602001604052806000151581525090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610de360405180608001604052806000151581526020016000815260200160008152602001600081525090565b828054610e749061126d565b90600052602060002090601f016020900481019282610e965760008555610edc565b82601f10610eaf57805160ff1916838001178555610edc565b82800160010185558215610edc579182015b82811115610edc578251825591602001919060010190610ec1565b50610ee8929150610f29565b5090565b508054610ef89061126d565b6000825580601f10610f08575050565b601f016020900490600052602060002090810190610f269190610f29565b50565b5b80821115610ee85760008155600101610f2a565b600060408284031215610f5057600080fd5b50919050565b600060408284031215610f6857600080fd5b610f728383610f3e565b9392505050565b6001600160a01b0381168114610f2657600080fd5b600060208284031215610fa057600080fd5b8135610f7281610f79565b634e487b7160e01b600052602160045260246000fd5b60028110610f2657634e487b7160e01b600052602160045260246000fd5b81516060820190610fef81610fc1565b8083525060208301511515602083015260408301511515604083015292915050565b600060808284031215610f5057600080fd5b82815260006020604081840152835180604085015260005b818110156110575785810183015185820160600152820161103b565b81811115611069576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff811182821017156110b157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156110b157634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156110b157634e487b7160e01b600052604160045260246000fd5b80358015158114610a5957600080fd5b60006040828403121561113b57600080fd5b611143611080565b8235815261115360208401611119565b60208201529392505050565b6000818303608081121561117257600080fd5b6040516040810181811067ffffffffffffffff821117156111a357634e487b7160e01b600052604160045260246000fd5b604052833581526060601f19830112156111bc57600080fd5b6111c46110b7565b91506111ce6110e8565b6020850135600281106111e057600080fd5b81526111ee60408601611119565b60208201526111ff60608601611119565b6040820152825260208101919091529392505050565b6000818303604081121561122857600080fd5b611230611080565b833581526020601f198301121561124657600080fd5b61124e6110b7565b915061125c60208501611119565b825260208101919091529392505050565b600181811c9082168061128157607f821691505b60208210811415610f5057634e487b7160e01b600052602260045260246000fd5b600060c082840312156112b457600080fd5b60405160c0810181811067ffffffffffffffff821117156112e557634e487b7160e01b600052604160045260246000fd5b60405282516112f381610f79565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a08301919061135f81610fc1565b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113af576113af611386565b500190565b6000828210156113c6576113c6611386565b500390565b600060a082840312156113dd57600080fd5b60405160a0810181811067ffffffffffffffff8211171561140e57634e487b7160e01b600052604160045260246000fd5b604052825161141c81610f79565b8082525060208301516020820152604083015160408201526060830151606082015260808301516080820152809150509291505056fea2646970667358221220c3efde4e2478fa05b6aa6a1069af60db0053780475977f4ac3dcc49c48c7871d64736f6c634300080c0033`,
  BytecodeLen: 6129,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:27:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:89:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:36:60:after expr stmt semicolon',
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
