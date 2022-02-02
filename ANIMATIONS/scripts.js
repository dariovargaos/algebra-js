anime({
    targets: '.animate-me',
    translateX: 270,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
});

anime({

    targets: '.numbers',
    innerHTML: [0, 10000],
    easing: 'linear',
    round: '10'

});

anime({
    targets: '.animate-me-2',
    translateX: {
      value: 250,
      duration: 800
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 2,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
  });


  anime({
    targets: '.loop-alternate-infinity',
    translateX: 270,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });