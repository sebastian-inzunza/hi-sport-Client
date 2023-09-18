import React, { useState } from 'react';
import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from '@nextui-org/react';
import { Row, Col, Divider } from 'antd';

export default function ProgramacionContainer() {
    const columns = ['Horario', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const NCAA = 'https://hi-sports.tv/media/NCAA.png';
    const ligaBBVA = 'https://hi-sports.tv/media/LigaBBVA.png';
    const puroFutbol = 'https://hi-sports.tv/media/puroFutbol.png';
    const BLK = 'https://hi-sports.tv/media/BLK.png';
    const hiEnergy = 'https://hi-sports.tv/media/hiEnergy.png';
    const hiNews = 'https://hi-sports.tv/media/HiNews.png';
    const HipUnch = 'https://hi-sports.tv/media/HipUnch.png';
    const LMB = 'https://hi-sports.tv/media/LMB.png';

    const rows = [
        {
            hora: 7,
            horario: '7:00 AM',
            programacion: [hiEnergy, hiEnergy, hiEnergy, hiEnergy, hiEnergy, hiEnergy, hiEnergy],
        },
        {
            hora: 8,
            horario: '8:00 AM',
            programacion: [puroFutbol, puroFutbol, puroFutbol, puroFutbol, puroFutbol, NCAA, puroFutbol],
        },
        {
            hora: 9,
            horario: '9:00 AM',
            programacion: [NCAA, NCAA, NCAA, NCAA, NCAA, NCAA, NCAA],
        },
        {
            hora: 10,
            horario: '10:00 AM',
            programacion: [NCAA, NCAA, NCAA, NCAA, NCAA, NCAA, NCAA],
        },
        {
            hora: 13,
            horario: '1:00 PM',
            programacion: [BLK, BLK, BLK, BLK, BLK, NCAA, BLK],
        },
        {
            hora: 14,
            horario: '2:00 PM',
            programacion: [puroFutbol, puroFutbol, puroFutbol, puroFutbol, puroFutbol, NCAA, puroFutbol],
        },
        {
            hora: 17,
            horario: '5:00 PM',
            programacion: [puroFutbol, NCAA, LMB, NCAA, NCAA, ligaBBVA, NCAA],
        },
        {
            hora: 19,
            horario: '7:00 PM',
            programacion: [BLK, BLK, LMB, BLK, HipUnch, ligaBBVA, BLK],
        },
        {
            hora: 21,
            horario: '9:00 PM',
            programacion: [puroFutbol, puroFutbol, LMB, puroFutbol, HipUnch, ligaBBVA, puroFutbol],
        },
        {
            hora: 22,
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        },
        {
            hora: 22,
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        }, {
            hora: 22,
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        }, {
            hora: 22,
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        }, {
            hora: 22,
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        }, {
            hora: 22,
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        }, {
            hora: 22,
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        }, {
            hora: 22,
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        },
    ];

    return (
        <Row justify='center' className='efectoDescripcion' id='programación'>
            <Col xs={0} md={24}>
                <br />
                <br />
            </Col>
            <Col span={22}>
                <Divider orientation='left' style={{ color: 'white', fontSize: '2.3em' }}>
                    PROGRAMACIÓN
                </Divider>
                <Card isBlurred className='border-none bg-purple-600/40 cardEffect'>
                    <CardBody>
                        <Table isHeaderSticky classNames={{
                            base: "max-h-[520px] overflow-scroll",
                            table: "min-h-[420px]",
                        }} color='success' removeWrapper aria-label='Example table with dynamic content'>
                            <TableHeader>
                                {columns.map((column, i) => (
                                    <TableColumn style={{ backgroundColor: '#ca6ce6', color: 'white' }} key={i}>
                                        {column}
                                    </TableColumn>
                                ))}
                            </TableHeader>

                            <TableBody className=''>
                                {rows.map((row, i) => (
                                    <TableRow style={{ color: 'white' }} key={i}>
                                        <TableCell className={`${row.hora >= 9 && row.hora <= 17 ? 'bg-red-900/60' : false} ${row.hora === 9 ? 'rounded-tl-xl' : false} ${row.hora === 17 ? 'rounded-bl-xl' : false} `}>{row.horario}</TableCell>
                                        <TableCell className={`${row.hora >= 9 && row.hora <= 17 ? 'bg-red-900/60' : false} `}>
                                            <Image className='imgTable' src={row.programacion[0]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell className={`${row.hora >= 9 && row.hora <= 17 ? 'bg-red-900/60' : false}`}>
                                            <Image className='imgTable' src={row.programacion[1]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell className={`${row.hora >= 9 && row.hora <= 17 ? 'bg-red-900/60' : false}`}>
                                            <Image className='imgTable' src={row.programacion[2]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell className={`${row.hora >= 9 && row.hora <= 17 ? 'bg-red-900/60' : false}`}>
                                            <Image className='imgTable' src={row.programacion[3]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell className={`${row.hora >= 9 && row.hora <= 17 ? 'bg-red-900/60' : false}`}>
                                            <Image className='imgTable' src={row.programacion[4]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell className={`${row.hora >= 9 && row.hora <= 17 ? 'bg-red-900/60' : false}`}>
                                            <Image className='imgTable' src={row.programacion[5]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell className={`${row.hora >= 9 && row.hora <= 17 ? 'bg-red-900/60' : false}  ${row.hora === 9 ? 'rounded-tr-xl' : false} ${row.hora === 17 ? 'rounded-br-xl' : false}`}>
                                            <Image className='imgTable' src={row.programacion[6]} alt='Programacion' />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}