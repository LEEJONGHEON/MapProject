import Table from 'react-bootstrap/Table';

const ResultTable = ({result}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>시도</th>
          <th>시군구</th>
          <th>읍면동</th>
          <th>구역</th>
          <th>장소</th>
        </tr>
      </thead>
      <tbody>
        {result && result.map((data,index) => (
          <tr>
            <td>{data.siDo}</td>
            <td>{data.siKunKu}</td>
            <td>{data.eubMyeonDong}</td>
            <td>{data.kuYeokKuBun}</td>
            <td>{data.jangSo}</td>
          </tr>
        ))}
        
      </tbody>
    </Table>
  );
}

export default ResultTable;