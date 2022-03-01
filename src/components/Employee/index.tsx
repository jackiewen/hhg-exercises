import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Button
} from "react-bootstrap";
import Paginate from './../Paginate';
import IEmployee from './../../types/IEmployee';
import IPaginate, { ISelected } from './../../types/IPaginate';

import EmployeeService from './../../services/employee';

const Employee = () => {
  const perPage = 5;
  const [total, setTotal] = useState<number>(0);
  const [data, setData] = useState<IEmployee[]>([]);
  const [pagi, setPagi] = useState<IPaginate>({
    page: 1,
    limit: perPage,
  });

  useEffect(() => {
    getTotal();
  }, []);

  useEffect(() => {
    getList(pagi);
  }, [pagi]);

  const getTotal = async () => {
    const totalNum = await EmployeeService.getTotal();
    setTotal(totalNum);
  }

  const getList = async (paginate: IPaginate) => {
    const { data } = await EmployeeService.getList(paginate);
    setData(data);
  }

  const handlePageClick = ({ selected }: ISelected) => {
    setPagi({...pagi, page: selected + 1});
  }

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">Name</th>
                    <th className="border-0">Email</th>
                    <th className="border-0">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.length > 0 && data.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.position}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Row>
                <Col className="d-flex justify-content-center">
                  {data?.length > 0 &&
                    <Paginate
                      onPageChange={handlePageClick}
                      pageCount={Math.ceil(total / perPage)}
                    />
                  }
                  
                </Col>
              </Row>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Employee;