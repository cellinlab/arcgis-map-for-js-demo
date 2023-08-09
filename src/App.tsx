import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Layout, Space, Button } from "antd";

import "./App.css";

import DisplayMap from "./pages/DisplayMap";
import DisplayScene from "./pages/DisplayScene";
import ChangeBasemaplayer from "./pages/ChangeBasemaplayer";

const { Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  background: "#fff",
  margin: 0,
  height: "100vh",
};

const contentStyle: React.CSSProperties = {
  padding: 10,
  margin: 0,
  height: "100vh",
};

const App = () => {
  const navigate = useNavigate();

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
              <Button
                type="link"
                onClick={() => {
                  navigate("/displaymap");
                }}
              >
                DisplayMap
              </Button>
            </li>
            <li>
              <Button
                type="link"
                onClick={() => {
                  navigate("/displayscene");
                }}
              >
                DisplayScene
              </Button>
            </li>
            <li>
              <Button
                type="link"
                onClick={() => {
                  navigate("/changebasemaplayer");
                }}
              >
                ChangeBasemaplayer
              </Button>
            </li>
          </ul>
        </Sider>
        <Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<Navigate to="/displaymap" />} />
            <Route path="/displaymap" element={<DisplayMap />} />
            <Route path="/displayscene" element={<DisplayScene />} />
            <Route path="/changebasemaplayer" element={<ChangeBasemaplayer />} />
          </Routes>
        </Content>
      </Layout>
    </Space>
  );
};

export default App;
