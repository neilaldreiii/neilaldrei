<template>
    <div class="app-timeline">
        <div class="timeline">
            <header>
                <h1>Education</h1>
            </header>
            <div class="timeline-item" v-for="edu in educations" :key="edu.index">
                <div class="date">
                    <h3>{{ edu.date }}</h3>
                </div>
                <div class="description">
                    <h1>
                        {{ edu.school }}
                    </h1>
                    <p class="school">
                        {{ edu.degree }}
                    </p>
                    <p>
                        {{ edu.location }}
                    </p>
                </div>
            </div>
            <header>
                <h1>Experience</h1>
            </header>
            <div class="timeline-item" v-for="exp in experience" :key="exp.index">
                <div class="date">
                    <h3>{{ exp.date }}</h3>
                </div>
                <div class="description">
                    <h1>
                        {{ exp.company }}
                    </h1>
                    <p>
                        {{ exp.position }}
                    </p>
                    <p>
                        {{ exp.location }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "timeline",
    data() {
        return {
            educations: [
                {
                    school: "University Of Nueva Caceres",
                    date: "2016 - 2017",
                    degree: "Bachelor of Science in Information Technology",
                    location: "Naga City, Camarines Sur, PH"
                },
                {
                    school: "STI College",
                    date: "2012 - 2015",
                    degree: "Bachelor of Science in Information Technology",
                    location: "Naga City, Camarines Sur, PH"
                },
                {
                    school: "Naga College Foundation",
                    date: "2011 - 2012",
                    degree: "Bachelor Of Science in Criminology",
                    location: "Naga City, Camarines Sur, PH"
                },
                {
                    school: "Naga College Foundation",
                    date: "2007 - 2011",
                    degree: "High School",
                    location: "Naga City, Camarines Sur, PH"
                },
                {
                    school: "Naga Central School I",
                    date: "2001 - 2007",
                    degree: "Elementary",
                    location: "Naga City, Camarines Sur, PH"
                }
            ],
            experience: [
                {
                    company: "Freelancer",
                    date: "Jan 2018 - Present",
                    position: "Full Stack Web Developer",
                    location: "Naga City, Camarines Sur, PH"
                },
                {
                    company: "JTTNet",
                    date: "2015 - Present",
                    position: "Data Encoder",
                    location: "Naga City, Camarines Sur, PH"
                }
            ]
        }
    }
}
</script>

<style scoped>
.date h3{
    font-family: sans-serif;
}

</style>