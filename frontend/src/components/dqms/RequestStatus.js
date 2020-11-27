import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Table,
  PageHeader,
  Button,
  Form,
  Row,
  Col,
  Input,
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
    title: 'Status',
    dataIndex: 'status',
    width: 120,
    key: 'x',
    render: (text) => <Badge status={text[0]} text={text[1]} />,
  },
  {
    title: 'Part No',
    dataIndex: 'partnumber',
    width: 120,
    sorter: (a, b) => a.partnumber.localeCompare(b.partnumber),
    render: (text) => {
      return <Link to={`/DQMS/${text}`}>{text}</Link>;
    },
  },
  {
    title: 'Part Name',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: 'Vendor',
    dataIndex: 'vendor',
    width: 120,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    width: 100,
    filters: [
      {
        text: '회로',
        value: '회로',
      },
      {
        text: '기구',
        value: '기구',
      },
    ],
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 80,
    filters: [
      {
        text: 'New',
        value: 'New',
      },
      {
        text: '4M',
        value: '4M',
      },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },
  {
    title: 'Seq.',
    dataIndex: 'seq',
    width: 50,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Requester',
    dataIndex: 'requester',
  },
  {
    title: 'Tester',
    dataIndex: 'tester',
  },
  {
    title: 'Planner',
    dataIndex: 'planner',
  },
];

const data = [
  {
    key: '1',
    partnumber: 'EAB23456784',
    type: 'New',
    seq: 1,
    name: 'PMIC',
    category: '회로',
    vendor: 'Qualcomm',
    requester: '아무개',
    tester: '홍길동',
    planner: '정동우',
    status: ['warning', 'rcv.waiting'],
  },
  {
    key: '2',
    partnumber: 'EAB23456789',
    type: '4M',
    seq: 2,
    name: 'PMIC',
    category: '회로',
    vendor: 'Qualcomm',
    requester: '아무개',
    tester: '홍길동',
    planner: '정동우',
    status: ['processing', 'testing'],
  },
  {
    key: '3',
    partnumber: 'EAB23456788',
    type: 'New',
    seq: 1,
    name: 'AP',
    category: '회로',
    vendor: 'Qualcomm',
    requester: '아무개',
    tester: '홍길동',
    planner: '정동우',
    status: ['default', 'complate'],
  },
  {
    key: '4',
    partnumber: 'EAB23456787',
    type: 'New',
    seq: 1,
    name: 'Front Cover',
    category: '기구',
    vendor: 'BYD',
    requester: '아무개',
    tester: '홍길동',
    planner: '정동우',
    status: ['error', 'rejected'],
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

const SearchForm = styled(Form)`
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  margin-bottom: 24px;
  .SearchInput {
    margin-right: 10px;
  }
`;

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const RequestedTable = ({ history }) => {
  const [form] = Form.useForm();

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  console.log(history);

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Request Status</Breadcrumb.Item>
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
          title="DQMS"
          subTitle="Request Status"
        />
        <SearchForm
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                className="SearchInput"
                label="Part No"
                style={{ marginBottom: 0 }}
              >
                <Form.Item name="partnumber">
                  <Input placeholder="Input birth year" />
                </Form.Item>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className="SearchInput"
                label="Birth"
                style={{ marginBottom: 0 }}
              >
                <Form.Item
                  name="year"
                  style={{ display: 'inline-block', width: '100%' }}
                >
                  <Input placeholder="Input birth year" />
                </Form.Item>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className="SearchInput"
                label="Birth"
                style={{ marginBottom: 0 }}
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                  onChange={handleChange}
                >
                  {children}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
            </Col>
          </Row>
        </SearchForm>
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

export default RequestedTable;
