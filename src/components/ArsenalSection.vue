<template>
  <section id="arsenal" class="py-32 px-6 border-b border-white/5 relative z-10 bg-[#0a0a0a]">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-end justify-between mb-20 border-b border-white/10 pb-6">
        <div>
          <div class="text-emerald-500 font-mono text-sm mb-2">02 // CAPABILITIES</div>
          <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight">军火库</h2>
        </div>
        <Cpu :size="48" :stroke-width="1" class="text-neutral-800" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 卡片 1 -->
        <div class="group relative bg-neutral-900/20 border border-white/10 p-8 hover:border-white/30 transition-all duration-300 overflow-hidden">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Code :size="96" />
          </div>
          <div class="relative z-10">
            <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
              <Terminal :size="24" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">核心工程</h3>
            <p class="text-sm text-neutral-500 mb-6 leading-relaxed">
              底层逻辑构建与高性能计算。我不写多余的代码,每一行都有其存在的战略意义。
            </p>
            <div class="space-y-3">
              <div
                v-for="skill in coreSkills"
                :key="skill"
                class="flex items-center justify-between text-sm font-mono text-neutral-400 border-b border-white/5 pb-1"
              >
                <span>{{ skill }}</span>
                <span class="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs">READY</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片 2 -->
        <div class="group relative bg-neutral-900/20 border border-white/10 p-8 hover:border-white/30 transition-all duration-300 overflow-hidden">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Server :size="96" />
          </div>
          <div class="relative z-10">
            <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
              <Zap :size="24" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">基础设施</h3>
            <p class="text-sm text-neutral-500 mb-6 leading-relaxed">
              构建坚不可摧的数字堡垒。高可用性、自动伸缩是标配,不是选配。
            </p>
            <div class="space-y-3">
              <div
                v-for="skill in infraSkills"
                :key="skill"
                class="flex items-center justify-between text-sm font-mono text-neutral-400 border-b border-white/5 pb-1"
              >
                <span>{{ skill }}</span>
                <span class="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs">READY</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 卡片 3 -->
        <div class="group relative bg-neutral-900/20 border border-white/10 p-8 hover:border-white/30 transition-all duration-300 overflow-hidden">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Layers :size="96" />
          </div>
          <div class="relative z-10">
            <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
              <Activity :size="24" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">全栈交付</h3>
            <p class="text-sm text-neutral-500 mb-6 leading-relaxed">
              从数据流到像素级的前端交互,掌控每一个环节的用户体验与性能。
            </p>
            <div class="space-y-3">
              <div
                v-for="skill in fullstackSkills"
                :key="skill"
                class="flex items-center justify-between text-sm font-mono text-neutral-400 border-b border-white/5 pb-1"
              >
                <span>{{ skill }}</span>
                <span class="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs">READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Cpu, Code, Terminal, Server, Zap, Layers, Activity } from 'lucide-vue-next';

const coreSkills = ['Rust / C++', 'Golang', 'System Design'];
const infraSkills = ['Kubernetes', 'AWS Architecture', 'Terraform'];
const fullstackSkills = ['React / Next.js', 'PostgreSQL', 'GraphQL'];
</script>
