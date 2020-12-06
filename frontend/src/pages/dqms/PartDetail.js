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
  Tooltip,
} from 'antd';

const { Option } = Select;
const { Content } = Layout;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    width: 80,
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
        text: 'REL',
        value: 'REL',
      },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },
  {
    title: 'Inspecion Item',
    dataIndex: 'item',
    width: 180,
    sorter: (a, b) => a.item.localeCompare(b.item),
    render: (text) => {
      return <Link to={`/${text}`}>{text}</Link>;
    },
  },
  {
    title: 'Specification',
    dataIndex: 'spec',
    ellipsis: {
      showTitle: false,
    },
    render: (spec) => (
      <Tooltip placement="topLeft" title={spec}>
        {spec}
      </Tooltip>
    ),
  },
  {
    title: 'Equipment',
    dataIndex: 'equipment',
    width: 100,
    ellipsis: {
      showTitle: false,
    },
    render: (equipment) => (
      <Tooltip placement="topLeft" title={equipment}>
        {equipment}
      </Tooltip>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 120,
    key: 'x',
    filters: [
      {
        text: 'waiting',
        value: 'waiting',
      },
      {
        text: 'testing',
        value: 'testing',
      },
      {
        text: 'rejected',
        value: 'rejected',
      },
      {
        text: 'complated',
        value: 'complated',
      },
    ],
    onFilter: (value, record) => record.status[1].indexOf(value) === 0,
    render: (text) => <Badge status={text[0]} text={text[1]} />,
  },
  {
    title: 'Result',
    dataIndex: 'result',
    width: 80,
    filters: [
      {
        text: 'OK',
        value: 'OK',
      },
      {
        text: 'NG',
        value: 'NG',
      },
    ],
  },
  {
    title: 'LSL',
    dataIndex: 'lsl',
    width: 60,
  },
  {
    title: 'Target',
    dataIndex: 'target',
    width: 60,
  },
  {
    title: 'USL',
    dataIndex: 'usl',
    width: 60,
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    width: 60,
  },
  {
    title: 'UOM',
    dataIndex: 'uom',
    width: 60,
  },
];

const data = [
  {
    key: '1',
    type: 'CTQ',
    item: 'Line & Load Regulation',
    status: ['error', 'rejected'],
    spec:
      '정격 Line(AC 120V/230V)으로 고정 후 출력 Load를 승인원에 명시된 Max 조건까지 가변 후 출력값 확인',
    lsl: 4.75,
    target: 5,
    usl: 5.25,
    qty: 30,
    equipment: 'DMM, Load',
    uom: 'V',
  },
  {
    key: '2',
    type: 'CTQ',
    item: 'Over Current Protection',
    status: ['processing', 'testing'],
    spec: '부하를 증가시켜 OCP 동작 구간 확인',
    lsl: 3000,
    target: 3300,
    usl: 3600,
    qty: 30,
    equipment: 'DMM, Load',
    uom: 'mA',
  },
  {
    key: '3',
    type: 'Normal',
    item: 'Ripple & Noise',
    status: ['default', 'complated'],
    result: 'OK',
    spec:
      '정격 전압(120V / 230V) 입력 후 100% 부하 상태에서 출력단 양단을 측정함',
    usl: 130,
    qty: 30,
    equipment: 'DMM, Load',
    uom: 'mA',
  },
  {
    key: '4',
    type: 'Normal',
    item: 'Efficiency',
    status: ['warning', 'waiting'],
    spec:
      '지역별(115V / 230V) 입력 조건에서 25% / 50%/ 75%/ 100% Load시 출력전압 및 소비 전력을 측정하여 평균 효율 산출 판정함',
    lsl: 80.23,
    qty: 10,
    equipment: 'Power Source / Power Meter / Loader / DVM',
    uom: '%',
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
