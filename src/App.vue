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
  <BtnEdit title-thor="thor" />
  <btn-edit :title-thor="titleThor"></btn-edit>
  <Input v-model:input="data.nama" :value="data.nama" />
  <Input v-model:input="data.kelas" :value="data.kelas" />
  <BtnSubmit @click-tambah="addKelas" v-if="!isEdit" />
  <button @click="Update(data.id)" v-if="isEdit">Edit kelas</button>
  <table>
    <tr>
      <th>Nama</th>
      <th>Kelas</th>
    </tr>
    <tr v-for="item in Datakelas">
      <td>{{ item.nama }}</td>
      <td>{{ item.kelas }}</td>
      <td>
        <BtnDelete @Delete-event="Delete" :id="item.id" />
        <button @click="Edit(item.id)">Edit</button>
      </td>
    </tr>
  </table>
  <br>
  <br>
  <br>
  <BtnThor @getId="GetId" :edit="isEdit" id="1" name="radit"></BtnThor>
  {{ id }}
  <Test></Test>
  <Test />
  <br>

  <Button name="zaen"></Button>
  <p>-------------</p>
  <br>
  <br>
  <!-- <Inputan v-model:inputan="nama" name="nama" id="nama" class="border"></Inputan>
  {{ nama }} -->
  <Card>
    <template v-slot:button>
      <button>Thor</button>
    </template>
  </Card>
</template>
<script>
import BtnThor from '@/components/BtnThor.vue';
import Test from '@/component-test/Test.vue';
import Button from '@/components/Button.vue';
import Inputan from '@/components/Inputan.vue';
import Card from '@/components/Card.vue';

import BtnEdit from '@/components/BtnEdit.vue';
import BtnDelete from '@/components/BtnDelete.vue';
import BtnSubmit from '@/components/BtnSubmit.vue';
import Input from '@/components/Input.vue';
export default {
  provide: {
    nama: 'thor'
  },
  components: {
    Card,
    Inputan,
    Test,
    Button,
    BtnThor,
    BtnEdit,
    'btn-edit': BtnEdit,
    BtnDelete,
    BtnSubmit,
    Input
  },
  data() {
    return {
      titleThor: 'thoran',
      Datakelas: [{ id: Date.now(), nama: 'thor', kelas: 'XB' }],
      data: {
        id: '',
        nama: '',
        kelas: ''
      },
      id: 0,
      nama: 'farhan',
      isEdit: true
    }
  },
  methods: {
    GetId(id, id2) {
      this.id += id2;
      this.nama = 'thor';
    },
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

<style scoped>
.border {
  border: 1px solid black;
}
</style>