import Home from "./Home";
import { SfHeader, SfLink } from "@storefront-ui/vue";
import dummy from "../../../stories/resources/main";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-header--has-mobile-search",
          "sf-header--has-mobile-navigation",
          "sf-header--multiline",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    logo: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    cartIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "empty_cart",
      },
    },
    wishlistIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "heart",
      },
    },
    accountIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "profile",
      },
    },
    activeIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "",
      },
    },
    searchPlaceholder: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "Search for items",
      },
    },
    searchValue: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    cartItemsQty: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: 0,
      },
    },
    isSticky: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    isNavVisible: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    "change:search": {
      action: "Changed search value",
      table: { category: "Events" },
    },
    "click:cart": {
      action: "Clicked on cart",
      table: { category: "Events" },
    },
    "click:wishlist": {
      action: "Clicked on Wishlist",
      table: { category: "Events" },
    },
    "click:account": {
      action: "Clicked on Account",
      table: { category: "Events" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Home, SfHeader, SfLink },
  props: Object.keys(argTypes),
  data() {
    return {
      navigationItems: dummy.SfHeader.navigationItems,
      searchValues: dummy.SfHeader.searchValues,
    };
  },
  template: `<div id="root">
  <SfHeader
      :class="classes"
      :title="title"
      :logo="logo"
      :active-icon="activeIcon"
      :search-placeholder="searchPlaceholder"
      :search-value="searchValues"
      :cart-icon="cartIcon"
      :wishlist-icon="wishlistIcon"
      :is-sticky="isSticky"
      :account-icon="accountIcon"
      :cart-items-qty="cartItemsQty"
      :wishlist-items-qty="wishlistItemsQty"
      @click:cart="this['click:cart']"
      @click:wishlist="this['click:wishlist']"
      @click:account="this['click:account']"
      @change:search="searchValues = $event"
  >
    <template #navigation>
      <SfHeaderNavigationItem
          v-for="item in navigationItems"
          :key="item">
        <template slot="desktop-navigation-item">
          <SfLink href="#">{{ item }}</SfLink>
        </template>
      </SfHeaderNavigationItem>
    </template>

    <template #navigation>
                  <SfHeaderNavigationItem
                      v-for="item in navigationItems"
                      :key="item">
                    <template slot="desktop-navigation-item">
                      <SfLink href="#">{{item}}</SfLink>
                    </template>
                  </SfHeaderNavigationItem>
                </template>
              </SfHeader>
              <Home />
  </div>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Storefront UI",
  logo: dummy.SfHeader.logo,
  isSticky: dummy.SfHeader.isSticky,
};
