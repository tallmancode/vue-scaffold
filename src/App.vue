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
                        label="Forms"
                        icon="envelope-info"
                        :to="{ name: 'forms-view' }"
                    />
                </ul>
            </template>
        </v-scaff-sidebar>
        <v-scaff-main> </v-scaff-main>
    </v-scaff>
</template>
