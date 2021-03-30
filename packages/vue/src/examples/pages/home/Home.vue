<template>
  <div id="home">
    <!-- intro section/hero -->
    <div class="fullwidth-wrapper">
      <section class="header-section">
        <h1>
          <span class="cl-accent">{{ "Umsatzsteuerfrei liefern" }}</span>
          <span>{{ "Grenzüberschreitend B2C in 30 europäische Länder" }}</span>
        </h1>
        <SfButton
            link="#"
        >
          {{ "Anmelden" }}
        </SfButton>
      </section>
    </div>
    <!-- map -->
    <div class="fullwidth-wrapper bg-light">
      <section>
        <div class="benefits">
          <span>{{ "Registrierungsfrei" }}</span>
          <span>{{ "Steuerfrei" }}</span>
          <span>{{ "Haftungsfrei" }}</span>
        </div>
        <h2>
          <span>{{ "Stressfrei in alle EU-27" }}</span>
          <span>{{ "+ Schweiz" }}</span>
          <span>{{ "+ Großbritannien liefern" }}</span>
        </h2>
      </section>
    </div>
    <!-- benefits -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span>{{ "Umsatzsteuerfrei liefern nach ganz Europa" }}</span>
        </h2>
        <ul class="features offset">
          <li>
            <p class="medium">{{ "Steuerfrei" }}</p>
            <p>{{ "Deine Ausgangsrechnung zeigt in ganz Europa immer 0% Umsatzsteuer." }}</p>
          </li>
          <li>
            <p class="medium">{{ "Haftungsfrei" }}</p>
            <p>{{ "In deiner Buchhaltung gibt es 0,00 EUR ausländische  Steuerschulden." }}</p>
          </li>
          <li>
            <p class="medium">{{ "Registrierungsfrei" }}</p>
            <p>{{ "Du musst dich in keinem EU-Land registrieren." }}</p>
          </li>
          <li>
            <p class="medium">{{ "Betriebsprüfungsfrei" }}</p>
            <p>{{ "Keine Betriebsprüfungen im Ausland. Die Haftung liegt bei eClear." }}</p>
          </li>
          <li>
            <p class="medium">{{ "Sorgenfrei" }}</p>
            <p>{{ "Mit Steuersätzen, Ausnahmen und den häufigen Änderungen beschäftigen wir uns. Dein Steuersatz ist immer 0% Umsatzsteuer." }}</p>
          </li>
        </ul>
      </section>
    </div>
    <!-- slider -->
    <div class="fullwidth-wrapper bg-secondary">
      <section>
        <h2 class="text-primary"><span>{{ "8’065 Händer sind schon angeschlossen" }}</span></h2>
        <SfHero class="hero">
          <SfHeroItem
              v-for="(img, index) in heroes"
              :key="index"
              :image="img.image"
              :title="img.title"
              :subtitle="img.subtitle"
              :button-text="img.buttonText"
              :background="img.background"
              :class="img.className"
          />
        </SfHero>
      </section>
    </div>
    <!-- easy register -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span class="text-primary">{{ "Easy register." }}</span><br />
          <span>{{ "Einfach ganz Europa" }}</span>
        </h2>
        <div class="steps">
          <div class="step step-1 active">
            <div class="number">{{ "1" }}</div>
            <div class="label">{{ "Jetzt" }}<br />{{ "anmelden" }}</div>
          </div>
          <div class="arrow"></div>
          <div class="step step-2">
            <div class="number">{{ "2" }}</div>
            <div class="label">{{ "Vertrag" }}<br />{{ "abschließen" }}</div>
          </div>
          <div class="arrow"></div>
          <div class="step step-3">
            <div class="number">{{ "3" }}</div>
            <div class="label">{{ "Nach ganz" }}<br />{{ "Europa liefern" }}</div>
          </div>
        </div>
      </section>
    </div>
    <!-- wir schaffen die mwst ab -->
    <div class="fullwidth-wrapper bg-primary">
      <section>
        <h2>
          <span>{{ "Wir schaffen die Mehrwertsteuer in Europa ab." }}</span><br />
          <span class="text-light--variant">{{ "Für eCommerce Händler bei grenz-überschreitenden B2C Lieferungen. " }}</span>
        </h2>
        <p class="fs-xl">Du kümmerst dich um’s Geschäft!</p>
        <SfButton
            link="#"
            class="color-light"
        >
          {{ "Jetzt registrieren" }}
        </SfButton>
      </section>
    </div>
    <!-- service -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span>{{ "Unser Service – Dein Vorteil" }}</span><br />
          <span class="cl-accent">{{ "Alles inbegriffen" }}</span>
        </h2>
        <div class="sf-banner-grid banner-grid">
         <div class="sf-banner-grid__row">
          <div class="sf-banner-grid__col sf-banner-grid__col--medium">
            <div class="sf-banner__wrapper">
              <div class="benefits"><span>{{ "Ein Ansprechpartner in deiner Sprache" }}</span></div>
            </div>
          </div>
          <div class="sf-banner-grid__col sf-banner-grid__col--medium">
            <div class="checked sf-banner__wrapper">{{ "Intrastat Berichte automatisch" }}</div>
          </div>
        </div>
        </div>
        <ul class="checked offset">
          <li>
            <p class="medium">{{ "Steuerrückerstattung sofort" }}</p>
            <p>{{ "Umgehende Erstattung von Steuerbeiträgen durch ausländische Steuerbehörden zum Beispiel bei Retouren." }}</p>
          </li>
          <li>
            <p class="medium">{{ "Ein Ansprechpartner in deiner Sprache" }}</p>
          </li>
          <li>
            <p class="medium">{{ "Intrastat Berichte automatisch" }}</p>
          </li>
          <li>
            <p class="medium">{{ "Detaillierte Übersicht aller Orders" }}</p>
          </li>
          <li>
            <p class="medium">{{ "Nur ein Reconfile pro Tag" }}</p>
          </li>
          <li>
            <p class="medium">{{ "24/7 Service Hotline" }}</p>
          </li>
          <li>
            <p class="medium">{{ "Intuitives Dashboard" }}</p>
          </li>
        </ul>
      </section>
    </div>
    <!-- easy integrate -->
    <div class="fullwidth-wrapper bg-light">
      <section>
        <h2>
          <span class="text-primary">{{ "Easy integrate" }}</span><br />
          <span>{{ "Unsere kostenlosen shop hosting PlugIns und APIs" }}</span>
        </h2>
      </section>
    </div>
    <!-- preise -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span>{{ "Preise" }}</span>
        </h2>
      </section>
    </div>
    <!-- expertise -->
    <div class="fullwidth-wrapper bg-primary">
      <section>
        <h2>
          <span class="text-light">{{ "Unsere Expertise" }}</span><br />
          <span>{{ "Mehrwertsteuer" }}</span>
        </h2>
        <p class="fs-xl">
          <span class="medium">{{ "Anita Richter, Syndikus-Steuerberaterin" }}</span><br />
          <span>{{ "Vice President Tax Technology Innovation" }}</span>
        </p>
      </section>
    </div>
    <!-- sicherheit -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span class="text-primary">{{ "Zertifizierte Sicherheit" }}</span><br />
          <span>{{ "für dein Geschäft" }}</span>
        </h2>
      </section>
    </div>
    <!-- oss -->
    <div class="fullwidth-wrapper bg-light">
      <section>
        <h2>
          <span class="text-primary">{{ "Der OSS – eine Alternative?" }}</span><br />
          <span>{{ "Wenn du über den OSS nachdenkst, so solltest du Folgendes wissen:" }}</span>
        </h2>
      </section>
    </div>
    <!-- oss vs clearvat -->
    <div class="fullwidth-wrapper">
      <section>
        <h2>
          <span>{{ "OSS vs. ClearVAT" }}</span>
        </h2>
      </section>
    </div>

    <SfBannerGrid class="banner-grid">
      <template v-for="banner in banners" #[banner.slot]>
        <SfBanner
          :key="banner.slot"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :description="banner.description"
          :button-text="banner.buttonText"
          :image="banner.image"
          :class="banner.class"
        />
      </template>
    </SfBannerGrid>
  </div>
