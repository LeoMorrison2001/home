<template>
  <nav :class="[
    'fixed top-0 w-full z-50 transition-all duration-300 border-b',
    scrolled
      ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-white/10 py-4'
      : 'bg-transparent border-transparent py-6'
  ]">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div class="font-bold tracking-tighter text-white text-xl flex items-center gap-2">
        <div class="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
          <Command :size="20" />
        </div>
        <span>ARCHITECT_</span>
      </div>
      <div class="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="relative text-neutral-400 hover:text-white transition-colors uppercase text-xs tracking-widest group py-2"
        >
          {{ item.label }}
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      <div class="flex items-center gap-4">
        <span class="hidden md:block font-mono text-xs text-neutral-600">UTC {{ time }}</span>
        <button
          @click="scrollToContact"
          class="px-4 py-2 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all"
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Command } from 'lucide-vue-next';
import { useScrolled } from '../composables/useScrolled';
import { useTime } from '../composables/useTime';

const { scrolled } = useScrolled();
const { time } = useTime();

const navItems = [
  { id: 'vision', label: '01. 策略' },
  { id: 'arsenal', label: '02. 军火库' },
  { id: 'deployment', label: '03. 交付' },
];

const scrollToContact = () => {
  window.location.href = '#contact';
};
</script>
