import { TableSection } from '../UI/Table/Table';
import { Heading, Paragraph } from '../UI/Typography/Typography';
import { StyledTable } from './Table.styled';

function Table({ title = "Provinsi", subtitle = "Data Covid berdasarkan Provinsi", tableData = [] }) {
    return (
        <StyledTable>
            <section>
                <div>
                    <Heading>{title}</Heading>
                    <Paragraph>{subtitle}</Paragraph>
                </div>
                <TableSection>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Provinsi</th>
                                <th>Kasus</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((province, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{province.provinsi}</td>
                                    <td>{province.kasus}</td>
                                    <td>{province.sembuh}</td>
                                    <td>{province.dirawat}</td>
                                    <td>{province.meninggal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TableSection>
            </section>
        </StyledTable>
    );
}

export default Table;
