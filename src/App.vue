<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<template>
  <Button-thor text="Thwwor"></Button-thor>

  <input type="text" v-model="data.nama">
  <input type="text" v-model="data.kelas">
  <button @click="addKelas" v-if="!isEdit">Tambah kelas</button>
  <button @click="Update(data.id)" v-if="isEdit">Edit kelas</button>
  <table>
    <tr>
      <th>Nama</th>
      <th>Kelas</th>
    </tr>
    <tr v-for="item in Datakelas">
      <td>{{ item.nama }}</td>
      <td>{{ item.kelas }}</td>
      <td><button @click="Delete(item.id)">Hapus</button>
        <button @click="Edit(item.id)">Edit</button>
      </td>
    </tr>
  </table>
</template>
<script>
import Btn from '@/Btn.vue';
export default {
  components: {
    'Button-thor': Btn
  },
  data() {
    return {
      Datakelas: [{ id: Date.now(), nama: 'thor', kelas: 'XB' }],
      data: {
        id: '',
        nama: '',
        kelas: ''
      },
      isEdit: false
    }
  },
  methods: {
    addKelas() {
      this.data.id = Date.now();

      this.Datakelas.push(this.data);
      this.data = {
        nama: '',
        kelas: ''
      }
    },
    Delete(id) {
      const filter = this.Datakelas.filter(item => item.id != id);
      this.Datakelas = filter;
    },
    Edit(id) {
      this.isEdit = true;
      const filter = this.Datakelas.filter(item => item.id == id);
      this.data = {
        id: filter[0].id,
        nama: filter[0].nama,
        kelas: filter[0].kelas,
      }
    },
    Update(id) {
      const filter = this.Datakelas.filter(item => item.id != id);
      filter.push(this.data);
      this.Datakelas = filter;
      this.data = {
        id: null,
        nama: null,
        kelas: null,
      }
      this.isEdit = false;
    }
  }
}
</script>