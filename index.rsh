'reach 0.1';

const Thieves = Object({
  'thief1' : Address,
  'thief2' : Address
});

export const main = Reach.App(() => {
  const Head = Participant('HeadOfFamily', {
    initialStakes : UInt,
    boughtTime : UInt,
    wakeUpFee : UInt,
    sendThief : Fun([Address], Null),
    getThieves : Fun([], Thieves)
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

  
  const endTheGame = lastConsensusTime() + boughtTime;

  const [ time, headIsAwake, familyVotes, thiefCount ] = parallelReduce([ boughtTime, true, 0, 0 ])
    .invariant(  balance() == (initialStake + (familyVotes * wakeupFee)) )
    .while( headIsAwake )
    .api(Family.keepHeadAwake, 
      () => {
        check(time > 0, "Time is up");
      },
      () => wakeupFee,
      (k) => {
        k(true);
        return [ time + 1, (time + 1) > 0, familyVotes + 1, thiefCount ]
      }
      )
      .api(Thief.robTheTime, 
        () => {
          check(time > 0, "Add time should be greter than zero");
          check(thiefCount < 2, "Thieves should not be greater than 2");
        },
        () => 0,
        (k) => {
          k(true);
            Head.interact.sendThief(this);
            return [time - 1 , (time - 1) > 0, familyVotes, thiefCount+1];
        })
     .timeout(relativeTime(endTheGame), () => {
      const [ [], k ] = call(Family.timesUp);
      k(null);
       return [time , time > 0, familyVotes, thiefCount];
     });

     commit();

     Head.only(() => {
      const theives = declassify(interact.getThieves());
     })

     Head.publish(theives);


     if(headIsAwake)
       transfer(balance()).to(Head);
    else {
      transfer(balance()/2).to(theives.thief1);
      transfer(balance()).to(theives.thief2);
    }
 
     commit();
  // write your program here
  exit();
});
