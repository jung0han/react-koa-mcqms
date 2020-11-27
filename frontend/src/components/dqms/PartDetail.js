import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  Table,
  PageHeader,
  Button,
  Select,
  Badge,
  Layout,
  Breadcrumb,
} from 'antd';

const { Option } = Select;
const { Content } = Layout;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const columns = [
  {
    title: 'Inspection Type',
    dataIndex: 'type',
    width: 150,
    filters: [
      {
        text: 'Normal',
        value: 'normal',
      },
      {
        text: 'CTQ',
        value: 'CTQ',
      },
      {
        text: 'Rel',
        value: 'Rel',
      },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },
  {
    title: 'Inspecion Item',
    dataIndex: 'item',
    width: 200,
    sorter: (a, b) => a.partnumber.localeCompare(b.partnumber),
    render: (text) => {
      return <Link to={`/${text}`}>{text}</Link>;
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 120,
    key: 'x',
    render: (text) => <Badge status={text[0]} text={text[1]} />,
  },
  {
    title: 'Specification',
    dataIndex: 'spec',
    width: 300,
  },
  {
    title: 'LSL',
    dataIndex: 'lsl',
    width: 50,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Target',
    dataIndex: 'target',
    width: 50,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'USL',
    dataIndex: 'usl',
    width: 50,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
  },
  {
    title: 'Equipment',
    dataIndex: 'equipment',
  },
  {
    title: 'UOM',
    dataIndex: 'uom',
  },
];

const data = [
  {
    key: '1',
    type: 'Normal',
    item: 'Line & Load Regulation',
    status: ['error', 'NG'],
    spec: 'AC : 90V, Freq : 47hz, Load : No Load',
    lsl: 4.75,
    target: 5,
    usl: 5.25,
    qty: 30,
    equipment: 'DMM, Load',
    uom: 'V',
  },
  {
    key: '2',
    type: 'Normal',
    item: 'Line & Load Regulation',
    status: ['processing', 'testing'],
    spec: 'AC : 90V, Freq : 47hz, Load : 1300mA',
    lsl: 4.75,
    target: 5,
    usl: 5.25,
    qty: 30,
    equipment: 'DMM, Load',
    uom: 'V',
  },
  {
    key: '3',
    type: 'Normal',
    item: 'Line & Load Regulation',
    status: ['success', 'OK'],
    spec: 'AC : 120V, Freq : 60hz, Load : No Load',
    lsl: 4.75,
    target: 5,
    usl: 5.25,
    qty: 30,
    equipment: 'DMM, Load',
    uom: 'V',
  },
  {
    key: '4',
    type: 'Normal',
    item: 'Line & Load Regulation',
    status: ['default', 'waiting'],
    spec: 'AC : 120V, Freq : 60hz, Load : 1300mA',
    lsl: 4.75,
    target: 5,
    usl: 5.25,
    qty: 30,
    equipment: 'DMM, Load',
    uom: 'V',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const StyledPageHeader = styled(PageHeader)`
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
`;

const RequestedTable = ({ history }) => {
  console.log(history);
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Request Status</Breadcrumb.Item>
        <Breadcrumb.Item>Part Detail</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <StyledPageHeader
          className="site-page-header"
          onBack={() => history.goBack()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        />
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          size="small"
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                console.log(event, record, rowIndex);
              },
            };
          }}
        />
      </Content>
    </>
  );
};

export default withRouter(RequestedTable);
