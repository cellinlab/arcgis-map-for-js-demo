import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Layout, Space, Button } from "antd";

import "./App.css";

import DisplayMap from "./pages/DisplayMap";
import DisplayScene from "./pages/DisplayScene";
import ChangeBasemaplayer from "./pages/ChangeBasemaplayer";
import DisplayVectorTileLayer from "./pages/DisplayVectorTileLayer";

import LinkBtn from "./components/LinkBtn";

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
              <LinkBtn to="/displaymap" text="DisplayMap" />
            </li>
            <li>
              <LinkBtn to="/displayscene" text="DisplayScene" />
            </li>
            <li>
              <LinkBtn to="/changebasemaplayer" text="ChangeBasemaplayer" />
            </li>
            <li>
              <LinkBtn to="/displayvectortilelayer" text="DisplayVectorTileLayer" />
            </li>
          </ul>
        </Sider>
        <Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<Navigate to="/displaymap" />} />
            <Route path="/displaymap" element={<DisplayMap />} />
            <Route path="/displayscene" element={<DisplayScene />} />
            <Route path="/changebasemaplayer" element={<ChangeBasemaplayer />} />
            <Route path="/displayvectortilelayer" element={<DisplayVectorTileLayer />} />
          </Routes>
        </Content>
      </Layout>
    </Space>
  );
};

export default App;
