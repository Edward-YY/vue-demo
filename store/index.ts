// index.vue
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const actorName = ref('')
const router = useRouter()
const store = useStore()

function confirmName() {
  if (actorName.value) {
    store.commit('setActorName', actorName.value)
    router.push({ name: 'loading' })
  }
}
</script>

