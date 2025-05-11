<template>
  <TopNews :news="news" />
  <TopTrends :tags="tags" />
  <VideoSection :video="video" />
</template>

<script setup lang="ts">
import TopNews from './TopNews.vue'
import TopTrends from './TopTrends.vue'
import VideoSection from './VideoSection.vue'
import { news } from '@/data/news'
import { tags } from '@/data/tags'
import { video } from '@/data/video'
</script>
