import { ref, onMounted, onUnmounted } from 'vue';

export function useScrolled() {
  const scrolled = ref(false);

  const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { scrolled };
}
