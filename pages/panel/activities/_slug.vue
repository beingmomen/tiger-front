<template>
  <SettingsLayout :title="$t('sidebar.activities')" :breadcrumbs="breadcrumbs">
    <template #content>
      <ActionsUpdate title="activity" :module="module" :id="id">
        <template #update>
          <FormInputIcon
            label="Name"
            storeKey="name"
            :module="module"
            lg="12"
            md="12"
          >
            <template #icon>
              <user-icon size="1.5x" class="custom-class"></user-icon>
            </template>
          </FormInputIcon>

          <FormFile label="Image" storeKey="image" :module="module">
            <template #icon>
              <image-icon size="1.5x" class="custom-class"></image-icon>
            </template>
          </FormFile>

          <FormFile label="Image Cover" storeKey="imageCover" :module="module">
            <template #icon>
              <image-icon size="1.5x" class="custom-class"></image-icon>
            </template>
          </FormFile>

          <CardsPreviewImage
            :module="module"
            storeKey="PreviewImage"
            path="activities"
          />
          <CardsPreviewImage
            :module="module"
            storeKey="PreviewImageCover"
            path="activities"
          />
        </template>
      </ActionsUpdate>
    </template>
  </SettingsLayout>
</template>

<script>
import { UserIcon, ImageIcon } from "vue-feather-icons";
import BCardCode from "~/@core/components/b-card-code/BCardCode.vue";
export default {
  layout: "admin",
  name: "slug",
  async asyncData({ $axios, store, $toast, params }) {
    const id = params.slug.split("-").at(-1);
    await $axios.$get(`/activities/${id}`).then((res) => {
      store.dispatch("panel/activities/showSingleData", res.data.data);
    });

    return {
      id,
    };
  },
  data() {
    return {
      module: "panel/activities",
      breadcrumbs: [
        {
          text: this.$t("sidebar.activities"),
          active: false,
          to: this.localePath("/panel/activities"),
        },
        {
          text: this.$t("cards.update"),
          active: true,
          to: this.localePath("/panel/activities/:slug"),
        },
      ],
    };
  },
  methods: {
    updateDataInDB() {
      this.$store
        .dispatch(`${this.module}/updateDataInDB`, this.id)
        .then(() => {
          this.$toast.success("Updates Successfully");
          this.$store.dispatch(`${this.module}/resetData`);
          this.$router.push(
            this.$route.path.replace(`/${this.$route.params.slug}`, "")
          );
        });
    },
  },
  components: {
    BCardCode,
    UserIcon,
    ImageIcon,
  },
};
</script>
