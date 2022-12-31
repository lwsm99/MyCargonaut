<template>
    <v-container align="center">
        <v-card class="profile-container" rounded="4" color="whitesmoke">
            <v-row justify="center" align="center">
                <v-col cols="6">
                    <div style="display: flex; justify-content: center; align-items: center;" class="profile-pic-name">
                        <v-avatar size="200px" class="ma-8">
                            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                        </v-avatar>
                        <h1 style="margin-left: 10px">Mark Mustermann</h1>
                    </div>
                </v-col>
                <v-col cols="6">
                    <v-icon class="mx-2" icon="fas fa-star" color="orange" size="large"/>
                    <v-icon class="mx-2" icon="fas fa-star" color="orange" size="large"/>
                    <v-icon class="mx-2" icon="fas fa-star" color="orange" size="large"/>
                    <v-icon class="mx-2" icon="fas fa-star" color="orange" size="large"/>
                    <v-icon class="mx-2" icon="fas fa-star" color="orange" size="large"/>
                </v-col>
            </v-row>
            <v-row class="bottom-row">
                <v-col cols="6">
                    <v-card class="ma-4" color="grey" rounded="4" width="90%" elevation="0">
                        <v-card-title class="my-4">Meine Kommentare</v-card-title>
                        <!-- TODO: as many rows as comments -->
                        <v-row class="mx-4 mb-4" align="center">
                            <v-col cols="2">
                                <v-avatar size="60px">
                                    <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col cols="10">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
                                    aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nisl nunc in elit. Sed
                                    euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nisl nunc
                                    in elit.
                                </p>
                            </v-col>
                        </v-row>
                        <v-row class="mx-4 mb-4" align="center">
                            <v-col cols="2">
                                <v-avatar size="60px">
                                    <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col cols="10">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
                                    aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nisl nunc in elit. Sed
                                    euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nisl nunc
                                    in elit.
                                </p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card class="ma-4" color="grey" rounded="4" width="90%" elevation="0">
                        <v-card-title class="my-4">Meine Autos</v-card-title>
                        <v-row>
                            <v-col cols="4">
                                <v-img
                                class="car-image my-4"
                                aspect-ratio="1"
                                width="60%"
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                cover
                                />
                            </v-col>
                            <v-col cols="4">
                                <v-img
                                class="car-image my-4"
                                aspect-ratio="1"
                                width="60%"
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                cover
                                />
                            </v-col>
                            <v-col cols="4">
                                <v-img
                                class="car-image my-4 mb-10"
                                aspect-ratio="1"
                                width="60%"
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                cover
                                />
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>

</template>

<script lang="ts" setup>
</script>

<style scoped>
.profile-container {
    max-width: 1300px;
    margin-top: 9vh;
}

.profile-pic-name {
    display: flex;
    align-items: center;
}

.car-image {
    margin: 10px;
    border-radius: 10px;
}
</style>