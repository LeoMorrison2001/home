<template>
  <footer id="contact" class="relative py-32 px-6 border-t border-white/10 bg-[#0a0a0a] overflow-hidden z-10">
    <div class="max-w-6xl mx-auto text-center relative z-10">
      <div class="inline-block px-3 py-1 border border-white/10 rounded-full text-xs text-neutral-400 mb-8 font-mono">
        AVAILABLE FOR HIRE
      </div>
      <h2 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
        准备好升级你的系统了吗？
      </h2>
      <p class="text-neutral-400 text-xl mb-12 max-w-xl mx-auto">
        我不接平庸的项目。如果你的挑战足够大,需要战略性的技术视野,请联系我。
      </p>

      <div class="flex flex-col md:flex-row items-center justify-center gap-6">
        <button
          @click="sendEmail"
          class="px-8 py-4 bg-white text-black text-lg font-bold tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-3 w-full md:w-auto justify-center"
        >
          <Mail :size="20" />
          发送邮件
        </button>

        <button
          @click="copyEmail"
          class="px-8 py-4 border border-white/20 text-white text-lg font-medium hover:bg-white/5 transition-colors flex items-center gap-3 w-full md:w-auto justify-center group"
        >
          <CheckCircle v-if="emailCopied" :size="20" class="text-emerald-400" />
          <Copy v-else :size="20" class="group-hover:text-white" />
          <span v-if="emailCopied">已复制</span>
          <span v-else>dev@architect.com</span>
        </button>
      </div>

      <div class="mt-20 pt-10 border-t border-white/5 flex flex-row items-center justify-between gap-8 text-sm text-neutral-600">
        <div class="font-mono">
          © {{ currentYear }} 任宇恒.
        </div>
        <div class="flex gap-8">
          <a href="#" class="hover:text-white transition-colors">X</a>
          <a href="#" class="hover:text-white transition-colors">NOTION</a>
          <a href="#" class="hover:text-white transition-colors">YOUTUBE</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { Mail, Copy, CheckCircle } from 'lucide-vue-next';
import { useEmailCopy } from '../composables/useEmailCopy';

const { emailCopied, copyEmail } = useEmailCopy();

const currentYear = computed(() => new Date().getFullYear());

const sendEmail = () => {
  window.location.href = 'mailto:dev@architect.com';
};
</script>
