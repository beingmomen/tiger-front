<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow menu-light"
    :class="{
      expanded: makeLayoutCollapsed || true,
      expanded: hover,
    }"
    @mouseenter="hoverSidebar"
    @mouseleave="hoverSidebar"
  >
    <div class="navbar-header expanded">
      <ul class="nav navbar-nav flex-row justify-content-between">
        <li class="nav-item mb-3">
          <nuxt-link
            :to="localePath('/panel')"
            class="navbar-brand router-link-active mt-0"
          >
            <span :class="logoWidth ? 'brand-logo' : 'brand-logo-small'">
              <MainLogo
                :style="{ width: logoWidth ? '210px' : '67px' }"
                class="mw-100 logo-img"
              />
            </span>
            <!-- <MainTitle /> -->
          </nuxt-link>
        </li>
        <li class="nav-item nav-toggle me-3">
          <nuxt-link
            @click.native="hideSidebar"
            to=""
            class="nav-link modern-nav-toggle"
          >
            <x-icon
              v-if="width <= 1200"
              size="1.5x"
              class="custom-class"
            ></x-icon>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div
      class="ps-container main-menu-content scroll-area ps ps--active-y mt-2"
    >
      <ul class="navigation navigation-main">
        <MainSidebarLink :name="$t(`sidebar.dashboard`)" route="/panel">
          <template #icon>
            <home-icon size="1.5x" class="custom-class"></home-icon>
          </template>
        </MainSidebarLink>
        <MainSidebarBreakLink />
        <MainSidebarLink :name="$t(`sidebar.admins`)" route="/panel/admins">
          <template #icon>
            <user-icon size="1.5x" class="custom-class"></user-icon>
          </template>
        </MainSidebarLink>
        <MainSidebarLink :name="$t(`sidebar.users`)" route="/panel/users">
          <template #icon>
            <users-icon size="1.5x" class="custom-class"></users-icon>
          </template>
        </MainSidebarLink>
        <MainSidebarLink
          :name="$t(`sidebar.activities`)"
          route="/panel/activities"
        >
          <template #icon>
            <activity-icon size="1.5x" class="custom-class"></activity-icon>
          </template>
        </MainSidebarLink>
        <MainSidebarLink
          :name="$t(`sidebar.moderators`)"
          route="/panel/moderators"
        >
          <template #icon>
            <user-check-icon size="1.5x" class="custom-class"></user-check-icon>
          </template>
        </MainSidebarLink>
        <MainSidebarLink
          :name="$t(`sidebar.championships`)"
          route="/panel/championships"
        >
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-trophy" class="fa-xl" />
          </template>
        </MainSidebarLink>
        <MainSidebarLink :name="$t(`sidebar.belts`)" route="/panel/belts">
          <template #icon>
            <font-awesome-icon icon="fa-solid fa-bacon" class="fa-xl" />
          </template>
        </MainSidebarLink>
        <MainSidebarLink :name="$t(`sidebar.players`)" route="/panel/players">
          <template #icon>
            <img
              style="width: 21px; height: 21px; margin-inline-end: 15.4px"
              :src="require('@/assets/images/icons/karate.svg')"
              alt=""
            />
          </template>
        </MainSidebarLink>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  XIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
  ShoppingCartIcon,
  ActivityIcon,
  UserCheckIcon,
} from "vue-feather-icons";
export default {
  props: ["width"],
  data() {
    return {
      hover: false,
      isOpen: false,
    };
  },
  computed: {
    returnDashboardChild() {
      let arr = [
        { name: this.$t("sidebar.settings"), route: "/panel/eCommerce" },
        { name: this.$t("sidebar.pages"), route: "/panel/analytics" },
      ];
      return arr;
    },
    logoWidth() {
      return this.$store.getters["getLogoWidth"];
    },
  },
  components: {
    XIcon,
    HomeIcon,
    UserIcon,
    UsersIcon,
    ShoppingCartIcon,
    ActivityIcon,
    UserCheckIcon,
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch("hideSidebar");
    },
    hoverSidebar() {
      if (this.width > 1200) {
        this.hover = this.hover ? false : true;

        if (!this.makeLayoutCollapsed) {
          this.$store.dispatch("logoWidth");
        }
      }
    },
  },
};
</script>

<style lang="scss">
.brand-logo {
  margin-top: -40px;
}

.brand-logo-small {
  margin-top: 20px;
  margin-left: -6px;
}

.logo-img {
  transition: all 0.35s ease-in-out;
}
</style>
