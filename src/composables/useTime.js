import { ref, onMounted, onUnmounted } from 'vue';

export function useTime() {
  const time = ref(new Date().toLocaleTimeString('en-US', { hour12: false }));

  let timer;

  onMounted(() => {
    timer = setInterval(() => {
      time.value = new Date().toLocaleTimeString('en-US', { hour12: false });
    }, 1000);
  });

  onUnmounted(() => {
    if (timer) {
      clearInterval(timer);
    }
  });

  return { time };
}
