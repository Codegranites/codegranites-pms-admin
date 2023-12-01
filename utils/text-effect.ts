const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let interval: any = null;
export const handleMouseEnter = (name: any) => {
  if (!name) return;
  let iteration = 0;
  name = name.target;
  let speed = name.dataset.value.length > 7 ? 40 : 60;

  clearInterval(interval);
  interval = setInterval(() => {
    name.innerText = name.innerText
      .split('')
      .map((_: any, index: number) => {
        if (index < iteration) {
          return name.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');

    if (iteration >= name.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, speed);
};
