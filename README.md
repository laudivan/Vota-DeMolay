![Guardiões Templários do Grande Lago](/doc/gtgl.png)

# Vota DeMolay do Capítulo Guardiões Templários do Grande Lago

Pequeno aplicativo feito em HTML5 + Javascript para ajudar ao Capítulo Guardiões Templários do Grande Lago, número 943 do Supremo Conselho da Ordem DeMolay para 
a República Federativa do Brasil, patrocinado pela Loja Maçônica Lago das Acácias e jurisdicionado ao Supremo Conselho da Ordem DeMolay para a Bahia, a 
realizar a eleição de sua diretoria semestral.

## Como usar

Para utilizar o aplicativo você deve 
1. Alterar:
 - o logotipo do capítulo em img/logo.svg, ou a referencia nos arquivos 
 [index.html](/src/index.html) e [resultado.html](/src/resultado.html);
 - a lista de votantes no arquivo [votantes.js](/src/js/votantes.js);
 - a lista de candidatos no arquivo [candidatos.js](/src/js/candidatos.js). 
1. salvar as fotos dos candidatos, em formato jpg, na pasta [img/candidatos](/src/img/candidatos/), nomeadas com o ID DeMolay e a extensão
*.jpg*, por exemplo: *12345.jpg*. 
1. Copiar a pasta do Vota DeMolay para um computador, ou tablet, que será usado como cabine de votação.

### Observações:
* Cada DeMolay poderá candidatar-se a mais de um cargo, mas o eleitor só pode escolher cada candidato para um único cargo.
* Este aplicativo não funciona em rede pois foi pensando para o uso de uso de um único dispositvo como cabine de votação e posterior verificação do resultado.
* Para uma nova votação será necessária a limpeza do localStorage no navegador usado referente ao aplicativo usando as ferramentas de desenvolvedor (F12).

## Recursos para serem implementados

- [ ] Incluir o botão CORRGIGE na página de confirmação do voto;
- [ ] Implementar avisos sonoro para a confirmação da eleção de candidato por cargo;
- [ ] Implementar aviso sonoro para a confirmação do voto;
- [ ] Implementar a seleção de cargos para a votação;
- [ ] Tratamenta empates no painel de resultado.

## Softwares e frameworks utilizados

- [NodeJs](https://nodejs.org);
- [JQuery](https://jquery.org/);
- [Bootstrap](https://getbootstrap.com/);
- [Inkscape](https://inkscape.org/);
- [Gimp](https://www.gimp.org/);
- [Gnome Builder]().

## O que você pode fazer com o Vota DeMolay?

Todo os arquivos criados por este projeto estão sobre a licença GNU v3 que pode ser lida na íntegra em [doc/gplv3.md](/src/doc/gplv3.md), com exeção dos 
listados a seguir:
- as imagens [cabure.1.svg](/src/img/cabure.1.svg), [cabure.2.svg](/src/img/cabure.2.svg) e [logo.svg](/src/img/logo.svg), estão licenciadas segundo a Creative Commons 
Atribuição-CompartilhaIgual 4.0 Internacional. Para ver uma cópia desta licença, visite http://creativecommons.org/licenses/by-sa/4.0/ ;
- as fotos dos candidatos na pasta (img/candidatos)[/src/img/candidatos/] são meramente ilustrativas e foram autorizadas pelos fotogrados para uso exclusivo neste repositório;
- os frameworks, e seus arquivos, na pasta (src/node_modules)[/src/node_modules/] possuem licença própria dos projetos que os produziram.

## O autor e o capítulo

Se quiser saber mais sobre o capítulo, ou o autor, visite-nos nos links e siga-nos em nossas redes sociais abaixo:
* (Página oficial do GTGL)[http://gtgl.lagodasacacias.org];
* (GTGL no Instagram)[https://www.instagram.com/gtgl943/];
* (GTGL no Facebook)[https://www.facebook.com/gtgl943];
* (Blog Laudivan.Info)[http://laudivan.info];
* (tio Laudivan no Instagram)[https://www.instagram.com/vanlivre/];
* (tio Laudivan no Facebook)[https://www.facebook.com/laudivan];
* (tio Laudivan no Twitter)[https://twitter.com/vanlivre].
