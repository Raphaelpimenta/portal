import React from "react";
// import { Dropdown } from 'semantic-ui-react'
// import Lista from "./filtroLista";

const options = [
    {
        "id": "141",
        "nome": "Todas as unidades"
      },
      {
        "id": "select2-filtroUnidades-result-m7nv-23",
        "nome": "101 : Escola SENAI - Brás - Roberto Simonsen"
      },
      {
        "id": "select2-filtroUnidades-result-gbat-24",
        "nome": "102 : Escola SENAI - Vila Alpina - Humberto Reis Costa"
      },
      {
        "id": "select2-filtroUnidades-result-jklj-25",
        "nome": "103 : Escola SENAI - Mooca - Morvan Figueiredo"
      },
      {
        "id": "select2-filtroUnidades-result-h0qm-26",
        "nome": "105 : Escola SENAI - Barra Funda - Horácio Augusto da Silveira"
      },
      {
        "id": "select2-filtroUnidades-result-vv89-27",
        "nome": "106 : Escola SENAI - Vila Leopoldina - Mariano Ferraz"
      },
      {
        "id": "select2-filtroUnidades-result-eqse-28",
        "nome": "107 : Escola SENAI - Brás (Têxtil) - Francisco Matarazzo"
      },
      {
        "id": "select2-filtroUnidades-result-qwe3-30",
        "nome": "108 : Escola SENAI - Ipiranga (Refrigeração) - Oscar Rodrigues Alves"
      },
      {
        "id": "select2-filtroUnidades-result-xysl-32",
        "nome": "109 : Escola SENAI - Vila Mariana - Anchieta"
      },
      {
        "id": "select2-filtroUnidades-result-r6t6-34",
        "nome": "110 : Escola SENAI - destinada a Biotecnologia e Instituto SENAI de Inovação em Biotecnologia"
      },
      {
        "id": "select2-filtroUnidades-result-gmi2-36",
        "nome": "111 : Escola SENAI - Tatuapé (Construção Civil) - Orlando Laviero Ferraiuolo"
      },
      {
        "id": "select2-filtroUnidades-result-elda-37",
        "nome": "112 : Escola SENAI - Santo Amaro (Ary Torres) - Ary Torres"
      },
      {
        "id": "select2-filtroUnidades-result-qbsy-39",
        "nome": "113 : Escola SENAI - Ipiranga (Automobilística) - Conde José Vicente Azevedo"
      },
      {
        "id": "select2-filtroUnidades-result-sbbi-41",
        "nome": "114 : Escola SENAI - Mooca (Gráfica) - Theobaldo De Nigris"
      },
      {
        "id": "select2-filtroUnidades-result-d5dk-42",
        "nome": "115 : Escola SENAI - Santo Amaro ( Suíço-Brasileira) - Paulo Ernesto Tolle"
      },
      {
        "id": "select2-filtroUnidades-result-bhtw-43",
        "nome": "116 : Escola SENAI - São Bernardo do Campo (Mario Amato) - Mario Amato"
      },
      {
        "id": "select2-filtroUnidades-result-v6cr-44",
        "nome": "117 : Escola SENAI - Mogi Das Cruzes - Nami Jafet"
      },
      {
        "id": "select2-filtroUnidades-result-wq4g-45",
        "nome": "118 : Escola SENAI - Santo André - A. Jacob Lafer"
      },
      {
        "id": "select2-filtroUnidades-result-trod-46",
        "nome": "119 : Escola SENAI - Osasco - Nadir Dias de Figueiredo"
      },
      {
        "id": "select2-filtroUnidades-result-nekh-47",
        "nome": "120 : Escola SENAI - São Bernardo do Campo (Tamandaré + Volkswagen) - Almirante Tamandaré"
      },
      {
        "id": "select2-filtroUnidades-result-xq3r-48",
        "nome": "121 : Escola SENAI - Cambuci (Pasquale) - Carlos Pasquale"
      },
      {
        "id": "select2-filtroUnidades-result-kyrz-49",
        "nome": "122 : Escola SENAI - Guarulhos - Hermenegildo Campos de Almeida"
      },
      {
        "id": "select2-filtroUnidades-result-wq34-50",
        "nome": "123 : Escola SENAI - Santana - João Martins Coube"
      },
      {
        "id": "select2-filtroUnidades-result-gfeg-51",
        "nome": "124 : Escola SENAI - Taubaté - Roberto Simonsen"
      },
      {
        "id": "select2-filtroUnidades-result-wtjy-52",
        "nome": "125 : Escola SENAI - Ribeirão Preto - Miguel Abdalla"
      },
      {
        "id": "select2-filtroUnidades-result-hgt3-53",
        "nome": "126 : Escola SENAI - Piracicaba - Antonio Adolpho Lobbe"
      },
      {
        "id": "select2-filtroUnidades-result-rhjw-54",
        "nome": "127 : Escola SENAI - Campinas - Celso Charuri"
      },
      {
        "id": "select2-filtroUnidades-result-rqt3-55",
        "nome": "128 : Escola SENAI - Sorocaba - Oduvaldo Cacilda"
      },
      {
        "id": "select2-filtroUnidades-result-oyir-56",
        "nome": "129 : Escola SENAI - Americana - Orlando Laviero Ferraiuolo"
      },
      {
        "id": "select2-filtroUnidades-result-ytjg-57",
        "nome": "130 : Escola SENAI - Botucatu - Carlos Pasquale"
      },
      {
        "id": "select2-filtroUnidades-result-dhdr-58",
        "nome": "131 : Escola SENAI - São Carlos - Egídio Martins"
      },
      {
        "id": "select2-filtroUnidades-result-sfeg-59",
        "nome": "132 : Escola SENAI - Marília - João Martins Coube"
      },
      {
        "id": "select2-filtroUnidades-result-svbr-60",
        "nome": "133 : Escola SENAI - Ourinhos - João Martins Coube"
      },
      {
        "id": "select2-filtroUnidades-result-tyio-61",
        "nome": "134 : Escola SENAI - Bauru - João Martins Coube"
      },
      {
        "id": "select2-filtroUnidades-result-xcr3-62",
        "nome": "135 : Escola SENAI - Catanduva - Sylvio de Mattos Carvalho"
      },
      {
        "id": "select2-filtroUnidades-result-jkiw-63",
        "nome": "136 : Escola SENAI - São José do Rio Preto - João Borges Nogueira"
      },
      {
        "id": "select2-filtroUnidades-result-rhji-64",
        "nome": "137 : Escola SENAI - Araçatuba - João Martins Coube"
      },
      {
        "id": "select2-filtroUnidades-result-nbwe-65",
        "nome": "138 : Escola SENAI - Ribeirão Preto (Francisco Garcia) - Francisco Garcia"
      },
      {
        "id": "select2-filtroUnidades-result-gmdr-66",
        "nome": "139 : Escola SENAI - Presidente Prudente - Firmino Rocha de Freitas"
      },
      {
        "id": "select2-filtroUnidades-result-jkew-67",
        "nome": "140 : Escola SENAI - Jaú - Antonio Adolpho Lobbe"
      },
      {
        "id": "select2-filtroUnidades-result-hnmk-68",
        "nome": "141 : Escola SENAI - Lins - João Batista de Lima Figueiredo"
      },
      {
        "id": "select2-filtroUnidades-result-yuir-69",
        "nome": "142 : Escola SENAI - Santos - Alvares Carvalho Junior"
      },
      {
        "id": "select2-filtroUnidades-result-bvnm-70",
        "nome": "143 : Escola SENAI - São Vicente - Doutor José da Costa Moreira"
      },
      {
        "id": "select2-filtroUnidades-result-wtcr-71",
        "nome": "144 : Escola SENAI - Votuporanga - João Albertini"
      },
      {
        "id": "select2-filtroUnidades-result-lknm-72",
        "nome": "145 : Escola SENAI - Franca - Sérgio Paschoal"
      },
      {
        "id": "select2-filtroUnidades-result-fder-73",
        "nome": "146 : Escola SENAI - São João da Boa Vista - Gastão Vidigal"
      },
      {
        "id": "select2-filtroUnidades-result-tgbv-74",
        "nome": "147 : Escola SENAI - São Caetano do Sul - Humberto Reis Costa"
      },
      {
        "id": "select2-filtroUnidades-result-mjuw-75",
        "nome": "148 : Escola SENAI - Cubatão - Carlos de Campos"
      },
      {
        "id": "select2-filtroUnidades-result-qrtm-76",
        "nome": "149 : Escola SENAI - Guarujá - Vitor Meireles"
      },
      {
        "id": "select2-filtroUnidades-result-dcji-77",
        "nome": "150 : Escola SENAI - Diadema - Professor Fausto Mazzola"
      },
      {
        "id": "select2-filtroUnidades-result-jkir-78",
        "nome": "151 : Escola SENAI - Taboão da Serra - Euvaldo Lodi"
      },
      {
        "id": "select2-filtroUnidades-result-jhnb-79",
        "nome": "152 : Escola SENAI - Osasco (Ettore Zanini) - Ettore Zanini"
      },
      {
        "id": "select2-filtroUnidades-result-12gh-80",
        "nome": "153 : Escola SENAI - São Bernardo do Campo (Eng. José Leite Pinheiro Júnior) - Eng. José Leite Pinheiro Júnior"
      },
      {
        "id": "select2-filtroUnidades-result-64ty-81",
        "nome": "154 : Escola SENAI - Mauá - Armando de Arruda Pereira"
      },
      {
        "id": "select2-filtroUnidades-result-gbhy-82",
        "nome": "155 : Escola SENAI - São Caetano do Sul (Luiz Simon) - Luiz Simon"
      },
      {
        "id": "select2-filtroUnidades-result-tgbg-83",
        "nome": "156 : Escola SENAI - São Bernardo do Campo (Suiço-Brasileira Paulo Ernesto Tolle) - Suiço-Brasileira Paulo Ernesto Tolle"
      },
      {
        "id": "select2-filtroUnidades-result-nghw-84",
        "nome": "157 : Escola SENAI - São Paulo (Anchieta) - Roberto Simonsen"
      },
      {
        "id": "select2-filtroUnidades-result-xcgy-85",
        "nome": "158 : Escola SENAI - São Paulo (Marcelo Branco) - Marcelo Branco"
      },
      {
        "id": "select2-filtroUnidades-result-hgfd-86",
        "name": "159 : Escola SENAI - São Paulo (Suíço-Brasileira) - Suíço-Brasileira"
      },
      {
        "id": "select2-filtroUnidades-result-6acd-78",
        "nome": "163 : Escola SENAI - Pirituba - Jorge Mahfuz"
    },
    {
        "id": "select2-filtroUnidades-result-u064-79",
        "nome": "164 : Escola SENAI - Mauá - Jairo Candido"
    },
    {
        "id": "select2-filtroUnidades-result-5q2w-86",
        "nome": "201 : Escola SENAI - Santos - Antonio Souza Noschese"
    },
    {
        "id": "select2-filtroUnidades-result-1k7y-87",
        "nome": "202 : Escola SENAI - Cubatão - Hessel Horácio Cherkassky"
    },
    {
        "id": "select2-filtroUnidades-result-3god-105",
        "nome": "260 : Escola SENAI - Registro"
    },
    {
        "id": "select2-filtroUnidades-result-4612-117",
        "nome": "301 : Escola SENAI - Taubaté - Felix Guisard"
    },
    {
        "id": "select2-filtroUnidades-result-xyha-118",
        "nome": "302 : Escola SENAI - São José Dos Campos - Santos Dumont"
    },
    {
        "id": "select2-filtroUnidades-result-aaoc-120",
        "nome": "303 : Escola SENAI - Jacareí - Luiz Simon"
    },
    {
        "id": "select2-filtroUnidades-result-lomf-140",
        "nome": "360 : Escola SENAI - Pindamonhangaba - Geraldo Alckmin"
    },
    {
        "id": "select2-filtroUnidades-result-mn7m-149",
        "nome": "390 : Escola SENAI - Cruzeiro"
    },
    {
        "id": "select2-filtroUnidades-result-1yu2-154",
        "nome": "401 : Escola SENAI - Ribeirão Preto - Orlando Laviero Ferraiuolo"
    },
    {
        "id": "select2-filtroUnidades-result-d8ju-159",
        "nome": "404 : Escola SENAI - Jaboticabal - João Lúcio M. de Almeida"
    },
    {
        "id": "select2-filtroUnidades-result-fnwo-164",
        "nome": "407 : Escola SENAI - Sertãozinho - Teófilo Macchi"
    },
    {
        "id": "select2-filtroUnidades-result-4arq-169",
        "nome": "410 : Escola SENAI - Franca - Engenheiro Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-yrqc-174",
        "nome": "413 : Escola SENAI - Araraquara - Orlando Laviero Ferraiuolo"
    },
    {
        "id": "select2-filtroUnidades-result-0dhy-179",
        "nome": "416 : Escola SENAI - São Carlos - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-lpjg-184",
        "nome": "419 : Escola SENAI - Taquaritinga - Joaquim Barbosa de Almeida"
    },
    {
        "id": "select2-filtroUnidades-result-l4qf-189",
        "nome": "422 : Escola SENAI - Matão - Orlando Laviero Ferraiuolo"
    },
    {
        "id": "select2-filtroUnidades-result-hqdr-194",
        "nome": "425 : Escola SENAI - Leme - Engº Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-9gzj-199",
        "nome": "428 : Escola SENAI - Rio Claro - Engenheiro Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-4l1z-204",
        "nome": "431 : Escola SENAI - Araras - Engenheiro Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-iz9r-209",
        "nome": "434 : Escola SENAI - Pirassununga - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-38k3-214",
        "nome": "437 : Escola SENAI - Limeira - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-qrlz-219",
        "nome": "440 : Escola SENAI - Mogi Mirim - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-8jqf-224",
        "nome": "443 : Escola SENAI - Amparo - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-yd07-229",
        "nome": "446 : Escola SENAI - Espírito Santo do Pinhal - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-ijja-234",
        "nome": "449 : Escola SENAI - Santa Cruz das Palmeiras - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-d63e-239",
        "nome": "452 : Escola SENAI - Casa Branca - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-npzu-244",
        "nome": "455 : Escola SENAI - Mococa - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-3fyw-249",
        "nome": "458 : Escola SENAI - São João da Boa Vista - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-odvq-254",
        "nome": "461 : Escola SENAI - Mogi Guaçu - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-7r0s-259",
        "nome": "464 : Escola SENAI - São Sebastião da Grama - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-7riw-264",
        "nome": "467 : Escola SENAI - São José do Rio Pardo - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-w4dw-269",
        "nome": "470 : Escola SENAI - Tambaú - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-9om9-274",
        "nome": "473 : Escola SENAI - Porto Ferreira - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-jr2l-279",
        "nome": "476 : Escola SENAI - Boa Esperança do Sul - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-t5ft-284",
        "nome": "479 : Escola SENAI - Três Lagoas - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-jzna-289",
        "nome": "482 : Escola SENAI - Marília - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-mbcv-294",
        "nome": "485 : Escola SENAI - Ourinhos - Engenheiro Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-mbu5-299",
        "nome": "488 : Escola SENAI - Assis - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-pdze-304",
        "nome": "491 : Escola SENAI - Tupã - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-km1n-309",
        "nome": "494 : Escola SENAI - Santa Cruz do Rio Pardo - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-gnrh-314",
        "nome": "497 : Escola SENAI - Lençóis Paulista - Engenheiro Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-rrde-319",
        "nome": "500 : Escola SENAI - Bauru - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-n4ik-324",
        "nome": "503 : Escola SENAI - Lins - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-9avb-329",
        "nome": "506 : Escola SENAI - Jaú - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-g99b-334",
        "nome": "509 : Escola SENAI - Pederneiras - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-r9xr-339",
        "nome": "512 : Escola SENAI - Agudos - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-31do-344",
        "nome": "515 : Escola SENAI - Ibitinga - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-d4gi-349",
        "nome": "518 : Escola SENAI - Macatuba - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-otqw-354",
        "nome": "521 : Escola SENAI - Itapuí - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-42ks-359",
        "nome": "524 : Escola SENAI - Garça - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-9p6l-364",
        "nome": "527 : Escola SENAI - Paraguaçu Paulista - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-yz36-369",
        "nome": "530 : Escola SENAI - Pirajuí - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-5i3z-374",
        "nome": "533 : Escola SENAI - Cafelândia - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-t9al-379",
        "nome": "536 : Escola SENAI - Dois Córregos - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-mzyr-384",
        "nome": "539 : Escola SENAI - Bariri - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-xr9c-389",
        "nome": "542 : Escola SENAI - Igarapava - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-ic3q-394",
        "nome": "545 : Escola SENAI - Pedregulho - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-kd91-399",
        "nome": "548 : Escola SENAI - Orlandia - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-0ccy-404",
        "nome": "551 : Escola SENAI - Morro Agudo - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-ogd2-409",
        "nome": "554 : Escola SENAI - Batatais - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-yip9-414",
        "nome": "557 : Escola SENAI - Patrocínio Paulista - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-xvdy-419",
        "nome": "560 : Escola SENAI - Rifaina - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-16yk-424",
        "nome": "563 : Escola SENAI - Ituverava - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-c0y8-429",
        "nome": "566 : Escola SENAI - Jeriquara - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-1brc-434",
        "nome": "569 : Escola SENAI - São Simão - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-odny-439",
        "nome": "572 : Escola SENAI - Santa Rita do Passa Quatro - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-0a4w-444",
        "nome": "575 : Escola SENAI - Taquaral - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-w3if-449",
        "nome": "578 : Escola SENAI - Guariba - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-t0nb-454",
        "nome": "581 : Escola SENAI - Santa Cruz da Esperança - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-ghwv-459",
        "nome": "584 : Escola SENAI - Luís Antônio - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-6wd3-464",
        "nome": "587 : Escola SENAI - Altinópolis - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-jvlm-469",
        "nome": "590 : Escola SENAI - Santo Antônio da Alegria - Eng. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-koxn-474",
        "nome": "593 : Escola SENAI - São José do Rio Pardo - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-gz0w-479",
        "nome": "596 : Escola SENAI - São Joaquim da Barra - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-z3zm-484",
        "nome": "599 : Escola SENAI - Orlândia - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-tzya-489",
        "nome": "602 : Escola SENAI - Sales Oliveira - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-k2vf-494",
        "nome": "605 : Escola SENAI - São Joaquim da Barra - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-dwvs-499",
        "nome": "608 : Escola SENAI - São Simão - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-2p95-504",
        "nome": "611 : Escola SENAI - Santa Cruz da Esperança - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-e0dx-509",
        "nome": "614 : Escola SENAI - São José da Bela Vista - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-wfx3-514",
        "nome": "617 : Escola SENAI - Itirapuã - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-dv0j-519",
        "nome": "620 : Escola SENAI - São Joaquim da Barra - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-eqjq-524",
        "nome": "623 : Escola SENAI - São José do Rio Pardo - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-t12n-529",
        "nome": "626 : Escola SENAI - Santo Antônio da Alegria - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-oujb-534",
        "nome": "629 : Escola SENAI - Nuporanga - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-h6fi-539",
        "nome": "632 : Escola SENAI - Morro Agudo - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-pf8k-544",
        "nome": "635 : Escola SENAI - Jardinópolis - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-9aob-549",
        "nome": "638 : Escola SENAI - Guará - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-4kpo-554",
        "nome": "641 : Escola SENAI - Guará - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-nkgd-559",
        "nome": "644 : Escola SENAI - Guará - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-rrys-564",
        "nome": "647 : Escola SENAI - Patrocínio Paulista - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-1acj-569",
        "nome": "650 : Escola SENAI - São José do Rio Pardo - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-tmdo-574",
        "nome": "653 : Escola SENAI - Nuporanga - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-pkkw-579",
        "nome": "656 : Escola SENAI - Guará - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-ti6c-584",
        "nome": "659 : Escola SENAI - Patrocínio Paulista - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-qtb7-589",
        "nome": "662 : Escola SENAI - Batatais - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-nxmb-594",
        "nome": "665 : Escola SENAI - São Simão - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-z4d2-599",
        "nome": "668 : Escola SENAI - Altinópolis - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-ynwn-604",
        "nome": "671 : Escola SENAI - Pedregulho - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-awji-609",
        "nome": "674 : Escola SENAI - Jeriquara - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-ykic-614",
        "nome": "677 : Escola SENAI - São Joaquim da Barra - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-jp5k-619",
        "nome": "680 : Escola SENAI - Sales Oliveira - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-sv9w-624",
        "nome": "683 : Escola SENAI - Guará - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-kny7-629",
        "nome": "686 : Escola SENAI - São Joaquim da Barra - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-6fsm-634",
        "nome": "689 : Escola SENAI - Patrocínio Paulista - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-gg8r-639",
        "nome": "692 : Escola SENAI - São Simão - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-3sax-644",
        "nome": "695 : Escola SENAI - Guará - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-pqye-649",
        "nome": "698 : Escola SENAI - Patrocínio Paulista - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-rwps-654",
        "nome": "701 : Escola SENAI - São Joaquim da Barra - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-kodz-659",
        "nome": "704 : Escola SENAI - São Simão - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-nivj-664",
        "nome": "707 : Escola SENAI - Patrocínio Paulista - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-3bt5-669",
        "nome": "710 : Escola SENAI - Batatais - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-v3wn-674",
        "nome": "713 : Escola SENAI - Guará - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-1nbu-679",
        "nome": "716 : Escola SENAI - Patrocínio Paulista - Dr. Celso Charuri"
    },
    {
        "id": "select2-filtroUnidades-result-i6rx-684",
        "nome": "719 : Escola SENAI - São Joaquim da Barra - Dr. Celso Charuri"
    }
]

// const DropdownOptions = ({...props}) => {

//     return (
//         <>
//         <Dropdown
//       clearable
//       fluid
//       multiple
//       search
//       selection
//       {...props}
//       options={options}
//     />
//     <Lista />
//         </>
//     )
// }

  // export default DropdownOptions