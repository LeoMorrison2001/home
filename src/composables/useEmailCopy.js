import { ref } from 'vue';

export function useEmailCopy() {
  const emailCopied = ref(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dev@architect.com");
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  };

  return { emailCopied, copyEmail };
}
