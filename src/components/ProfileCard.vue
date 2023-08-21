<template >
    <v-card
        class="d-flex align-center pa-4"
        max-width="800"
        max-height="250"
    >
        <div class="d-flex flex-no-wrap align-center">
            <v-avatar
            class="ma-3"
            size="200"
            rounded="0"
            >
                <v-img src="./../../public/megrass.jpeg"></v-img>
            </v-avatar>
            <div 
>
            <div style="height: 150px; overflow: scroll;">
                <v-card-title style="margin-bottom:-8px;">Lilly Lee</v-card-title>
                <v-card-subtitle style="margin-bottom:-8px">Full-stack Software Engineer // Harvey Mudd College, Co 2024</v-card-subtitle> 
                <v-card-text>
                    I'm a CS major at HMC looking for full-time opportunities! My specialty is webdev, including UI/UX design, frameworks, and creating backend services; however, I'm quick at picking up material on my own and take the initiative to learn new things (ex. creating programming languages & game dev). I'm also skilled at managing people from my various leadership experiences, and I enjoy staying organized with agile methodologies and my trusty calendar, so if you need someone on top of her stuff (and emails), reach out!              
                </v-card-text>
                </div>
                <v-container>
                    <a href="./../../public/LillianLeeResume.pdf" download="Lillian_Lee_Resume">
                    <v-btn class = "mr-4" style="color:black;">
                        Resume
                    </v-btn>
                    </a>
                    <v-btn style="color:black;">lglee@hmc.edu</v-btn>
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
