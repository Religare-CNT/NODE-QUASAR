<template>
  <div class="column no-wrap flex-center">
    <div class="q-gutter-y-md " style="max-width: 900px;"><br>
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3 text-grey-7"
          active-color="primary"
          indicator-color="purple"
          align="justify"
        >
          <q-tab name="mails" label="1ª leitura " />
          <q-tab name="alarms" label="Salmo" />
          <q-tab name="movies" label="Evangelho" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="bg-indigo-4 text-white">
          <q-tab-panel name="mails">
            <div style="font-family: arial;" class="text-h6">Primeira Leitura (Is 11,1-10)</div>
            <p>Leitura do Livro do Profeta Isaías.</p>
             Naquele dia, 1nascerá uma haste do tronco de Jessé e, a partir da raiz, surgirá o rebento de uma flor; 2sobre ele repousará o Espírito do Senhor: espírito de sabedoria e discernimento, espírito de conselho e fortaleza, espírito de ciência e temor de Deus; 3no temor do Senhor, encontra ele seu prazer. Ele não julgará pelas aparências que vê nem decidirá somente por ouvir dizer; 4mas trará justiça para os humildes e uma ordem justa para os homens pacíficos; fustigará a terra com a força da sua palavra e destruirá o mau com o sopro dos lábios. 5Cingirá a cintura com a correia da justiça e as costas com a faixa da fidelidade. 6O lobo e o cordeiro viverão juntos, e o leopardo deitar-se-á ao lado do cabrito; o bezerro e o leão comerão juntos, e até mesmo uma criança poderá tangê-los. 7A vaca e o urso pastarão lado a lado, enquanto suas crias descansam juntas; o leão comerá palha como o boi; 8a criança de peito vai brincar em cima do buraco da cobra venenosa; e o menino desmamado não temerá pôr a mão na toca da serpente. 9Não haverá danos nem mortes por todo o meu santo monte: a terra estará tão repleta do saber do Senhor quanto as águas que cobrem o mar. 10Naquele dia, a raiz de Jessé se erguerá como um sinal entre os povos; hão de buscá-la as nações, e gloriosa será a sua morada.- Palavra do Senhor.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Salmo Responsorial (Sl 71)</div>
               <p>— Nos seus dias, a justiça florirá; paz em abundância, para sempre.</p>

              <p> — Nos seus dias, a justiça florirá; paz em abundância, para sempre.</p>

               <p>— Dai ao Rei vossos poderes, Senhor Deus, vossa justiça ao descendente da realeza! Com justiça ele governe o vosso povo, com equidade ele julgue os vossos pobres.</p>

               <p>— Nos seus dias, a justiça florirá e grande paz até que a lua perca o brilho! De mar a mar estenderá o seu domínio, e desde o rio até os confins de toda a terra!</p>

               <p>— Libertará o indigente que suplica, e o pobre ao qual ninguém quer ajudar. Terá pena do indigente e do infeliz, e a vida dos humildes salvará.</p>

               — Seja bendito o seu nome para sempre! E que dure como o sol sua memória! Todos os povos serão nele abençoados, todas as gentes cantarão o seu louvor!
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Evangelho (Lc 10,21-24)</div>
            <p>— O Senhor esteja convosco.</p>
            <p>— Ele está no meio de nós.</p>
            <p>— PROCLAMAÇÃO do Evangelho de Jesus Cristo + segundo Lucas. </p>
            <p>— Glória a vós, Senhor.</p>
            21Naquele momento, Jesus exultou no Espírito Santo e disse: “Eu te louvo, Pai, Senhor do céu e da terra, porque escondeste essas coisas aos sábios e inteligentes, e as revelaste aos pequeninos. Sim, Pai, porque assim foi do teu agrado. 22Tudo me foi entregue pelo meu Pai. Ninguém conhece quem é o Filho, a não ser o Pai; e ninguém conhece quem é o Pai, a não ser o Filho e aquele a quem o Filho o quiser revelar”. 23Jesus voltou-se para os discípulos e disse-lhes em particular: “Felizes os olhos que veem o que vós vedes! 24Pois eu vos digo que muitos profetas e reis quiseram ver o que estais vendo, e não puderam ver; quiseram ouvir o que estais ouvindo, e não puderam ouvir”.
            <p>— Palavra da Salvação.</p>
            <strong>— Glória a vós, Senhor.</strong>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