</template>
<script>
import {
  SfButton,
  SfHero,
  SfBannerGrid,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
} from "@storefront-ui/vue";
export default {
  name: "Home",
  components: {
    SfButton,
    SfHero,
    SfBannerGrid,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
  },
  data() {
    return {
      headingTitle: {
        mobile: "Match it with",
        desktop: "Bestsellers",
      },
      heroes: [
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "rgb(236, 239, 241)",
          image: "/assets/storybook/Home/hero.png",
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "rgb(239, 235, 233)",
          image: "/assets/storybook/Home/bannerHM.jpg",
          className:
            "sf-hero-item--position-bg-top-left sf-hero-item--align-right",
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "rgb(236, 239, 241)",
          image: "/assets/storybook/Home/hero.png",
        },
      ],
      banners: [
        {
          slot: "banner-A",
          subtitle: "Dresses",
          title: "Cocktail & Party",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: "/assets/storybook/Home/bannerF.jpg",
          class: "desktop-only",
        },
        {
          slot: "banner-B",
          subtitle: "Dresses",
          title: "Linen Dresses",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: "/assets/storybook/Home/bannerE.jpg",
          class: "desktop-only",
        },
        {
          slot: "banner-C",
          subtitle: "T-Shirts",
          title: "The Office Life",
          image: "/assets/storybook/Home/bannerC.jpg",
        },
        {
          slot: "banner-D",
          subtitle: "Summer Sandals",
          title: "Eco Sandals",
          image: "/assets/storybook/Home/bannerG.jpg",
        },
      ],
      products: [
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: true,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 ", special: "$ 25.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: true,
          reviews: 8,
          badgeLabel: "-50%",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 ", special: "$ 45.00" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "-10%",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
      ],
      instagramFeed: [
        [
          {
            content: "angelina_trn",
            url: "/assets/storybook/Home/imageA.png",
          },
          {
            content: "angelina_trn",
            url: "/assets/storybook/Home/imageB.png",
          },
        ],
        [
          {
            content: "angelina_trn",
            url: "/assets/storybook/Home/imageC.jpg",
          },
          {
            content: "angelina_trn",
            url: "/assets/storybook/Home/imageD.jpg",
          },
        ],
      ],
    };
  },
  methods: {
    toggleWishlist(index) {
      return (this.products[index].isOnWishlist = !this.products[index]
        .isOnWishlist);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 1272px;
    margin: 0 auto;
  }
}
section {
  padding-bottom: 240px;
  padding-top: 232px;
}
.medium {
  font-family: var(--font-family--secondary);
}
.fullwidth-bg {
  background: #cc0000;
  width: 100%;
}
.fullwidth-wrapper {
  margin: 0 -9999rem;
  padding: 0.25rem 9999rem;
  width: 100%;
}
.section {
  position: relative;
  &__wrapper {
    position: var(--header-wrapper-position);
    width: 100%;
    background: var(--header-background, #ffffff);
    transition: var(--header-wrapper-transition, transform 150ms ease-in-out);
    transform: var(--header-wrapper-transform);
    box-shadow: var(--header-box-shadow);
  }
}
.offset {
  padding: 0 var(--spacer-3xl);
}
.cl-accent {
  color: var(--c-primary);
}
.fs-xl {
  font-size: var(--font-size--xl);
}
.benefits span {
  bottom: 20px;
  position: relative;
  font-family: var(--font-family--secondary);
  font-size: 32px;
  padding: 0 45px;
}
.benefits span:before {
  content: url('~@storefront-ui/vue/public/assets/storybook/icons/icon_checkmark_large.svg');
  position: relative;
  top: 20px;
}
ul.features,
ul.checked {
  list-style-type: none;
}
ul.features li,
ul.checked li {
  padding-bottom: 48px;
  padding-left: 64px;
  position: relative;
}
ul.features li:before {
  content: url('~@storefront-ui/vue/public/assets/storybook/icons/icon_plus.svg');
  left: -48px;
  position: absolute;
}
ul.checked li:before {
  content: url('~@storefront-ui/vue/public/assets/storybook/icons/icon_checkmark_large.svg');
  left: -48px;
  position: absolute;
}
ul.features li p,
ul.checked li p {
  font-size: var(--font-size--xl);
  line-height: 1.325;
  margin: 8px 0;
}
div.checked:before {
  content: url('~@storefront-ui/vue/public/assets/storybook/icons/icon_checkmark_large.svg');
}
.steps {
  display: flex;
  align-items: baseline;
}
.step {
  display: inline-block;
  text-align: center;
}
.step .number {
  align-items: center;
  border: 8px solid;
  border-color: var(--c-primary);
  border-radius: 50%;
  display: flex;
  font-family: var(--font-family--secondary);
  font-size: var(--font-size--xl);
  height: 200px;
  justify-content: center;
  margin-bottom: 32px;
  width: 200px;
}
.step.active .number {
  background-color: var(--c-primary);
}
.step .label {
  font-family: var(--font-family--secondary);
  font-size: var(--font-size--xl);
}
.steps .arrow {
  content: url('~@storefront-ui/vue/public/assets/storybook/icons/icon_arrow-horizontal.svg');
  display: inline-block;
  padding: 0 48px;
}
.hero {
  --hero-item-background-position: center;
}
.match-with-it {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: var(--spacer-xl);
  font-size: var(--h3-font-size);
  font-family: var(--font-family--secondary);
  font-weight: var(--font-weight--bold);
  border-bottom: solid 1px var(--c-light);
  &__paragraph {
    margin-bottom: var(--spacer-xs);
  }
  @include for-desktop {
    border: none;
    justify-content: center;
    font-weight: var(--font-weight--semibold);
  }
}
.carousel {
  margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}
.banner-grid {
  margin: var(--spacer-base) 0;
  --banner-container-width: 50%;
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
  }
}
.share-your-look {
  --heading-title-font-weight: var(--font-weight--semibold);
  @include for-desktop {
    --section-margin: var(--spacer-2xl) 0;
  }
}
.call-to-action {
  display: flex;
}
.instagram-grid {
  max-width: 60rem;
  margin: 0 auto;
  &__row {
    display: flex;
    & + & {
      margin: var(--spacer-xs) 0 0 0;
      @include for-desktop {
        margin: calc(var(--spacer-xl) / 2) 0 0 0;
      }
    }
  }
  &__col {
    flex: 1;
    margin: 0;
    & + & {
      margin: 0 0 0 var(--spacer-xs);
      @include for-desktop {
        margin: 0 0 0 calc(var(--spacer-xl) / 2);
      }
    }
  }
}
.app-banner {
  --banner-container-width: 100%;
  --banner-title-margin: var(--spacer-base) 0 var(--spacer-xl) 0;
  --banner-padding: 0 var(--spacer-2xl);
  --banner-title-font-size: var(--h1-font-size);
  --banner-subtitle-font-size: var(--font-size--xl);
  --banner-title-font-weight: var(--font-weight--semibold);
  --banner-subtitle-font-weight: var(--font-weight--medium);
  --banner-title-text-transform: capitalize;
  --banner-subtitle-text-transform: capitalize;
  display: block;
  min-height: 26.25rem;
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl);
  &__call-to-action {
    --button-background: transparent;
    display: flex;
  }
  &__button {
    --image-width: 8.375rem;
    --image-height: 2.75rem;
    --button-padding: 0;
    & + & {
      margin: 0 0 0 calc(var(--spacer-xl) / 2);
    }
  }
}
</style>
