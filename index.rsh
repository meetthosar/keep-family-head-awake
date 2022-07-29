'reach 0.1';

export const main = Reach.App(() => {
  const Head = Participant('HeadOfFamily', {
    initialStakes : UInt,
    boughtTime : UInt,
    wakeUpFee : UInt
  });
  const Family = API('Family', {
    keepHeadAwake : Fun([], Bool),
    timesUp : Fun([], Null)
  });
  const Thief = API('Thieves', {
    robTheTime : Fun([], Bool),
  });
  init();


  Head.only(() => {
    const initialStake = declassify(interact.initialStakes);
    const boughtTime = declassify(interact.boughtTime);
    const wakeupFee = declassify(interact.wakeUpFee);
  })

  // The first one to publish deploys the contract
  Head.publish(initialStake, boughtTime, wakeupFee);
  commit();

  Head.pay(initialStake);
  
  // The second one to publish always attaches

  const thiefSets = new Set();
  const endTheGame = lastConsensusTime() + boughtTime;

  const [ time, headIsAwake, familyVotes ] = parallelReduce([ boughtTime, true, 0 ])
    .invariant(  balance() == (initialStake + (familyVotes * wakeupFee)) )
    .while( headIsAwake )
    .api(Family.keepHeadAwake, 
      () => {
        check(time > 0, "Time is up");
      },
      () => wakeupFee,
      (k) => {
        k(true);
        return [ time + 1, (time + 1) > 0, familyVotes + 1 ]
      }
      )
      .api(Thief.robTheTime, 
        () => {
          check(time > 0, "Add time should be greter than zero")
        },
        () => 0,
        (k) => {
          k(true);
            if(!thiefSets.member(this))
              thiefSets.insert(this);
            return [time - 1 , (time - 1) > 0, familyVotes];
        })
     .timeout(relativeTime(endTheGame), () => {
      const [ [], k ] = call(Family.timesUp);
      k(null);
       return [time , time > 0, familyVotes];
     });

    //  if(headIsAwake)
       transfer(balance()).to(Head);
    // else 
 
     commit();
  // write your program here
  exit();
});
