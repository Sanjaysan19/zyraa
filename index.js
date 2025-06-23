document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementsByClassName('.con1');


  const animate = () => {
     let speed = 10000000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 200;
    const stepTime = 1;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});
