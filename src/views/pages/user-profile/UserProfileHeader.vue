<script setup>
import { ref, onMounted } from "vue";
import { useSheetsDataStore } from "@/@core/stores/sheetsData";

const profileHeaderData = ref(null);

// Access the store
const store = useSheetsDataStore();

// Fetch data when component mounts
onMounted(async () => {
  await store.fetchSheetData(); // Ensure data is fetched
  const bestEmployee = store.bestEmployeeDetails;
  if (bestEmployee.name !== "No data") {
    // Mockup of how you might set profileHeaderData based on the bestEmployee details
    // Adjust according to your actual data structure and where you store images, etc.
    profileHeaderData.value = {
      fullName: bestEmployee.name,
      avgScore: bestEmployee.avgScore,
      // Assuming you have placeholders for these or can fetch them from somewhere
      coverImg: "/path/to/default/coverImg.jpg", // Placeholder path
      profileImg: "/path/to/default/profileImg.jpg", // Placeholder path
      designation: "Employee of the Week",
      location: "Office Location", // Example static data
      joiningDate: "Joining Date", // Example static data
    };
  }
});
</script>

<template>
  <VCard v-if="profileHeaderData">
    <!-- <VImg
      :src="profileHeaderData.coverImg"
      min-height="125"
      max-height="250"
      cover
    /> -->

    <VCardText
      class="d-flex align-bottom flex-sm-row flex-column justify-center gap-x-5"
    >
      <div class="d-flex h-0">
        <!-- <VAvatar
          rounded
          size="120"
          :image="profileHeaderData.profileImg"
          class="user-profile-avatar mx-auto"
        /> -->
      </div>

      <div class="user-profile-info w-100 mt-16 pt-6 pt-sm-0 mt-sm-0">
        <h5 class="text-h5 text-center text-sm-start font-weight-medium mb-3">
          {{ profileHeaderData.fullName }}
        </h5>
        <div class="text-subtitle-1 text-center text-sm-start">
          Score: {{ profileHeaderData.avgScore }}
        </div>

        <!-- You can add or adjust additional profile details here -->
        <div
          class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-4"
        >
          <span class="d-flex">
            <VIcon size="20" icon="tabler-award" class="me-1" />
            <span class="text-body-1">
              {{ profileHeaderData.designation }}
            </span>
          </span>
          <!-- Example static details, adjust as needed -->
          <span class="d-flex">
            <VIcon size="20" icon="tabler-map-pin" class="me-1" />
            <span class="text-body-1">
              {{ profileHeaderData.location }}
            </span>
          </span>

          <span class="d-flex">
            <VIcon size="20" icon="tabler-calendar" class="me-1" />
            <span class="text-body-1">
              {{ profileHeaderData.joiningDate }}
            </span>
          </span>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
<style lang="scss">
.user-profile-avatar {
  border: 5px solid rgb(var(--v-theme-surface));
  background-color: rgb(var(--v-theme-surface)) !important;
  inset-block-start: -3rem;

  .v-img__img {
    border-radius: 0.125rem;
  }
}
</style>
