<template >
    <v-card
        class="d-flex align-center pa-4"
    >
        <div class="d-flex flex-no-wrap align-center">
            <v-avatar
            class="ma-3"
            size="200"
            rounded="0"
            >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
            </v-avatar>
            <div>
                <v-card-title>Lilly Lee</v-card-title>
                <v-card-subtitle>Full-stack Software Engineer</v-card-subtitle>
                <v-card-text>A CS major at Harvey Mudd College, Class of 2024</v-card-text>
                <v-container>
                    <v-btn class = "mr-4">Resume</v-btn>
                    <v-btn>lglee@hmc.edu</v-btn>
                </v-container>
            </div>

        </div>
    </v-card>
</template>

<script>
export default {
    name: "ProfileCard",

}
</script>

<style scoped>
    .v-card{
        background-color: #15131F;
        color: white;
    }
    .v-btn{
        background-color: #4DD6BD;
    }
</style>
