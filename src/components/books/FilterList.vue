<template>
    <div class="filter">
        <div class="filter__categories">
            <div class="filter__category">
                Жанры
                <div class="filter__subcategories">
                    <div class="filter__subcategory" v-for="jenre in jenres" @click="selectJenre(jenre.title)"
                        :class="{ 'selected': jenre.title === this.selectedJenre }">
                        {{ jenre.title }}
                    </div>
                </div>
            </div>
            <!-- <li class="filter__category">
            Авторы
            <ul class="filter__subcategories">
              <li class="filter__subcategory">Пушкин</li>
              <li class="filter__subcategory">Толстой</li>
            </ul>
          </li> -->
        </div>
    </div>
</template>

<script >
import { mapMutations, mapState } from 'vuex';

export default {
    name: "FilterList",
    props: {
        jenres: {
            type: Array,
            required: true
        }
    },
    methods: {
        ...mapMutations({
            setSelectedJenre: "SET_SELECTED_JENRE"
        }),
        selectJenre(jenre) {
            console.log(this.selectedJenre)
            jenre === this.selectedJenre ? this.setSelectedJenre("") : this.setSelectedJenre(jenre)
        }
    },
    computed: {
        ...mapState({
            selectedJenre: state => state.book.selectedJenre
        })
    }
}
</script>

<style scoped>
* {
    list-style-type: none;
}

.filter {
    width: 150px;
    display: flex;
}

.filter__categories {
    width: 100%;
    font-size: 16px;
}

.filter__category {
    padding: 10px;
}

.filter__subcategories {
    font-size: 13px;
}

.filter__subcategory {
    padding: 5px;
    border-radius: 5px;
}

.filter__subcategory:hover {
    background: lightgrey;
}

.filter__subcategory:active {
    background: grey;
    opacity: 0.7;
    transform: scale(0.9);
}

.selected {
    background: lightgrey;
    font-weight: 700;
}
</style>