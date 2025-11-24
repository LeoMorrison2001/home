<template>
  <section id="deployment" class="py-32 px-6 bg-[#0a0a0a] relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-end justify-between mb-20 border-b border-white/10 pb-6">
        <div>
          <div class="text-emerald-500 font-mono text-sm mb-2">03 // DEPLOYMENTS</div>
          <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight">交付记录</h2>
        </div>
        <Lock :size="48" :stroke-width="1" class="text-neutral-800" />
      </div>

      <div class="space-y-20">
        <!-- Project 1 -->
        <div class="group border-l-2 border-white/10 pl-8 hover:border-emerald-500 transition-colors duration-500 relative">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-[#0a0a0a] border-2 border-white/10 rounded-full group-hover:border-emerald-500 transition-colors"></div>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <div class="flex items-center gap-4 mb-4">
                <span class="text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">01</span>
                <h3 class="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">FinTech 核心交易引擎</h3>
              </div>

              <p class="text-neutral-400 leading-relaxed mb-6">
                从0到1构建完整的交易系统,负责产品规划、技术架构、团队协作和项目交付全流程。
              </p>

              <ul class="mb-8 space-y-2">
                <li class="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle :size="16" class="text-emerald-500" />
                  <span>延迟从 120ms 降低至 <span class="text-white font-bold">5ms</span></span>
                </li>
                <li class="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle :size="16" class="text-emerald-500" />
                  <span>并发处理能力提升 <span class="text-white font-bold">1000%</span></span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project1Tags"
                  :key="tag"
                  class="px-3 py-1 bg-white/5 text-xs text-neutral-400 font-mono border border-white/5"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- 抽象的项目展示区域 -->
            <div class="bg-neutral-900/30 border border-white/5 p-6 relative overflow-hidden group-hover:border-white/10 transition-colors">
              <div class="absolute top-2 right-2 flex gap-1">
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <div class="h-full flex flex-col justify-center items-center opacity-40 group-hover:opacity-60 transition-opacity">
                <div class="w-32 h-32 border-2 border-dashed border-white rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
                  <div class="w-20 h-20 border border-white rotate-45"></div>
                </div>
                <div class="mt-4 font-mono text-xs tracking-widest">PROCESSING DATA FLOW</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="group border-l-2 border-white/10 pl-8 hover:border-emerald-500 transition-colors duration-500 relative">
          <div class="absolute -left-[9px] top-0 w-4 h-4 bg-[#0a0a0a] border-2 border-white/10 rounded-full group-hover:border-emerald-500 transition-colors"></div>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <div class="flex items-center gap-4 mb-4">
                <span class="text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">02</span>
                <h3 class="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">SaaS 资源调度平台</h3>
              </div>

              <p class="text-neutral-400 leading-relaxed mb-6">
                负责产品架构设计和技术实现,通过智能算法优化资源调度,降低运营成本。
              </p>

              <ul class="mb-8 space-y-2">
                <li class="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle :size="16" class="text-emerald-500" />
                  <span>云基础设施成本降低 <span class="text-white font-bold">40%</span></span>
                </li>
                <li class="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle :size="16" class="text-emerald-500" />
                  <span>自动化运维效率提升 <span class="text-white font-bold">300%</span></span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project2Tags"
                  :key="tag"
                  class="px-3 py-1 bg-white/5 text-xs text-neutral-400 font-mono border border-white/5"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="bg-neutral-900/30 border border-white/5 p-6 relative overflow-hidden group-hover:border-white/10 transition-colors">
              <div class="absolute top-2 right-2 flex gap-1">
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
                <div class="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <!-- 简单的柱状图模拟 -->
              <div class="h-full flex items-end justify-center gap-2 opacity-40 group-hover:opacity-60 transition-opacity pb-8">
                <div class="w-4 h-16 bg-white/50"></div>
                <div class="w-4 h-24 bg-white/30"></div>
                <div class="w-4 h-32 bg-white/80"></div>
                <div class="w-4 h-20 bg-emerald-500/80"></div>
                <div class="w-4 h-28 bg-white/40"></div>
              </div>
              <div class="absolute bottom-4 w-full text-center font-mono text-xs tracking-widest opacity-50">RESOURCE OPTIMIZATION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Lock, CheckCircle } from 'lucide-vue-next';

const project1Tags = ['C++', 'Microservices', 'gRPC', 'Redis'];
const project2Tags = ['Python', 'React', 'TensorFlow', 'Docker'];
</script>
