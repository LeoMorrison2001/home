<template>
  <div class="min-h-screen bg-[#050505] text-neutral-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden relative">

    <!-- 全局背景装饰 - 极细网格与光晕 -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <!-- 深邃的顶部光照 -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full"></div>
      <!-- 底部微弱的冷光 -->
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-900/[0.05] blur-[150px] rounded-full"></div>
      <!-- 网格线 - 极低透明度 -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <!-- 导航 -->
    <Navigation />

    <!-- Hero Section -->
    <HeroSection />

    <!-- 军火库 Section -->
    <ArsenalSection />

    <!-- 交付记录 Section -->
    <DeploymentSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue';
import HeroSection from './components/HeroSection.vue';
import ArsenalSection from './components/ArsenalSection.vue';
import DeploymentSection from './components/DeploymentSection.vue';
import FooterSection from './components/FooterSection.vue';
</script>
