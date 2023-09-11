import React from 'react';
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
            horario: '7:00 AM',
            programacion: [hiEnergy, hiEnergy, hiEnergy, hiEnergy, hiEnergy, hiEnergy, hiEnergy],
        },
        {
            horario: '8:00 AM',
            programacion: [puroFutbol, puroFutbol, puroFutbol, puroFutbol, puroFutbol, NCAA, puroFutbol],
        },
        {
            horario: '9:00 AM',
            programacion: [NCAA, NCAA, NCAA, NCAA, NCAA, NCAA, NCAA],
        },
        {
            horario: '10:00 AM',
            programacion: [NCAA, NCAA, NCAA, NCAA, NCAA, NCAA, NCAA],
        },
        {
            horario: '1:00 PM',
            programacion: [BLK, BLK, BLK, BLK, BLK, NCAA, BLK],
        },
        {
            horario: '2:00 PM',
            programacion: [puroFutbol, puroFutbol, puroFutbol, puroFutbol, puroFutbol, NCAA, puroFutbol],
        },
        {
            horario: '5:00 PM',
            programacion: [puroFutbol, NCAA, LMB, NCAA, NCAA, ligaBBVA, NCAA],
        },
        {
            horario: '7:00 PM',
            programacion: [BLK, BLK, LMB, BLK, HipUnch, ligaBBVA, BLK],
        },
        {
            horario: '9:00 PM',
            programacion: [puroFutbol, puroFutbol, LMB, puroFutbol, HipUnch, ligaBBVA, puroFutbol],
        },
        {
            horario: '10:00 PM',
            programacion: [hiNews, hiNews, hiNews, hiNews, HipUnch, BLK, hiNews],
        },
    ];
    return (
        <Row justify='center' className='efectoDescripcion' id='programación'>
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
                    PROGRAMACIÓN
                </Divider>
                <Card isBlurred className='border-none bg-purple-600/40 cardEffect'>
                    <CardBody>
                        <Table color='success' removeWrapper aria-label='Example table with dynamic content'>
                            <TableHeader>
                                {columns.map((column, i) => (
                                    <TableColumn style={{ backgroundColor: '#ca6ce6', color: 'white' }} key={i}>
                                        {column}
                                    </TableColumn>
                                ))}
                            </TableHeader>

                            <TableBody>
                                {rows.map((row, i) => (
                                    <TableRow style={{ color: 'white' }} key={i}>
                                        <TableCell>{row.horario}</TableCell>
                                        <TableCell>
                                            <Image className='imgTable' src={row.programacion[0]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell>
                                            <Image className='imgTable' src={row.programacion[1]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell>
                                            <Image className='imgTable' src={row.programacion[2]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell>
                                            <Image className='imgTable' src={row.programacion[3]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell>
                                            <Image className='imgTable' src={row.programacion[4]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell>
                                            <Image className='imgTable' src={row.programacion[5]} alt='Programacion' />
                                        </TableCell>
                                        <TableCell>
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
