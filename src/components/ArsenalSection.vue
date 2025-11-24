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
            <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Terminal :size="24" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">技术栈</h3>
            <p class="text-sm text-neutral-500 mb-6 leading-relaxed">
              掌握从前端到后端的完整技术链路,用代码实现产品价值。
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
            <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Zap :size="24" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">架构设计</h3>
            <p class="text-sm text-neutral-500 mb-6 leading-relaxed">
              构建高可用、可扩展的系统架构,支撑业务持续增长。
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
            <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Activity :size="24" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">产品 & 项目</h3>
            <p class="text-sm text-neutral-500 mb-6 leading-relaxed">
              从需求分析到项目交付,掌控产品全生命周期管理。
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

const coreSkills = ['Vue / React', 'Node.js / Python', 'TypeScript'];
const infraSkills = ['微服务架构', 'MySQL / Redis', 'Docker / K8s'];
const fullstackSkills = ['需求分析', '项目管理', '敏捷开发'];
</script>
