<template>
    <v-scaff>
        <v-scaff-sidebar>
            <template v-slot:v_scaff_sidebar_content>
                <ul class="sidebar-nav">
                    <v-scaff-sidebar-r-link
                        label="Dashboard"
                        icon="dashboard"
                        :to="{ name: 'dashboard' }"
                    />
                    <v-scaff-sidebar-r-link
                        label="Buttons"
                        icon="vertical-distribution-center"
                        :to="{ name: 'buttons-view' }"
                    />
                    <v-scaff-sidebar-r-link
                        label="Forms"
                        icon="envelope-info"
                        :to="{ name: 'forms-view' }"
                    />
                    <v-scaff-sidebar-r-link
                        label="Cards"
                        icon="postcard"
                        :to="{ name: 'cards-view' }"
                    />
                </ul>
            </template>
        </v-scaff-sidebar>
        <v-scaff-main> </v-scaff-main>
    </v-scaff>
</template>
