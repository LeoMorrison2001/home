<template>
  <header id="vision" class="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center border-b border-white/5 z-10">
    <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">

      <!-- 左侧文字内容 -->
      <div class="lg:col-span-7 relative">
        <!-- 装饰性十字准星 -->
        <div class="absolute -left-12 top-0 text-white/20 hidden md:block">
          <Globe :size="24" :stroke-width="1" />
        </div>

        <div class="inline-flex items-center gap-3 px-3 py-1 border border-emerald-500/20 bg-emerald-900/10 rounded text-xs font-mono mb-8 text-emerald-400">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          SYSTEM OPTIMAL // v3.0.1
        </div>

        <h1 class="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-12">
          STRATEGY <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700">BUILD</span> <br />
          EXECUTE
        </h1>

        <p class="text-xl text-neutral-400 max-w-xl leading-relaxed mb-10 border-l-2 border-white/20 pl-6">
          我不只是编写代码,我构建能够解决复杂商业问题的数字化帝国。
          <span class="block mt-2 text-white font-medium">全栈架构师 · 效率至上 · ENTJ</span>
        </p>

        <!-- 核心指标展示 -->
        <div class="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-lg">
          <div>
            <div class="text-3xl font-bold text-white mb-1">5ms</div>
            <div class="text-xs text-neutral-500 uppercase tracking-wider font-mono">平均延迟</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-white mb-1">99.9%</div>
            <div class="text-xs text-neutral-500 uppercase tracking-wider font-mono">服务可用性</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-white mb-1">100+</div>
            <div class="text-xs text-neutral-500 uppercase tracking-wider font-mono">微服务节点</div>
          </div>
        </div>
      </div>

      <!-- 右侧抽象系统面板 -->
      <div class="lg:col-span-5 relative hidden lg:block">
        <div class="relative z-10 bg-[#0A0A0A] border border-white/10 p-6 rounded-lg shadow-2xl backdrop-blur-xl">
          <!-- 伪代码/状态监控头部 -->
          <div class="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div class="text-xs font-mono text-neutral-500">arch_monitor_d.exe</div>
          </div>

          <!-- 状态列表 -->
          <div class="space-y-4 font-mono text-sm">
            <div class="flex justify-between items-center text-neutral-400">
              <span class="flex items-center gap-2">
                <Server :size="16" /> Cluster Status
              </span>
              <span class="text-emerald-400">ONLINE</span>
            </div>
            <div class="w-full bg-neutral-900 h-1 rounded-full overflow-hidden">
              <div class="bg-emerald-500 w-full h-full"></div>
            </div>

            <div class="flex justify-between items-center text-neutral-400 mt-6">
              <span class="flex items-center gap-2">
                <Cpu :size="16" /> CPU Load
              </span>
              <span class="text-white">34%</span>
            </div>
            <div class="w-full bg-neutral-900 h-1 rounded-full overflow-hidden">
              <div class="bg-white/40 w-[34%] h-full"></div>
            </div>

            <div class="flex justify-between items-center text-neutral-400 mt-6">
              <span class="flex items-center gap-2">
                <Database :size="16" /> Memory Usage
              </span>
              <span class="text-white">62%</span>
            </div>
            <div class="w-full bg-neutral-900 h-1 rounded-full overflow-hidden">
              <div class="bg-white/40 w-[62%] h-full"></div>
            </div>

            <div class="mt-8 p-4 bg-neutral-900/50 border border-white/5 rounded text-xs text-neutral-500 leading-loose">
              <span class="text-blue-400">INFO</span> [10:42:01] Initializing production protocol...<br />
              <span class="text-blue-400">INFO</span> [10:42:02] Connected to neural interface.<br />
              <span class="text-emerald-400">SUCCESS</span> [10:42:05] All systems go. Waiting for command.
            </div>
          </div>

          <!-- 装饰性背景层 -->
          <div class="absolute -top-4 -right-4 w-full h-full border border-white/5 z-[-1] rounded-lg"></div>
        </div>
      </div>
    </div>

    <!-- 底部滚动条 -->
    <div class="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#050505]/80 backdrop-blur text-xs font-mono text-neutral-500 py-3 overflow-hidden">
      <div class="flex items-center justify-between px-6">
        <div class="flex gap-8 opacity-70">
          <span>// ARCHITECTURE_READY</span>
          <span>// SCALABILITY_MAXIMIZED</span>
          <span>// SECURITY_PROTOCOL_ALPHA</span>
          <span class="hidden md:inline">// EFFICIENCY_OPTIMIZED</span>
        </div>
        <div class="flex gap-2">
          <div class="w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div class="w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
          <div class="w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Globe, Server, Cpu, Database } from 'lucide-vue-next';
</script>
