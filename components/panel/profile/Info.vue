<template>
  <b-card>
    <b-row>
      <!-- User Info: Left col -->
      <b-col
        cols="12"
        xl="6"
        class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="url"
            text="tgegjid dgfgdhj"
            :variant="`light-green`"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1 mx-75">
            <div class="mb-1">
              <h4 class="mb-0">{{ $auth.user.name }}</h4>
              <span class="card-text">{{ $auth.user.email }}</span>
            </div>
            <div class="d-flex flex-wrap">
              <b-button variant="primary" @click="openFile">
                <b-form-file
                  id="myImage"
                  ref="refInputEl"
                  class="d-none"
                  v-model="image"
                />
                <!-- @input="inputImageRenderer" -->

                <span class="d-none d-sm-inline">
                  {{ $t("cards.changePhone") }}
                </span>
              </b-button>
            </div>
          </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col cols="12" xl="6">
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <user-icon size="1.5x" class="custom-class mx-75"></user-icon>
              <span class="font-weight-bold">{{ $t("cards.username") }}</span>
            </th>
            <td class="pb-50">{{ $auth.user.slug }}</td>
          </tr>
          <tr>
            <th class="pb-50">
              <check-icon size="1.5x" class="custom-class mx-75"></check-icon>
              <span class="font-weight-bold">{{ $t("cards.status") }}</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ $auth.user.active ? "Active" : "Suspend" }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <star-icon size="1.5x" class="custom-class mx-75"></star-icon>
              <span class="font-weight-bold">{{ $t("cards.role") }}</span>
            </th>
            <td class="pb-50 text-capitalize">{{ $auth.user.role }}</td>
          </tr>
          <tr>
            <th class="pb-50">
              <flag-icon size="1.5x" class="custom-class mx-75"></flag-icon>
              <span class="font-weight-bold">{{ $t("cards.country") }}</span>
            </th>
            <td class="pb-50">{{ $auth.user.country }}</td>
          </tr>
          <tr>
            <th>
              <phone-icon size="1.5x" class="custom-class mx-75"></phone-icon>
              <span class="font-weight-bold">{{ $t("cards.contact") }}</span>
            </th>
            <td>{{ $auth.user.phone }}</td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  UserIcon,
  StarIcon,
  FlagIcon,
  PhoneIcon,
  CheckIcon,
  XIcon,
  HomeIcon,
  UsersIcon,
  ShoppingCartIcon,
  ActivityIcon,
  UserCheckIcon,
} from "vue-feather-icons";
export default {
  props: {
    module: String,
    img: null,
  },
  computed: {
    url() {
      let url = `${this.$config.NODE_URL_images}/users/${this.$auth.user.photo}`;
      return url;
    },
    image: {
      get: function () {
        return this.img;
      },
      set(val) {
        this.$store
          .dispatch(`${this.module}/updateMe`, { photo: val })
          .then(() => {
            this.$store.dispatch(`${this.module}/me`);
            this.$nuxt.refresh();
          });
      },
    },
  },
  components: {
    UserIcon,
    StarIcon,
    FlagIcon,
    PhoneIcon,
    CheckIcon,
    XIcon,
    HomeIcon,
    UsersIcon,
    ShoppingCartIcon,
    ActivityIcon,
    UserCheckIcon,
  },
  methods: {
    openFile() {
      document.getElementById("myImage").click();
    },
    inputImageRenderer() {
      this.$store
        .dispatch(`${this.module}/updateMe`, { photo: this.img })
        .then(() => {
          this.$store.dispatch(`${this.module}/me`);
          this.$nuxt.refresh();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
