<script setup>
const props = defineProps({
  cardDetails: {
    type: Object,
    required: false,
    default: () => ({
      number: '',
      name: '',
      expiry: '',
      cvv: '',
      isPrimary: false,
      type: '',
    }),
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'submit',
  'update:isDialogVisible',
])

const cardDetails = ref(structuredClone(toRaw(props.cardDetails)))

watch(props, () => {
  cardDetails.value = structuredClone(toRaw(props.cardDetails))
})

const formSubmit = () => {
  emit('submit', cardDetails.value)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 580"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-5 pa-sm-8">
      <!-- 👉 Title -->
      <VCardItem class="text-center">
        <VCardTitle class="text-h3 font-weight-medium mb-3">
          {{ props.cardDetails.name ? 'Edit Card' : 'Add New Card' }}
        </VCardTitle>
        <p class="mb-0">
          {{ props.cardDetails.name ? 'Edit your saved card details' : 'Add your saved card details' }}
        </p>
      </VCardItem>

      <VCardText class="pt-6">
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- 👉 Card Number -->
            <VCol cols="12">
              <AppTextField
                v-model="cardDetails.number"
                label="Card Number"
                placeholder="1234 1234 1234 1234"
                type="number"
              />
            </VCol>

            <!-- 👉 Card Name -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="cardDetails.name"
                label="Name"
                placeholder="Fatimah Alzahrani"
              />
            </VCol>

            <!-- 👉 Card Expiry -->
            <VCol
              cols="6"
              md="3"
            >
              <AppTextField
                v-model="cardDetails.expiry"
                label="Expiry Date"
                placeholder="MM/YY"
              />
            </VCol>

            <!-- 👉 Card CVV -->
            <VCol
              cols="6"
              md="3"
            >
              <AppTextField
                v-model="cardDetails.cvv"
                type="number"
                label="CVV Code"
                placeholder="123"
              />
            </VCol>

            <!-- 👉 Card Primary Set -->
            <VCol cols="12">
              <VSwitch
                v-model="cardDetails.isPrimary"
                label="Set as primary card"
              />
            </VCol>

            <!-- 👉 Card actions -->
            <VCol
              cols="12"
              class="text-center"
            >
              <VBtn
                class="me-3"
                type="submit"
                @click="formSubmit"
              >
                Submit
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                @click="$emit('update:isDialogVisible', false)"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
