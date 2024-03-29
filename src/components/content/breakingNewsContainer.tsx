// @ts-nocheck

import { Row, Col, Divider, Button, Spin } from "antd";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import Carousel from "../carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogs, getVideoBlogs } from "../../services/BlogsService";
import { getPresentadores } from "../../services/PresentadoresService";
import { getSbTypeId } from "../../services/CalienteOddService";
import React from "react";
import { format } from "date-fns";
import esLocale from "date-fns/locale/es";
import { LoadingOutlined } from "@ant-design/icons";

import { PlayCircleOutlined } from "@ant-design/icons";
interface DataType {
  image: string;
  autor: string;
  title: string;
  slug: string;
  content: string;
  category: { name: string };
  createdAt: string;
}

interface DataTypeBlog {
  image: string;
  title: string;
  slug: string;
  content: string;
  url: string;
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

export default function BreakingNewsContainer() {
  const [showIntersectionObserver, setShowIntersectionObserver] =
    useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingCast, setLoadingCast] = useState(true);

  const [listaBlog, setListaBlog] = useState<DataType[]>([]);
  const [listaBlog2, setListaBlog2] = useState<DataTypeBlog[]>([]);
  const [listaPresentadores, setPresentadores] = useState<DataTypeCast[]>([]);
  const [prueba, setPrueba] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getBlogs();
      setListaBlog(response);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };

  const loaderIcon = (
    <LoadingOutlined style={{ fontSize: "200px", color: "#8e44ad" }} />
  );
  const fetchDataPrueba = async () => {
    try {
      const response = await getVideoBlogs();
      setListaBlog2(response);
      setLoading(false); // Después de cargar los datos, establece loading en false
    } catch (error) {
      console.error("Error al cargar los datos", error);
      setLoading(false); // Después de cargar los datos, establece loading en false
    }
  };

  const fetchDataCast = async () => {
    try {
      const response = await getPresentadores();
      setPresentadores(response);
      setLoadingCast(false); // Después de cargar los datos, establece loading en false
    } catch (error) {
      console.error("Error al cargar los datos", error);
      setLoadingCast(false); // Después de cargar los datos, establece loading en false
    }
  };

  const fetchDataXML = async () => {
    try {
      const response = await getSbTypeId();
      // console.log(response);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataCast();
    fetchDataPrueba();
    //fetchDataXML();
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


      <br />
      <Row justify="center">
        <Col span={22}>
          <Divider
            orientation="left"
            style={{ color: "white", fontSize: "2.3em" }}
          >
            Videoblogs
          </Divider>
          <Card
            isBlurred
            className="itemNavBar border-none bg-purple-600/40 cardEffect"
          >
            {loading ? (
              <div className="flex justify-center py-[200px]">
                <Spin spinning={loading} indicator={loaderIcon} size="large" />
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row">
                {/* Columna izquierda */}
                {listaBlog2.length === 0 ? null : (
                  <div className="w-full sm:w-1/2 lg:p-0 p-1">
                    <div className="relative">
                      <Link
                        href={`/blog/${listaBlog2[0]?.slug}?type=video`}
                        style={{ color: "white" }}
                      >
                        <img
                          src={listaBlog2[0]?.image}
                          className="lg:h-[30.8em] w-full"
                          alt="banner1"
                        />

                        <div className="absolute lg:top-1/3 lg:left-[18em] top-20 left-[10em]">
                          <PlayCircleOutlined className="lg:text-8xl text-5xl hover:text-gray-300" />
                        </div>
                      </Link>
                      <div className="absolute bottom-0 w-full bg-purple-600 bg-opacity-50 py-5">
                        <div className="flex justify-start mx-2">
                          <div className="flex flex-col">
                            <span className="lg:text-xl text-lg font-bold text-white">
                              {listaBlog2[0]?.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Columna derecha */}
                <div className="w-full sm:w-1/2 ">
                  <div className="flex flex-wrap">
                    {listaBlog2.slice(1, 3).map((elemento, index) => (
                      <div key={index} className="w-full sm:w-1/2 p-1">
                        <div className="relative">
                          <Link
                            href={`/blog/${elemento.slug}?type=video`}
                            style={{ color: "white" }}
                          >
                            <img
                              src={elemento.image}
                              alt=""
                              className="lg:h-60 h-full"
                            />
                            <div className="absolute lg:top-[5em] lg:left-[9em] top-20 left-[10em] ">
                              <PlayCircleOutlined className="text-5xl hover:text-gray-300" />
                            </div>
                          </Link>
                          <div className="absolute bottom-0 w-full bg-blue-600 bg-opacity-50 py-5">
                            <div className="flex justify-start mx-2">
                              <div className="flex flex-col">
                                <span className="lg:text-lg text-lg font-bold text-white">
                                  {elemento.title}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex ">
                    {listaBlog2.slice(3).map((elemento, index) => (
                      <div key={index} className="w-full sm:w-1/2 p-1 ">
                        <div className="relative">
                          <Link
                            href={`/blog/${elemento.slug}?type=video`}
                            style={{ color: "white" }}
                          >
                            <img
                              src={elemento.image}
                              className="lg:h-60 h-full"
                              alt=""
                            />
                            <div className="absolute lg:top-[5em] lg:left-[9em] top-20 left-[10em]">
                              <PlayCircleOutlined className="lg:text-5xl  text-2xl hover:text-gray-300" />
                            </div>
                          </Link>
                          <div className="absolute bottom-0 w-full bg-blue-600 bg-opacity-50 lg:py-5 py-3">
                            <div className="flex justify-start mx-2">
                              <div className="flex flex-col">
                                <span className="lg:text-2xl text-xl font-bold text-white">
                                  {elemento.title}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          
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
                <Col span={23}>
                  {loadingCast ? (
                    <div className="flex justify-center py-[200px]">
                      <Spin
                        spinning={loadingCast}
                        indicator={loaderIcon}
                        size="large"
                      />
                    </div>
                  ) : (
                    <Row justify="space-around" gutter={[8, 8]}>
                      {listaPresentadores.map((item, i) => (
                        <Col span={3} key={i}>
                          <Link href={item.url} target="_blank">
                            <Card
                              isFooterBlurred
                              radius="lg"
                              className="border-none zoom "
                              style={{ backgroundColor: "transparent" }}
                            >
                              <Image
                                style={{ objectFit: "cover" }}
                                src={item.image}
                                alt="Columnist"
                                className="lg:h-[12em] lg:w-[10em]"
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
                  )}
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
                            className="border-none zoom bg-purple-600/40 m-2"
                          >
                            <Image
                              src={item.image}
                              className="h-[13em] w-[10em] "
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
                      <div className="text-xs bg-purple-900 py-1">
                        Fecha:{" "}
                        <strong>
                          {format(item.createdAt, "dd 'de' LLLL 'de' yyyy", {
                            locale: esLocale,
                          })}{" "}
                        </strong>{" "}
                        | Autor <strong> {item.autor}</strong>{" "}
                      </div>

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
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.content as string,
                                }}
                              />
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
        ) : null}

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
