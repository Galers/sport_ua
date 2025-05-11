<template>
  <article aria-label="Video content">
    <div class="video-section">
      <h3 class="video-section__title">
        <a href="">
          Видео
          <span class="video-section__icon">
            <i class="fa-solid fa-video"></i>
          </span>
        </a>
      </h3>
      <a href="/">
        <div class="video-card">
          <span class="video-card__badge">{{ video.category }}</span>
          <span class="video-card__play">
            <img
              src="../assets/video.svg"
              alt=""
              class="video-card__thumb"
              width="18"
              height="12"
            />
          </span>
          <h3 class="video-card__headline">{{ video.title }}</h3>
          <div class="video-card__meta">
            <time class="video-card__date">{{ video.date }}</time>
            <span class="video-card__comments">
              <img src="../assets/comment.svg" alt="" />
              {{ video.comments }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Video {
  category: string
  title: string
  date: string
  comments: number
}
const props = defineProps<{ video: Video }>()
const video = props.video
</script>

<style scoped lang="scss">
.video-section {
  margin-bottom: 5px;
}

.video-section__title {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  color: $black-09;

  .fa-solid {
    color: $black-05;
  }
}

.video-section__icon {
  font-size: 16px;
}

.video-card {
  position: relative;
  background-image: url('/video-content.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  overflow: hidden;
  color: $white;
  width: 100%;
  aspect-ratio: 336 / 202;
  padding: 12px;

  @include onDesktop {
    width: 300px;
    height: 180px;
    aspect-ratio: auto;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: $gradient;
    pointer-events: none;
  }

  &__thumb {
    width: 100%;
    display: block;
  }

  &__badge {
    position: absolute;
    background: $green;
    padding: 4px 10px;
    border-radius: 2px;
    font-weight: 500;
    font-size: 12px;
    line-height: 0.9;
  }

  &__play {
    position: absolute;
    right: 12px;
    height: 40px;
    width: 40px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: inline-block;
    align-content: center;
  }

  &__headline {
    position: absolute;
    bottom: 36px;
    left: 12px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    text-shadow: 0 1px 3px $black-05;
  }

  &__meta {
    position: absolute;
    bottom: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    text-shadow: 0 1px 2px $black-05;
    font-size: 12px;
    line-height: 0.9;
    color: $white-light;
  }

  .video-card__comments {
    display: flex;
    align-items: center;
    gap: 2px;
  }
}
</style>
