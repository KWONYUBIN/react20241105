import React from "react";
import { Table } from "@chakra-ui/react";

function MyApp27(props) {
  return (
    <div>
      <h3>chakra ui 테이블</h3>
      <Table.Root variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>번호</Table.ColumnHeader>
            <Table.ColumnHeader>제목</Table.ColumnHeader>
            <Table.ColumnHeader>작성자</Table.ColumnHeader>
            <Table.ColumnHeader>읽기</Table.ColumnHeader>
            <Table.ColumnHeader>날짜</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <hr />
      <h3>기본 테이블</h3>
      <table>
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Rem!</th>
            <th>Exercitationem.</th>
            <th>Harum.</th>
            <th>Odio.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Lorem.</th>
            <th>Magni?</th>
            <th>Voluptas!</th>
            <th>Quos!</th>
            <th>Itaque.</th>
          </tr>
          <tr>
            <th>Lorem.</th>
            <th>Accusantium?</th>
            <th>Debitis.</th>
            <th>Expedita?</th>
            <th>Odio!</th>
          </tr>
          <tr>
            <th>Lorem.</th>
            <th>Repellendus.</th>
            <th>Omnis.</th>
            <th>Ducimus.</th>
            <th>Libero.</th>
          </tr>
          <tr>
            <th>Lorem.</th>
            <th>Minima.</th>
            <th>Facilis?</th>
            <th>Quibusdam.</th>
            <th>Praesentium?</th>
          </tr>
          <tr>
            <th>Lorem.</th>
            <th>Suscipit?</th>
            <th>Vero?</th>
            <th>Cum.</th>
            <th>Minus.</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyApp27;
