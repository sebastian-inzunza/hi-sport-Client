import { Row, Col, Divider } from 'antd';
import { Footer } from 'antd/es/layout/layout'
import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react';
import Carousel from '../carousel';
import Link from 'next/link';
import "../../styles/globals.css"




const listCarouselDesk = [
    {
        lista: [
            {
                source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg',
                deporte: 'NFL',

                juegos: [{
                    horario: '6:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },
                {
                    horario: '6:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },

                ]
            },
            {
                source: 'https://hi-sports.tv/media/NCAA.png',
                deporte: 'NFL',
                juegos: [{
                    horario: '6:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },
                ]
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
                source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg',
                deporte: 'NFL',
                juegos: [{
                    horario: '6:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },
                ]
            },
            {
                source: 'https://hi-sports.tv/media/NCAA.png',
                deporte: 'NFL',
                juegos: [{
                    horario: '6:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },
                ]
            },
            {
                source: 'https://hi-sports.tv/media/LigaBBVA.png',
                deporte: 'NFL',
                juegos: [{
                    horario: '6:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },
                ]
            },
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
        lista: [{
            source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg',
            deporte: 'NFL',
            juegos: [{
                horario: '6:00 PM',
                local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                nombreLocal: "NYJ",
                visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                nombreVisitante: "CLE",
                momioLocal: "+160",
                momioVisitante: "+155",
            },
            ]
        },
        {
            source: 'https://hi-sports.tv/media/NCAA.png',
            deporte: 'NFL',
            juegos: [{
                horario: '6:00 PM',
                local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                nombreLocal: "NYJ",
                visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                nombreVisitante: "CLE",
                momioLocal: "+160",
                momioVisitante: "+155",
            },
            ]
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
                source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg',
                deporte: 'NFL',

                juegos: [{
                    horario: '6:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },]
            },
        ],
    },
    {
        lista: [
            {
                source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg',
                deporte: 'NFL',

                juegos: [{
                    horario: '6:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },]
            },
        ],
    },
    {
        lista: [
            {
                source: 'https://tvazteca.brightspotcdn.com/dims4/default/83a09d3/2147483647/strip/true/crop/501x263+50+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F09%2Fad%2Fd6db4a7646a8930613c8a5c7aa4d%2Fcaliente-vista-previa.jpg',
                deporte: 'Seleccion Mexicana',

                juegos: [{
                    horario: '8:00 PM',
                    local: 'https://imgs.search.brave.com/eZLszwnydWlc4vh-VC5-3zFw7aOoE1gVS4PkEcJ0MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3LzNm/Lzk1Lzc3M2Y5NTBh/YzJjNDE3MTE2MWIz/YTUzNTNlZTkyMjRh/LS1sb2dvLWZvb3Ri/YWxsLWZvb3RiYWxs/LXNvY2Nlci5qcGc',
                    nombreLocal: "NYJ",
                    visitante: 'https://imgs.search.brave.com/uFjugh4yiiZRXs-LzCRm0d52LlOSR2odbnbdjMYtarw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk0L2Yx/LzI2Lzk0ZjEyNjJh/NTFlZjgwMjRlMjA5/MzMzZmVhOGY4ZDdh/LS1zb2NjZXItbG9n/by1sb2dvLWZvb3Ri/YWxsLmpwZw',
                    nombreVisitante: "CLE",
                    momioLocal: "+160",
                    momioVisitante: "+155",
                },]
            },
        ],
    },



]



const listColumnistas = [
    { source: 'https://hi-sports.tv/media/columnista1.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista2.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista3.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista4.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista5.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista6.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista7.png', nombre: 'Raúl Sarmiento' },
    { source: 'https://hi-sports.tv/media/columnista8.png', nombre: 'Raúl Sarmiento' },
];

const listaBlog = [
    {
        id: 1,
        source: 'https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/05/chinohuertatri2.jpg?itok=yGRMnuc0&changed=20230905210351',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "Pumas"
    },
    {
        id: 2,
        source: 'https://www.record.com.mx/sites/default/files/articulos/2023/09/06/20220409_4092-21.jpg',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "America"
    },
    {
        id: 3,
        source: 'https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/07/20190623_7651.jpg?itok=4jekrXIS&changed=20230907130157',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "Pumas"
    },
    {
        id: 4,
        source: 'https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/05/chinohuertatri2.jpg?itok=yGRMnuc0&changed=20230905210351',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "Pumas"
    },
    {
        id: 9,
        source: 'https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/05/chinohuertatri2.jpg?itok=yGRMnuc0&changed=20230905210351',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "Pumas"
    },
    {
        id: 5,
        source: 'https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/05/chinohuertatri2.jpg?itok=yGRMnuc0&changed=20230905210351',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "Pumas"
    },
    {
        id: 6,
        source: 'https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/05/chinohuertatri2.jpg?itok=yGRMnuc0&changed=20230905210351',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "Pumas"
    },
    {
        id: 7,
        source: 'https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/05/chinohuertatri2.jpg?itok=yGRMnuc0&changed=20230905210351',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "Pumas"
    },
    {
        id: 8,
        source: 'https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/09/05/chinohuertatri2.jpg?itok=yGRMnuc0&changed=20230905210351',
        titulo: 'CHINO HUERTA SOBRE ESTAR EN EL TRICOLOR: HABÍA TRABAJADO MUCHO, POR FIN SE PUDO DAR',
        descripcion: "El jugador de los Pumas recibió su primer llamado a la Selección y ya está bajo las órdenes de Jimmy Lozano",
        etiqueta: "Pumas"
    },

];
export default function BreakingNewsContainer() {
    return (
        <Row justify='center' id='última hora'>
            <Col xs={0} md={24}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Col>
            <Col span={22}>
                <Divider orientation='left' style={{ color: 'white', fontSize: '2.3em' }}>
                    ÚLTIMA HORA
                </Divider>
                <Card isBlurred className='itemNavBar border-none bg-purple-600/40 cardEffect'>
                    <Col xs={0} md={24}>
                        <Carousel>
                            {listCarouselDesk.map((page, index) => (
                                <Row justify='space-around' className='relative flex-[0_0_100%]' key={index}>
                                    <Col span={22}>
                                        <Row justify='space-around' gutter={[8, 8]}>
                                            {page.lista.map((item, i) => (
                                                <>
                                                    <Col span={2} key={i}>
                                                        <Col span={24}>Presentado por</Col>
                                                        <Col span={24} className='mt-4'>
                                                            <div className='w-24'>
                                                                <img src={item.source} className='imgCarousel' alt='alt' />

                                                            </div>
                                                        </Col>
                                                    </Col>
                                                    <div className="border-1 h-80"></div>
                                                    <Col span={2} key={i}>
                                                        <div className='mt-8'>
                                                            <span className='font-bold text-lg'>{item.deporte}</span>
                                                        </div>
                                                    </Col>
                                                    <div className="border-1 h-80"></div>

                                                    {item.juegos?.map((juego, index) => (

                                                        <>
                                                            <div className='w-40' key={index}>
                                                                <div className='flex justify-start mb-1'>
                                                                    <span>{juego.horario}</span>
                                                                </div>
                                                                <div className='flex'>
                                                                    <img src={juego.local} className='w-7 mr-2' alt='alt' />
                                                                    <span className='mr-2'>{juego.nombreLocal}</span>
                                                                    <span className='text-gray-300 mr-2'>0-0</span>
                                                                    <span className='text-gray-300 '>{juego.momioLocal}</span>
                                                                </div>
                                                                <div className='flex mt-2'>
                                                                    <img src={juego.visitante} className='w-7 mr-2' alt='alt' />
                                                                    <span className='mr-2'>{juego.nombreVisitante}</span>
                                                                    <span className='text-gray-300 mr-2'>0-0</span>
                                                                    <span className='text-gray-300 '>{juego.momioVisitante}</span>
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
                    <Col xs={24} md={0}>
                        <Carousel>
                            {listCarouselMobile.map((page, index) => (
                                <Row justify='space-around' className='relative flex-[0_0_100%]' key={index}>
                                    <Col span={22}>
                                        <Row justify='space-around' gutter={[8, 8]}>
                                            {page.lista.map((item, i) => (
                                                <>
                                                    {/* <Col span={2} key={i}>
                                                        <Col span={24}>Presentado por</Col>
                                                        <Col span={24} className='mt-4'>
                                                            <div className='w-24'>
                                                                <img src={item.source} className='imgCarousel' alt='alt' />

                                                            </div>
                                                        </Col>
                                                    </Col> */}
                                                    {/* <div className="border-1 h-80"></div>
                                                    <Col span={2} key={i}>
                                                        <div className='mt-8'>
                                                            <span className='font-bold text-lg'>{item.deporte}</span>
                                                        </div>
                                                    </Col> */}
                                                    <div className="border-1 h-80"></div>

                                                    {item.juegos?.map((juego, index) => (

                                                        <>
                                                            <div className='w-40' key={index}>
                                                                <div className='flex justify-start mb-1'>
                                                                    <span>{juego.horario}</span>
                                                                </div>
                                                                <div className='flex'>
                                                                    <img src={juego.local} className='w-7 mr-2' alt='alt' />
                                                                    <span className='mr-2'>{juego.nombreLocal}</span>
                                                                    <span className='text-gray-300 mr-2'>0-0</span>
                                                                    <span className='text-gray-300 '>{juego.momioLocal}</span>
                                                                </div>
                                                                <div className='flex mt-2'>
                                                                    <img src={juego.visitante} className='w-7 mr-2' alt='alt' />
                                                                    <span className='mr-2'>{juego.nombreVisitante}</span>
                                                                    <span className='text-gray-300 mr-2'>0-0</span>
                                                                    <span className='text-gray-300 '>{juego.momioVisitante}</span>
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
                <br />
                <Card isBlurred className='itemNavBar border-none bg-purple-600/40 cardEffect'>
                    <Col span={24}>
                        <Row justify={'space-around'} gutter={[8, 8]}>
                            <Col sm={24} md={12}>
                                <Link href={"/blog "}>
                                    <Image src={'https://hi-sports.tv/media/banner1.png'} className='fullWidth' alt='banner1' />

                                </Link>
                            </Col>
                            <Col sm={24} md={12}>
                                <Row justify='space-around' gutter={[8, 8]}>
                                    <Col span={12}>
                                        <Link href={"/blog "}>
                                            <Image src={'https://hi-sports.tv/media/banner2.png'} className='fullWidth' alt='banner1' />
                                        </Link>
                                    </Col>
                                    <Col span={12}>
                                        <Link href={"/blog "}>
                                            <Image src={'https://hi-sports.tv/media/banner3.png'} className='fullWidth' alt='banner1' />
                                        </Link>
                                    </Col>
                                </Row>
                                <Row justify='space-around' gutter={[8, 8]}>
                                    <Col span={12}>
                                        <Link href={"/blog "}>
                                            <Image src={'https://hi-sports.tv/media/banner4.png'} className='fullWidth' alt='banner1' />
                                        </Link>
                                    </Col>
                                    <Col span={12}>
                                        <Link href={"/blog "}>
                                            <Image src={'https://hi-sports.tv/media/banner5.png'} className='fullWidth' alt='banner1' />
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Card>

                <br />
                <Card isBlurred className='itemNavBar border-none bg-purple-600/40 cardEffect'>
                    <Col xs={0} md={24}>
                        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                            <p className=' text-large uppercase font-bold'>Presentadores</p>
                        </CardHeader>
                        <br />
                        <Row justify='space-around' className='relative flex-[0_0_100%]'>
                            <Col span={22}>
                                <Row justify='space-around' gutter={[8, 8]}>
                                    {listColumnistas.map((item, i) => (
                                        <Col span={3} key={i}>
                                            <Card isFooterBlurred radius='lg' className='border-none zoom' style={{ backgroundColor: 'transparent' }}>
                                                <img src={item.source} className='columnist' alt='Columnist' />

                                                <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
                                                    <p className='text-tiny text-white/80'>{item.nombre}</p>
                                                </CardFooter>
                                            </Card>
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
                        <Row justify='space-around' className='relative flex-[0_0_100%]'>
                            <Col span={22}>
                                <Row justify='space-around' gutter={[8, 8]}>
                                    {listColumnistas.map((item, i) => (
                                        <Col span={12} key={i}>
                                            <Card isFooterBlurred radius='lg' className='border-none zoom bg-purple-600/40'>
                                                <img src={item.source} className='columnist' alt='Columnist' />

                                                <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1  py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
                                                    <p className='text-tiny text-white/80'>{item.nombre}</p>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <br />
                    </Col>
                </Card>

                <div className="grid md:grid-cols-3 md:gap-4 mt-8">
                    {listaBlog.map((item, index) => (
                        <Link key={index} href={`/blog?id=${item.id}`}>
                            <div className={`p-2 mt-${index % 3 === 0 ? 0 : index % 3 === 1 ? 4 : 0}`}>
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={item.source}
                                        alt="Imagen de la columna"
                                        className="w-full h-auto transform scale-100 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div
                                        className={`absolute top-0 left-0 ${index % 3 === 0
                                            ? 'bg-gradient-to-r from-blue-500 to-green-500'
                                            : index % 3 === 1
                                                ? 'bg-gradient-to-r from-blue-500/40 to-blue-900'
                                                : 'bg-gradient-to-r from-red-500 to-pink-500'
                                            } text-white text-xl px-3 py-2 transform -translate-y-1/2 vertical-text rounded-t-md`}
                                    >
                                        {item.etiqueta}
                                    </div>
                                </div>
                                <div className="bg-purple-600/40 pb-8 rounded-b-lg">
                                    <div className="mx-3 pt-2">
                                        <div className="text-xl text-white font-bold uppercase text-center">
                                            <span>{item.titulo}</span>
                                        </div>
                                        <div>
                                            <span className="text-lg text-white text-justify">
                                                {item.descripcion}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>


            </Col >
        </Row >

    );
}
