<template>
  <li class="glide__slide sf-hero-item" :style="style">
    <component :is="wrapper" class="sf-hero-item__wrapper" :link="link">
      <!--@slot hero item title. Slot content will replace default <h1> tag-->
      <slot name="title" v-bind="{ title }">
        <h1 v-if="title" class="sf-hero-item__title">{{ title }}</h1>
      </slot>
      <!--@slot hero item subtitle. Slot content will replace default <h2> tag-->
      <slot name="subtitle" v-bind="{ subtitle }">
        <div v-if="subtitle" class="sf-hero-item__subtitle">{{ subtitle }}</div>
      </slot>
      <!--@slot Call to action section. Slot content will replace default SfButton component-->
      <!--<slot name="call-to-action" v-bind="{ buttonText, link }">
        <div v-if="buttonText && !isMobile" class="sf-hero-item__button">
          <SfButton :link="link">
            {{ buttonText }}
          </SfButton>
        </div>
      </slot>-->
    </component>
  </li>
</template>
<script>
import SfButton from "../../../atoms/SfButton/SfButton.vue";
import SfLink from "../../../atoms/SfLink/SfLink.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../../utilities/mobile-observer";
export default {
  name: "SfHeroItem",
  components: {
    SfButton,
    SfLink,
  },
  props: {
    /** Hero item title */
    title: {
      type: String,
      default: "",
    },
    /** Hero item subtitle (at the top) */
    subtitle: {
      type: String,
      default: "",
    },
    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: "",
    },
    /** Background color */
    background: {
      type: String,
      default: "",
    },
    /** Background image path */
    image: {
      type: [Object, String],
      default: "",
    },
    /** link to be used in button if necessary */
    link: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_hero-item-background-image": image.mobile
          ? `url(${image.mobile})`
          : `url(${image})`,
        "--_hero-item-background-desktop-image":
          image.desktop && `url(${image.desktop})`,
        "--_hero-item-background-color": background,
      };
    },
    wrapper() {
      return !this.isMobile ? "div" : this.link ? "SfLink" : "SfButton";
    },
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
};
</script>
