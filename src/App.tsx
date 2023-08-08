import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout, Space, Button } from "antd";

import "./App.css";

import DisplayMap from "./pages/DisplayMap";

const { Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  background: "#fff",
  padding: 24,
  margin: 0,
  minHeight: 280,
};

const contentStyle: React.CSSProperties = {
  padding: 24,
  margin: 0,
  minHeight: 280,
};

const App = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100vw",
        height: "100%",
      }}
    >
      <Layout>
        <Sider style={siderStyle}>
          <ul>
            <li>
              <Button type="link">DisplayMap</Button>
            </li>
          </ul>
        </Sider>
        <Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<Navigate to="/displaymap" />} />
            <Route path="/displaymap" element={<DisplayMap />} />
          </Routes>
        </Content>
      </Layout>
    </Space>
  );
};

export default App;
