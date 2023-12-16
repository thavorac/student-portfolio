<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h1 class="text-lg font-medium mr-auto">
        <slot name="section-title"></slot>
      </h1>
      <slot name="section-title-right"></slot>
    </div>
    <slot></slot>
  </div>
</template>
