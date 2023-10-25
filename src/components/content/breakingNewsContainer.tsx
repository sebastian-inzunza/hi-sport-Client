import { Row, Col, Divider } from "antd";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import Carousel from "../carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogs } from "../../services/BlogsService";
import { getPresentadores } from "../../services/PresentadoresService";
import React from "react";

interface DataType {
  image: string;
  title: string;
  slug: string;
  content: string;
  category: {name:string}
}

interface DataTypeCast {
  image: string;
  name: string;
  url: string;
}

const listCarouselDesk = [
  {
    lista: [
      {
        source:
          "https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg",
        deporte: "NFL",
        presentado: "Caliente",

        juegos: [
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },
      {
        source: "https://hi-sports.tv/media/NCAA.png",
        deporte: "NFL",
        presentado: "",
        juegos: [
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },

      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
    ],
  },

  {
    lista: [
      {
        source:
          "https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg",
        deporte: "NFL",
        presentado: "Caliente",

        juegos: [
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },
      {
        source:
          "https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg",
        deporte: "NFL",
        presentado: "Caliente",

        juegos: [
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },
      // {
      //     source: 'https://hi-sports.tv/media/NCAA.png',
      //     deporte: 'NFL',
      //     juegos: [
      //         {
      //             horario: '6:00 PM',
      //             local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
      //             nombreLocal: 'NYJ',
      //             visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
      //             nombreVisitante: 'CLE',
      //             momioLocal: '+160',
      //             momioVisitante: '+155',
      //         },
      //     ],
      // },
      // {
      //     source: 'https://hi-sports.tv/media/LigaBBVA.png',
      //     deporte: 'NFL',
      //     juegos: [
      //         {
      //             horario: '6:00 PM',
      //             local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
      //             nombreLocal: 'NYJ',
      //             visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
      //             nombreVisitante: 'CLE',
      //             momioLocal: '+160',
      //             momioVisitante: '+155',
      //         },
      //     ],
      // },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
    ],
  },
  {
    lista: [
      {
        source:
          "https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg",
        deporte: "NFL",
        presentado: "Caliente",

        juegos: [
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },
      {
        source: "https://hi-sports.tv/media/NCAA.png",
        deporte: "NFL",
        presentado: "",
        juegos: [
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },

      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
      // { source: 'https://hi-sports.tv/media/puroFutbol.png' },
      // { source: 'https://hi-sports.tv/media/NCAA.png' },
      // { source: 'https://hi-sports.tv/media/LigaBBVA.png' },
    ],
  },
];
const listCarouselMobile = [
  {
    lista: [
      {
        source:
          "https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg",
        deporte: "NFL",
        presentado: "Caliente",
        juegos: [
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },
    ],
  },
  {
    lista: [
      {
        source:
          "https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg",
        deporte: "NFL",
        presentado: "Caliente",
        juegos: [
          {
            horario: "6:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },
    ],
  },
  {
    lista: [
      {
        source:
          "https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg",
        deporte: "Seleccion Mexicana",
        presentado: "Caliente",

        juegos: [
          {
            horario: "8:00 PM",
            local:
              "https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc",
            nombreLocal: "NYJ",
            visitante:
              "https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw",
            nombreVisitante: "CLE",
            momioLocal: "+160",
            momioVisitante: "+155",
          },
        ],
      },
    ],
  },
];

const listColumnistas = [
  {
    source: "https://hi-sports.tv/media/columnista1.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista1.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista1.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista1.png",
    nombre: "Raúl Sarmiento",
  },

  {
    source: "https://hi-sports.tv/media/columnista1.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista1.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista1.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista1.png",
    nombre: "Raúl Sarmiento",
  },

  {
    source: "https://hi-sports.tv/media/columnista2.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista3.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista4.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista5.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista6.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista7.png",
    nombre: "Raúl Sarmiento",
  },
  {
    source: "https://hi-sports.tv/media/columnista8.png",
    nombre: "Raúl Sarmiento",
  },
];

// const listaBlog = [
//     {
//         id: 1,
//         source: 'https://imgs.search.brave.com/5LZU3-kdf7ODBYc5x5y7NY-xjq8VNSJvpMpaEogTW_w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hczAx/LmVwaW1nLm5ldC9m/dXRib2wvaW1hZ2Vu/ZXMvMjAyMi8wNi8w/My9wcmltZXJhLzE2/NTQyNzQ0NDdfODUz/NjU3XzE2NTQyNzQ3/MjVfcG9ydGFkYV9u/b3JtYWxfcmVjb3J0/ZTIuanBn',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'Pumas',
//     },
//     {
//         id: 2,
//         source: 'https://imgs.search.brave.com/MdriCZG47qUVJ8eKaBNnCU3luJO7t3cVP-noaaGCyKc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS0z/LWUxNTg3NDI4NzUz/NTkwLmpwZw',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'America',
//     },
//     {
//         id: 3,
//         source: 'https://imgs.search.brave.com/PF8NFRsdU_fz82OUzuP35Jxm1U7eIJ9WGyjSz9oPNBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS02/LWUxNTg3NDI5Njc3/NjUyLmpwZw',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'Liga MX',
//     },
//     {
//         id: 4,
//         source: 'https://imgs.search.brave.com/PF8NFRsdU_fz82OUzuP35Jxm1U7eIJ9WGyjSz9oPNBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS02/LWUxNTg3NDI5Njc3/NjUyLmpwZw',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'Pumas',
//     },
//     {
//         id: 9,
//         source: 'https://imgs.search.brave.com/PF8NFRsdU_fz82OUzuP35Jxm1U7eIJ9WGyjSz9oPNBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS02/LWUxNTg3NDI5Njc3/NjUyLmpwZw',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'America',
//     },
//     {
//         id: 5,
//         source: 'https://imgs.search.brave.com/PF8NFRsdU_fz82OUzuP35Jxm1U7eIJ9WGyjSz9oPNBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS02/LWUxNTg3NDI5Njc3/NjUyLmpwZw',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'Liga Mx',
//     },
//     {
//         id: 6,
//         source: 'https://imgs.search.brave.com/PF8NFRsdU_fz82OUzuP35Jxm1U7eIJ9WGyjSz9oPNBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS02/LWUxNTg3NDI5Njc3/NjUyLmpwZw',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'Pumas',
//     },
//     {
//         id: 7,
//         source: 'https://imgs.search.brave.com/PF8NFRsdU_fz82OUzuP35Jxm1U7eIJ9WGyjSz9oPNBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS02/LWUxNTg3NDI5Njc3/NjUyLmpwZw',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'America',
//     },
//     {
//         id: 8,
//         source: 'https://imgs.search.brave.com/PF8NFRsdU_fz82OUzuP35Jxm1U7eIJ9WGyjSz9oPNBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MDMvZGVwb3J0ZS02/LWUxNTg3NDI5Njc3/NjUyLmpwZw',
//         titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
//         descripcion: 'El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano',
//         etiqueta: 'Liga Mx',
//     },
// ];

export default function BreakingNewsContainer() {
  const [showIntersectionObserver, setShowIntersectionObserver] =
    useState(false);

  const [listaBlog, setListaBlog] = useState<DataType[]>([]);
  const [listaPresentadores, setPresentadores] = useState<DataTypeCast[]>([]);

  const fetchData = async () => {
    try {
      const response = await getBlogs();
      setListaBlog(response);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };

  const fetchDataCast = async () => {
    try {
      const response = await getPresentadores();
      setPresentadores(response);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };


  useEffect(() => {
    fetchData();
    fetchDataCast()
  }, []);




  useEffect(() => {
    // Verificar si IntersectionObserver está disponible en el navegador
    if (
      typeof window !== "undefined" &&
      typeof IntersectionObserver !== "undefined"
    ) {
      setShowIntersectionObserver(true);
    }
  }, []);

  useEffect(() => {
    if (showIntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      });

      const hiddenelement = document.querySelectorAll(".hiden-2");
      hiddenelement.forEach((el) => {
        observer.observe(el);
      });
    }
  }, [showIntersectionObserver]);

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };


  return (
    <>
      <Row justify="center" id="última hora">
        <Col xs={0} md={24}></Col>
        <Col span={22}>
          <Divider
            orientation="left"
            style={{ color: "white", fontSize: "2.3em" }}
          >
            ÚLTIMA HORA
          </Divider>
          <Card
            isBlurred
            className="itemNavBar border-none bg-purple-600/40 cardEffect"
          >
            <Col xs={0} md={24}>
              <Carousel>
                {listCarouselDesk.map((page, index) => (
                  <div className="flex" key={index}>
                    {page.lista.map((item, i) => (
                      <div className="flex lg:w-[690px]" key={i}>
                        <div
                          className={`p-4 w-4/12 ${
                            item.presentado === "Caliente"
                              ? "bg-caliente"
                              : null
                          } `}
                        >
                          <div className="block text-center items-center">
                            <span>Presentado por:</span>
                            <img
                              src={item.source}
                              className="w-1/2 mx-auto h-auto"
                              alt="alt"
                            />
                          </div>
                        </div>
                        <div className="border-r-1"></div>
                        <div className="h-auto flex justify-center items-center px-10">
                          <span className="font-bold text-lg">
                            {item.deporte}
                          </span>
                        </div>
                        <div className="border-r-1"></div>
                        {item.juegos?.map((juego, index) => (
                          <>
                            <div
                              className={`mx-auto pt-1 ${
                                item.juegos.length >= 3 ? "w-1/2" : "w-40"
                              }`}
                              key={index}
                            >
                              <div className="flex justify-start mb-1">
                                <span>{juego.horario}</span>
                              </div>
                              <div className="flex">
                                <Image
                                  src={juego.local}
                                  className="w-7 mr-2"
                                  alt="alt"
                                />
                                <span className="mr-2">
                                  {juego.nombreLocal}
                                </span>
                                <span className="text-gray-300 mr-2">0-0</span>
                                <span className="text-gray-300 ">
                                  {juego.momioLocal}
                                </span>
                              </div>
                              <div className="flex mt-2">
                                <Image
                                  src={juego.visitante}
                                  className="w-7 mr-2"
                                  alt="alt"
                                />
                                <span className="mr-2">
                                  {juego.nombreVisitante}
                                </span>
                                <span className="text-gray-300 mr-2">0-0</span>
                                <span className="text-gray-300 ">
                                  {juego.momioVisitante}
                                </span>
                              </div>
                            </div>
                            <div className="border-r-1"></div>
                          </>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </Carousel>
            </Col>
            <Col xs={24} md={0}>
              <Carousel>
                {listCarouselMobile.map((page, index) => (
                  <Row
                    justify="space-around"
                    className="relative flex-[0_0_100%]"
                    key={index}
                  >
                    <Col span={22}>
                      <Row justify="space-around" gutter={[8, 8]}>
                        {page.lista.map((item, i) => (
                          <>
                            <div className="border-1 h-80" key={i}></div>

                            {item.juegos?.map((juego, index) => (
                              <>
                                <div className="w-40" key={index}>
                                  <div className="flex justify-start mb-1">
                                    <span>{juego.horario}</span>
                                  </div>
                                  <div className="flex">
                                    <Image
                                      src={juego.local}
                                      className="w-7 mr-2"
                                      alt="alt"
                                    />
                                    <span className="mr-2">
                                      {juego.nombreLocal}
                                    </span>
                                    <span className="text-gray-300 mr-2">
                                      0-0
                                    </span>
                                    <span className="text-gray-300 ">
                                      {juego.momioLocal}
                                    </span>
                                  </div>
                                  <div className="flex mt-2">
                                    <Image
                                      src={juego.visitante}
                                      className="w-7 mr-2"
                                      alt="alt"
                                    />
                                    <span className="mr-2">
                                      {juego.nombreVisitante}
                                    </span>
                                    <span className="text-gray-300 mr-2">
                                      0-0
                                    </span>
                                    <span className="text-gray-300 ">
                                      {juego.momioVisitante}
                                    </span>
                                  </div>
                                </div>
                                <div className="border-1 h-80"></div>
                              </>
                            ))}
                          </>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Carousel>
            </Col>
          </Card>
        </Col>
        <div className=" relative mt-8">
          <img
            src="https://hi-sports.tv/media/CintaRosa.gif"
            className="md:w-full md:block hidden"
            alt=""
          />
        </div>
      </Row>

      <br />
      <Row justify="center" id="última hora">
        <Col span={22}>
          <Card
            isBlurred
            className="itemNavBar border-none bg-purple-600/40 cardEffect"
          >
            <Col span={24}>
              <Row justify={"space-around"} gutter={[8, 8]}>
                <Col sm={24} md={12}>
                  <Link href={"/blog "}>
                    <img
                      src={"https://hi-sports.tv/media/banner1.png"}
                      className="h-full"
                      alt="banner1"
                    />
                  </Link>
                </Col>
                <Col sm={24} md={12}>
                  <Row justify="space-around" gutter={[8, 8]}>
                    <Col span={12}>
                      <Link href={"/blog "}>
                        <img
                          src={"https://hi-sports.tv/media/banner2.png"}
                          className="fullWidth"
                          alt="banner1"
                        />
                      </Link>
                    </Col>
                    <Col span={12}>
                      <Link href={"/blog "}>
                        <img
                          src={"https://hi-sports.tv/media/banner3.png"}
                          className="fullWidth"
                          alt="banner1"
                        />
                      </Link>
                    </Col>
                  </Row>
                  <Row justify="space-around" gutter={[8, 8]}>
                    <Col span={12}>
                      <Link href={"/blog "}>
                        <img
                          src={"https://hi-sports.tv/media/banner4.png"}
                          className="fullWidth"
                          alt="banner1"
                        />
                      </Link>
                    </Col>
                    <Col span={12}>
                      <Link href={"/blog "}>
                        <img
                          src={"https://hi-sports.tv/media/banner5.png"}
                          className="fullWidth"
                          alt="banner1"
                        />
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Card>
        </Col>
        <div className=" relative mt-8">
          <img
            src="https://hi-sports.tv/media/CintaAzul.gif"
            className="md:w-full md:block hidden"
            alt=""
          />
        </div>
      </Row>

      <br />
      <Row justify="center" id="última hora">
        <Col span={22}>
          <Card
            isBlurred
            className="itemNavBar border-none bg-purple-600/40 cardEffect"
          >
            <Col xs={0} md={24}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className=" text-large uppercase font-bold">Presentadores</p>
              </CardHeader>
              <br />
              <Row justify="space-around" className="relative flex-[0_0_100%]">
                <Col span={22}>
                  <Row justify="space-around" gutter={[8, 8]}>
                    {listaPresentadores.map((item, i) => (
                      <Col span={3} key={i}>
                        <Link href={item.url} target="_blank">
                        <Card
                          isFooterBlurred
                          radius="lg"
                          className="border-none zoom"
                          style={{ backgroundColor: "transparent" }}
                        >
                          <Image
                            src={item.image}
                            className="columnist"
                            alt="Columnist"
                          />

                          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-white/80">
                              {item.name}
                            </p>
                          </CardFooter>
                        </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
              <br />
              <br />
            </Col>
            <Col xs={24} md={0}>
              <br />
              <Row justify="space-around" className="relative flex-[0_0_100%]">
                <Col span={22}>
                  <Row justify="space-around" gutter={[8, 8]}>
                    {listaPresentadores.map((item, i) => (
                      <Col span={12} key={i}>
                        <Link href={item.url} target="_blank">

                        <Card
                          isFooterBlurred
                          radius="lg"
                          className="border-none zoom bg-purple-600/40"
                        >
                          <Image
                            src={item.image}
                            className="columnist"
                            alt="Columnist"
                          />

                          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1  py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-white/80">
                              {item.name}
                            </p>
                          </CardFooter>
                        </Card>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
              <br />
              <br />
            </Col>
          </Card>
        </Col>
        <div className=" relative mt-8">
          <img
            src="https://hi-sports.tv/media/CintaMorado.gif"
            className="md:w-full md:block hidden"
            alt=""
          />
        </div>
      </Row>
      <Row justify="center" id="última hora">
      {listaBlog.length > 0 ? (
         <Col span={22}>
           
         <div className="grid md:grid-cols-3 md:gap-4 mt-8">
           {listaBlog.map((item, index) => (
             <div key={index}>
               <div
                 className={`p-2 mt-${
                   index % 3 === 0 ? 0 : index % 3 === 1 ? 4 : 0
                 }`}
               >
                 <div className="relative overflow-hidden group">
                   <Link href={`/blog/${item.slug}`}>
                     <img
                       src={item.image}
                       alt="Imagen de la columna"
                       className="w-full h-[17em] lg:h-[18em] transform scale-100 group-hover:scale-110 transition-transform duration-300"
                     />
                   </Link>
                   <div
                     className={`absolute top-0 left-0 ${
                       index % 3 === 0
                         ? "bg-gradient-to-r from-blue-500 to-green-500"
                         : index % 3 === 1
                         ? "bg-gradient-to-r from-blue-500/40 to-blue-900"
                         : "bg-gradient-to-r from-red-500 to-pink-500"
                     } text-white text-xl px-3 py-2 transform -translate-y-1/2 vertical-text rounded-t-md`}
                   >
                     {item.category.name}
                   </div>
                 </div>
                 <div className="bg-purple-600/40 rounded-b-lg">
                   <div className="mx-3 pt-2">
                     <div className="text-md text-white font-bold uppercase text-center">
                       <span>{item.title}</span>
                     </div>
                     <div className="mt-2">
                       <div className="h-18 overflow-hidden">
                         <span
                           style={{ color: "#ffee92" }}
                           className="text-base text-white text-justify line-clamp-3"
                         >
                           {item.content}
                         </span>
                       </div>
                     </div>
                   </div>
                   <div className="bg-violet-400/70 mt-4 rounded-bl-lg rounded-br-lg flex justify-between mx-auto">
                     <button className=" w-1/2 p-2 items-center flex justify-center border-2 border-violet-700/40 rounded-bl-lg hover:bg-violet-600/70 ease-in duration-300  ">
                       <img
                         src="https://hi-sports.tv/media/me-gusta.png"
                         className="w-8"
                         alt=""
                       />
                     </button>
                     <button className="w-1/2 p-2 items-center flex justify-center border-2  border-violet-700/40  rounded-br-lg ease-in duration-300 hover:bg-violet-600/70">
                       <img
                         src="https://hi-sports.tv/media/disgusto.png"
                         className="w-8"
                         alt=""
                       />
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </Col>
      ): null}
       
        <div className=" relative mt-8">
          <img
            src="https://hi-sports.tv/media/CintaRosa.gif"
            className="md:w-full md:block hidden"
            alt=""
          />
        </div>
      </Row>
    </>
  );
}
