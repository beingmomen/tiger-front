<template>
  <SettingsLayout :title="$t('sidebar.belts')" :breadcrumbs="breadcrumbs">
    <template #content>
      <ActionsCreate title="belt" :module="module">
        <template #create>
          <FormInputIcon label="Name" storeKey="name" :module="module">
            <template #icon>
              <user-icon size="1.5x" class="custom-class"></user-icon>
            </template>
          </FormInputIcon>

          <FormInputIcon label="Color" storeKey="color" :module="module">
            <template #icon>
              <font-awesome-icon icon="fa-solid fa-palette" class="fa-xl" />
            </template>
          </FormInputIcon>

          <FormSelect
            label="Activities"
            labelSelect="name"
            storeKey="activities"
            listKey="activitiesList"
            :multiple="true"
            global
            :module="module"
          >
            <template #icon>
              <activity-icon size="1.5x" class="custom-class"></activity-icon>
            </template>
          </FormSelect>
        </template>
      </ActionsCreate>
    </template>
  </SettingsLayout>
</template>

<script>
import { UserIcon, CalendarIcon, ActivityIcon } from "vue-feather-icons";
export default {
  layout: "admin",
  async asyncData({ $axios, store, $toast }) {
    store.dispatch("panel/belts/resetData");
    await $axios
      .$get(`/activities`, {
        params: {
          limit: 1000000,
        },
      })
      .then((res) => {
        store.dispatch("global/getActivitiesFromApi", res.data.data);
      });
    return {};
  },
  data() {
    return {
      module: "panel/belts",
      breadcrumbs: [
        {
          text: this.$t("sidebar.belts"),
          active: false,
          to: this.localePath("/panel/belts"),
        },
        {
          text: this.$t("cards.create"),
          active: true,
          to: this.localePath("/panel/belts/create"),
        },
      ],
    };
  },
  methods: {},
  components: {
    UserIcon,
    CalendarIcon,
    ActivityIcon,
  },
};
</script>
