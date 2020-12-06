import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  PageHeader,
  Button,
  Select,
  Layout,
  Breadcrumb,
  Transfer,
  Tag,
  Tooltip,
} from 'antd';

const { Option } = Select;
const { Content } = Layout;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const inspectItem = [
  {
    key: 1,
    name: 'Line & Load Regulation',
    specification:
      '정격 Line(AC 120V/230V)으로 고정 후 출력 Load를 승인원에 명시된 Max 조건까지 가변 후 출력값 확인',
    type: 'continuous',
    ctq: true,
  },
  {
    key: 2,
    name: 'Over Current Protection',
    specification: '부하를 증가시켜 OCP 동작 구간 확인',
    type: 'continuous',
  },
  {
    key: 3,
    name: 'Ripple & Noise',
    specification:
      '정격 전압(120V / 230V) 입력 후 100% 부하 상태에서 출력단 양단을 측정함',
    type: 'continuous',
  },
  {
    key: 4,
    name: 'Efficiency',
    specification:
      '지역별(115V / 230V) 입력 조건에서 25% / 50%/ 75%/ 100% Load시 출력전압 및 소비 전력을 측정하여 평균 효율 산출 판정함',
    type: 'continuous',
  },
  {
    key: 5,
    name: 'Short 시험',
    specification:
      '지역별 전압, Full Load 상태 Plug 단자 間 Short 검사시 이상 없을것(1분)',
    type: 'discrete',
  },
];

const renderItem = (item) => {
  const customLabel = (
    <span className="custom-item">
      <Tooltip placement="topLeft" title={item.specification}>
        <Tag>{item.type}</Tag> {item.ctq ? <Tag color="red">CTQ</Tag> : ''}{' '}
        {item.name}
      </Tooltip>
    </span>
  );
  return {
    label: customLabel, // for displayed item
    value: item.title, // for title and filter matching
  };
};

const originTargetKeys = ''; //미리 선택된 항목 설정

const StyledPageHeader = styled(PageHeader)`
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
`;

const RequestedTable = ({ history }) => {
  const [targetKeys, setTargetKeys] = useState(originTargetKeys);

  const onChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  const handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  const filterOption = (inputValue, option) =>
    option.name.toLowerCase().indexOf(inputValue) > -1;

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
          title="Inspecion plan"
          subTitle="This is a subtitle"
          extra={[
            <Button key="2">Cancel</Button>,
            <Button key="1" type="primary">
              Next
            </Button>,
          ]}
        />
        <Transfer
          dataSource={inspectItem}
          listStyle={{
            width: '70%',
            height: 500,
          }}
          titles={['List', 'Plan']}
          showSearch
          oneWay
          render={renderItem}
          targetKeys={targetKeys}
          onChange={onChange}
          onSearch={handleSearch}
          filterOption={filterOption}
        />
      </Content>
    </>
  );
};

export default withRouter(RequestedTable);
