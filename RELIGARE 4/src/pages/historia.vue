<template>
  <div id="historia" class="q-pa-lg">
    <q-timeline :layout="layout" :side="side" color="secondary">
      <q-timeline-entry heading>Nossa História</q-timeline-entry>

      <q-timeline-entry
        title="O Começo"
        subtitle="Março, 2020"
        side="left"
      >
        <div>
         A ideia surge em um brainstorm realizado no ano de 2020, precisamente no mês de março, em meio a dolorosa pandemia da covid 19. Queríamos algo de extrema simplicidade que desse às pessoas apoio, força, conforto, mesmo sem saber como faríamos isso ao certo; já tínhamos perdido muito da liberdade, alguns a renda e a sanidade sem falar das 34.954 mortes (esses são os números até o momento em que escrevo esse relato no dia 05/06/2020). Só tivemos um caminho que possibilitasse essa contribuição: a fé.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Pandemia"
        subtitle="Março , 2020"
        side="right"
        icon="outlet"
      >
        <div>
           No ano de 2020, a população mundial foi pega de surpresa pela crescente proliferação do Covid-19 aonde se tornou um dos maiores desafios de sobrevivência da humanidade. O crescimento dessa pandemia ocasionou na mudança das atividades globais e forma de viver das pessoas.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>Maio, 2020</q-timeline-entry>

      <q-timeline-entry
        title="Isolamento social"
        subtitle="Maio, 2020"
        side="left"
      >
        <div>
        Uma das medidas que foram tomadas para conter a proliferação do vírus foi o isolamento social, uma paralisação em grande parte das atividades de um país como paralisação dos torneios de futebol, cancelamento de show, fechamento de grande parte do comércio e impedimento de cerimônias ou reuniões religiosas.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Fechamentos das igrejas"
        side="right"
      >
        <div>
          Sabemos que ainda hoje o catolicismo é a religião mais predominante do mundo, no Brasil não é diferente. Devido ao avanço da pandemia as igrejas tiveram que fechar as portas para evitar a contaminação dos fieis, fazendo o uso da tecnologia para transmissão de suas missas ao vivo por meio da internet.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Solução da religare"
        side="left"
        color="orange"
        icon="emoji_objects"
      >
        <div>
          Pensando numa forma de trazer a interatividade para os membros da igreja católica por meio de uma plataforma que disponibiliza conteúdos religiosos e multimídia, foi que surgiu o Religare CNT. Por motivos de prevenção as igrejas fecharam suas portas, mas apenas fisicamente, pois continuaram com a transmissão de suas missas pela internet. A Religare Cnt tem como principal pretensão possibilitar a interação dos membros da Igreja Católica com os demais membros dessa comunidade e também disponibilizar conteúdos multimídia, tentando aproximar essas pessoas de sua rotina o mais próximo do normal.
        </div>
      </q-timeline-entry><br>

      <q-timeline-entry
        title="Fale conosco"
        side="right"
        icon="mail_outline"
      >
        <div>
          Em caso de dúvidas, sugestões, reclamações ou caso queira propor parcerias de divulgação ou projetos. Contate-nos através do desse email :
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script>
export default {
  data () {
    return {
      layout: 'dense',
      side: 'right'
    }
  }
}
</script>
